<template>
  <div>
    <h1>Welcome,<span class="blockback">{{name}}</span>.</h1>
  </div>
</template>

<script>
export default {
  name: "teacher",
  data: function(){
    return{
      name: this.$route.params.name,
    }
  },
  created: function(){
    alert("create");
  }
};
</script>
