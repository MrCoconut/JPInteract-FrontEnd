<template>
<div>
  <h2><span class="number">{{number}}.</span>{{question.title}}</h2>
  <div v-if="question.type == 'MUL'">
    <label v-for="(detail, label) in question.options" v-bind:key="label">{{label}}. {{detail}}
      <input type="radio" :value="label" v-model="result[number]" :name="number">
      <span class="checkmark"></span>
    </label>
  </div>
  <div v-if="question.type == 'SHT'">
      <input type="text" v-model="result[number]" placeholder="Please input your answer.">
  </div>
</div>
</template>

<style>
h2{
  margin-top: 30px;
  margin-bottom: 10px;
}

.question {
  display: block;
  margin-top: 70px;
  margin-bottom: 70px;
}

.number {
  background-color: var(--color-darkturquoise);
  padding-left: 10px;
  padding-right: 3px;
  margin-right: 10px;
}

/* The container */
label {
  display: block;
  position: relative;
  padding-left: 40px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 1.0625rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input[type="text"] {
  font-size: 1.0625rem;
  display: block;
  transition: 1s ease-out;
  animation-name: strech;
  animation-duration: 1s;
  height: 2rem;
}

input::placeholder{
  font-size: 1.0625rem;
}

@keyframes strech {
  0% {
    width: 0;
    color: rgba(0, 0, 0, 0);
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
  }

  80%{
    color: rgba(0, 0, 0, 0);
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
  }

  100% {
    width: 100%;
    color: grey;
    -webkit-text-fill-color: grey;
  }
}

input[type="radio"] {
  opacity: 0;
  margin: 0;
  width: 0;
  height: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 2px;
  left: 10px;
  height: 1rem;
  width: 1rem;
  background-color: #eee;
  border-radius: 50%;
  transition: background-color 0.8s ease-in-out 0s;
}

/* On mouse-over, add a grey background color */
label:hover input~.checkmark {
  background-color: var(--color-brightorange);
}

/* When the radio button is checked, add a blue background */
label input:checked~.checkmark {
  background-color: var(--color-brightorange);
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
label input:checked~.checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
label .checkmark:after {
  top: 4px;
  left: 4px;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: white;
}

</style>

<script>
export default {
  name: "Question",
  data: function(){
    {
      return{
        number: this.$vnode.key,
      }
    }
  },
  props: {
    question: Object,
    result: Object
  }
};
</script>
