<template>
  <div class="home">
    <Header message="Welcome JPInteract"></Header>
    <Dail/>
  </div>
</template>


<style>
</style>
<script>
import Dail from "@/components/Dail.vue";
import Header from "@/components/Header.vue"

export default {
  name: "home",
  components: {
    Dail,
    Header
  }
};
</script>
