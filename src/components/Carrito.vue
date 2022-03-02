<template>
  <div class="row">
    <h2 class="white-text inicial valign-wrapper text-align centered">
      Puedes editar tu carrito de compras como quieras
     </h2>

      <div class="center-align    ">
        <a href="#!"><router-link class="btn orange white-text" to="/">Volver</router-link></a>
      </div>

    

    <h3 class="white-text #ffab00 amber accent-4 center-align">
      
    </h3>

    <br />
    
    <h4 v-if="datos.length === 0" class="center-align orange white-text ">El carrito se encuentra vacio</h4>

    <div v-for="i of datos" :key="i.id">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img :src="i.imagen" />
            <span class="card-title black-text">{{ i.nombre }}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red" @click="eliminar(i.id)"
              ><i class="material-icons">delete</i></a
            >
          </div>
          <div class="card-content">
            <p>
              Precio: {{ i.precio }}
            </p>
            <p>
              En carrito: {{ i.encarrito }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Pie />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Pie from "@/components/Pie.vue";
export default {
  name: "PaginaPrincipal",
  components: {
    Pie,
  },
  computed: {
    ...mapGetters({
      datos: "carrito",
    }),
  },
  methods: {
    ...mapActions({
      fechar: "getCarrito",
    }),
    eliminar(id){
      this.$store.dispatch("eliminar",id)
    }
  },
  mounted() {
    this.fechar();
  },
};
</script>

<style lang="scss" scoped>
.inicial {
  text-align: center;
  background-image: url("https://cdn.pixabay.com/photo/2018/02/21/10/46/stock-3170020_960_720.jpg");
  height: 400px;
  width: 100%;
}
</style>