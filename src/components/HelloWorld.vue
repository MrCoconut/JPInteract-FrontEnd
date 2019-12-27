<template>
<div>
  <svg id="square" width="100%" height="100%" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <rect id="ArtbDard1" x="0" y="0" width="500" height="500" style="fill:#50748b;" /></svg>
  <hr>
  <h1>Welcome<br>JPInteract</h1>
  <hr>
  <Dail/>
  <hr>
</div>
</template>

<script>
import Dail from "./Dail.vue";
export default {
  name: "HelloWorld",
  components: {
    Dail
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#square {
  position: absolute;
  top: -30%;
  left: 0;
  width: 800px;
  z-index: -1;
}
</style>
