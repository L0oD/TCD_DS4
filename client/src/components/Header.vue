<template>
  <nav class="navigation">
    <router-link to="/home">Home
    </router-link>
    <router-link style="margin-left: 15px;" to="/produto">Produto
    </router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.navigation{
    background-color:white;
    height: 80px;
    top:0;
    border-bottom:1px solid black;
    display:flex;
    align-items:center;
    box-sizing: border-box;
}

</style>