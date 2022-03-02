import { createStore } from "vuex";

export default createStore({
  state: {
    productosDeseados: [],
    productos: [],
    usuarios: [],
    carrito: [],
  },

  actions: {
    getUsuarios({ commit }) {
      console.log("ok");
      fetch("http://localhost:3000/usuarios")
        .then((results) => results.json())
        .then((data) => {
          commit("setUsuarios", data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDeseados({ commit }) {
      console.log("ok");
      fetch("http://localhost:3000/productosDeseados")
        .then((results) => results.json())
        .then((data) => {
          commit("setDeseados", data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProductos({ commit }) {
      console.log("ok");
      fetch("http://localhost:3000/productos")
        .then((results) => results.json())
        .then((data) => {
          commit("setProductos", data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCarrito({ commit }) {
      console.log("ok");
      fetch("http://localhost:3000/carrito")
        .then((results) => results.json())
        .then((data) => {
          commit("setCarrito", data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addUsuario({ commit }, datos) {
      fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      })
        .then((res) => res.json())
        .then((res) => commit("setUsuario", res));

        alert("Registrado con exito")
    },
    addCarrito({ commit }, datos) {
      fetch("http://localhost:3000/carrito", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      })
        .then((res) => res.json())
        .then((res) => commit("setCarrito", res));
    },
    async actCarrito({ commit }, id) {

      let ans = await fetch("http://localhost:3000/carrito/" + id);
      let json = await ans.json();
      let encarrito = json.encarrito;

      fetch("http://localhost:3000/carrito/"+ id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          encarrito : encarrito+1

        })
      })
    },
     async eliminar ({ commit }, id) {
      
      fetch("http://localhost:3000/carrito/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })

      const res = await fetch("http://localhost:3000/carrito");

      const carrito = await res.json();

      commit("setCarrito", carrito);

      router.push('/carrito')

      
      

    },
  },
  mutations: {
    setDeseados(state, datos) {
      state.productosDeseados = datos;
    },
    setProductos(state, datos) {
      state.productos = datos;
    },
    setUsuarios(state, datos) {
      state.usuarios = datos;
    },
    setCarrito(state, datos) {
      state.carrito = datos;
    },
  },
  getters: {
    productosDeseados: (state) => state.productosDeseados,
    productos: (state) => state.productos,
    usuarios: (state) => state.usuarios,
    carrito: (state) => state.carrito,
  },
});
