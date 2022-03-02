<template>
  <div class="row">
    <h2 class="white-text inicial valign-wrapper text-align centered">
      Estamos para cumplir tus más dulces deseos
    </h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
      voluptate eum. Ratione possimus minima architecto culpa impedit non
      eligendi vero earum ad doloribus iste, a repudiandae enim laboriosam
      recusandae mollitia?
    </p>

    <h3 class="white-text #ffab00 amber accent-4 center-align">
      Productos más comprados
    </h3>

    <div class="fixed-action-btn">
      <router-link to="/carrito"
        ><a class="btn-floating btn-large waves-effect waves-light orange"
          ><i class="material-icons">add_shopping_cart</i></a
        ></router-link
      >
    </div>

    <br />



    <div v-for="i of datos" :key="i.id">

      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img :src="i.imagen" />
            <span class="card-title black-text">{{ i.nombre }}</span>
           <span v-if="i.id < 0" > {{i.encarrito}}</span>
            <a
              class="btn-floating halfway-fab waves-effect waves-light red"
              @click="carrito(i.id, i.nombre, i.precio, i.imagen , i.encarrito)"
              ><i class="material-icons orange">add</i></a
            >
          </div>
          <div class="card-content">
            <p>
              {{ i.precio }}
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
      datos: "productosDeseados",
    }),
  },
  methods: {
    ...mapActions({
      fechar: "getDeseados",
    }),
    buscar(id, objeto) {
      let data = [] = this.datos;
      console.log(data)
      for(let i=0; i< data.length; i++) {
        if (data[i].id === id) {
          console.log(data[i]);
          this.$store.dispatch("actCarrito", id)
        }else{
          this.$store.dispatch("addCarrito", objeto);
        }
      }
    },
    carrito(id, nombre, precio, imagen, encarrito) {
      

      let objeto = {
        id,
        nombre,
        precio,
        imagen,
        encarrito
        
      };
      this.buscar(objeto.id, objeto)
      //this.$store.dispatch("addCarrito", objeto);
    },
  },
  mounted() {
    this.fechar();
  },
};
</script>

<style lang="scss" scoped>
.inicial {
  text-align: center;
  background-image: url("https://cdn.pixabay.com/photo/2013/09/18/18/24/chocolate-183543_960_720.jpg");
  height: 400px;
  width: 100%;
}
</style>