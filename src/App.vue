<template>
  <div>
    <div id="app">
    <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/normalize.css";
@import "./styles/common.css";
#app{
  padding-top: 40px;
  padding-left: 120px;
  padding-right: 120px;
  padding-bottom: 40px;
  margin: 0;
}
@media(max-width: 1023px){
  #app{
    padding-top: 20px;
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 20px;
  }
}
@media (max-width: 700px){
  #app{
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 20px;
  }
}
</style>
