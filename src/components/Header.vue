<template>
  <div>
  <hr>
  <h1>{{message}}</h1>
  <hr>
</div>
</template>

<script>
export default {
  name: "Header",
  props:{
    message:String
  }
};
</script>
