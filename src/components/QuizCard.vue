<template>
  <div id="card">
  <h2 class="name">{{name}}</h2>
  Quiz ID: {{id}}  |  Attempt: {{attempt}}
  </div>
</template>

<style>
#card{
  background-color: var(--color-navy);
  color: var(--color-pink);
  padding:20px;
}

.name{
  margin-top: 0;
}
</style>

<script>
export default{
  name:"QuizCard",
  props:{
    name: String,
    attempt: Number,
    id: Number
  }
}
</script>
