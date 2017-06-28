<template>
    
  <b-navbar toggleable type="inverse">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-collapse is-nav id="nav_collapse">    
      <b-nav is-nav-bar>
        <b-nav-item><router-link to="manage-products" class="nav-item nav-link" active-class="active" exact > Manage Products </router-link></b-nav-item>
        <b-nav-item><router-link to="home" class="nav-item nav-link" active-class="active" exact> Home</router-link></b-nav-item>
        <b-nav-item><router-link to="home" class="nav-item nav-link" active-class="active" exact> Home</router-link></b-nav-item>
      </b-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {}
</script>

