<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <a href="teacherlogin.html">Teacher Login</a>
    <a href="about.html">About JPInteract</a>
  </div>
</template>

<style lang="scss">
@import "./styles/normalize.css";
@import "./styles/common.css";
</style>
