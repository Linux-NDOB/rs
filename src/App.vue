<template>
  <div class="container">
    <nav class="#ff6d00 orange accent-4">
      <div class="nav-wrapper">
         <a href="#!" class="brand-logo"><i class="material-icons">cake</i>Dulcería RS</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="#"><router-link to="/">Página Principal</router-link></a>
          </li>
          <li>
            <a href="#"><router-link to="/dulces">Dulces</router-link> </a>
          </li>
          <li>
            <a href="#"><router-link to="/registro">Regístrate</router-link> </a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
h1,h2,h3,h4{
  font-family: Roboto;
}
p{
  font-family: Lato;
}
</style>