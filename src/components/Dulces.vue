<template>
  <div class="row">
    <h2 class="white-text inicial valign-wrapper text-align centered">
      Atrévete a probar nuestros más deliciosos dulces
    </h2>

    <h3 class="white-text #ffab00 amber accent-4 center-align">
      
    </h3>

    <div class="fixed-action-btn">
      <router-link to="/carrito"
        ><a class="btn-floating btn-large waves-effect waves-light orange"
          ><i class="material-icons">add_shopping_cart</i></a
        ></router-link
      >
    </div>

    

    <div v-for="i of datos" :key="i.id">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img :src="i.imagen" />
            <span class="card-title black-text italic" >{{ i.nombre }}</span>
            
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
      datos: "productos",
    }),
  },
  methods: {
    ...mapActions({
      fechar: "getProductos",
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
  background-image: url("https://cdn.pixabay.com/photo/2017/12/01/16/14/cookies-2991174_960_720.jpg");
  height: 400px;
  width: 100%;
}
span{
  font-style: italic;
}
</style>