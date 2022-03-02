<template>
  <div class="jumbotron">
    <div class="">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2 class="black white-text center-align orange darken-4">
              Registrarse
            </h2>

            <form @submit.prevent="submit">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="text" v-model="usuario.email" />
                <span v-if="v$.usuario.email.$error">
                  {{ v$.usuario.email.$errors[0].$message }}
                </span>
              </div>

              <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" v-model="usuario.password" />
                <span v-if="v$.usuario.password.$error">
                  {{ v$.usuario.password.$errors[0].$message }}
                </span>
              </div>
              <div class="form-group">
                <label for="confirmPassword">Confirmar Contraseña</label>
                <input type="password" v-model="usuario.confirmPassword" />
                <span v-if="v$.usuario.confirmPassword.$error">
                  {{ v$.usuario.confirmPassword.$errors[0].$message }}
                </span>
              </div>
              <br />
              <br />

              <div class="form-group center-align">
                <button
                  class="btn btn-primary white-text orange darken-4"
                  @click="enviar"
                >
                  Registrarse
                </button>
                <router-link
                  to="/"
                  class="btn btn-primary orange darken-4 white-text"
                  >Volver</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Pie />
  </div>
</template>

<script>
import _ from "lodash";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "@vuelidate/validators";
import Pie from "@/components/Pie.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "app",

  setup() {
    const store = useStore();
    let vector = computed(() => store.getters.usuarios);

    return {
      vector,
      onMounted() {
        console.log("a");
      },

      // access a state in computed function
    };
  },
  components: {
    Pie,
  },
  data() {
    return {
      v$: useVuelidate(),
      usuario: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      vector: "usuarios",
    }),
  },
  validations() {
    return {
      usuario: {
        email: { required, email },
        password: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(13),
        },
        confirmPassword: { required, sameAs: sameAs(this.usuario.password) },
      },
    };
  },

  methods: {
    ...mapActions({
      get: "getUsuarios",
    }),
    enviar: _.debounce(function () {
      this.v$.$validate();

      if (!this.v$.$error) {
        this.$store.dispatch("addUsuario", this.usuario);
        alert("Registrado con exito ");
      } else {
        alert("Cumpla los requisitos para poder Registrar");
      }
    }, 1000),
  //   correo(correo) {
  //     this.v$.$validate();
  //     let data = this.vector;
  //     console.log(data[0].email);
  //     for (let i = 0; i < data.length; i++) {
  //       if (data[i].email == correo ) {
  //         console.log(this.usuario);

  //         alert("correo ya registrado o formulario invalido");
          
  //       } else if( data[i].email !== correo) {
  //         this.$store.dispatch("addUsuario", this.usuario);
         
  //         alert("Registrado con exito");
         
  //       }
  //     }
  //   },
  },
  mounted() {
    this.get();
  },
};
</script>

<style scoped lang="scss">
.btn {
  margin-right: 1%;
}

h2,
h3 {
  font-family: Lato;
}
</style>