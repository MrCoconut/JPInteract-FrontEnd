<template>
  <div>
    <div id="app">
    <svg id="square" width="100%" height="100%" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
      <rect id="ArtbDard1" x="0" y="0" width="500" height="500" style="fill:#50748b;" /></svg>
    <router-view />
    <hr>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Teacher Login</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/normalize.css";
@import "./styles/common.css";
#app{
  padding: 40px;
  padding-bottom: 0;
}

#nav{
  padding-left: 40px;
  height: 100px;
}

#square {
  position: absolute;
  top: -30%;
  left: -120%;
  width: 800px;
  z-index: -1;
}

a{
  margin-right: 20px;
}
</style>
