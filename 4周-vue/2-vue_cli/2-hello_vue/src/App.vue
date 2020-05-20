<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/order">Order</router-link>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.left {
  float: left;
  width: 40%;
}
.right {
  float: left;
  width: 40%;
}
</style>
