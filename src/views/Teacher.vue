<template>
  <div>
    <div id="grid-teacher">
      <div id="left">
    <h1>Welcome,<br><span class="blockback">{{name}}</span>.</h1>
    <h2>Your quizzes:</h2>
    <div id="box" v-if="fetched">
        <QuizCard v-for="(quiz, num) in quizzes" v-bind:key="num" v-bind:name="quiz.name" v-bind:id="quiz.quizID" v-bind:attempt="quiz.attempt" @mouseover.native="show(num)" @mouseleave.native="show(-1)"></QuizCard>
        <button class="create">Create</button>
    </div>
  </div>
    <div id="result" v-if="this.number != -1">
        <h1 class="title">{{quizzes[this.number].name}}</h1>
        <QuestionResult v-for="(question, num) in quizzes[this.number].questions" v-bind:question="question" v-bind:key="num" class="results"></QuestionResult>
    </div>
  </div>
  </div>
</template>

<style>
.results{
  margin-bottom: 20px;
  margin-top: 20px;
}

.title{
  margin-top: 0;
}

#result{
  padding: 40px;
}

#grid-teacher{
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-gap: 40px;
  min-width: 1200px;
}
.create {
  background-color: var(--color-pink);
  color: var(--color-navy);
  width: 120px;
  font-size: 1.5rem;
  height: 2rem;
  border-radius: 50px;
  text-align: center;
  display: block;
  margin: 0 auto;
  margin-top:20px;
  margin-bottom:20px;
}

#box{
  display: flex;
  flex-direction: column;
  width: 500px;
}

#result{
  background-color:var(--color-palegreen);
}
</style>

<script>
import QuizCard from "@/components/QuizCard.vue";
import QuestionResult from "@/components/QuestionResult.vue";
export default {
  name: "teacher",
  data: function(){
    return{
      name: this.$route.params.name,
      quizzes:{},
      fetched: false,
      number: -1
    }
  },
  created: function(){
    const axios = require('axios');
    axios.get(this.$store.getters.backendbase + "/quizRetrieve?name=" + this.name).then(
      res => {
        this.quizzes = res.data;
        Object.keys(this.quizzes).forEach((num)=>{
          Object.keys(this.quizzes[num].questions).forEach((key)=>{
          this.quizzes[num].questions[key] = JSON.parse(this.quizzes[num].questions[key])
        })
      });
        this.fetched = true;
      }
    ).catch(err => {
      alert(err)
    })
  },
  components:{
    QuizCard,
    QuestionResult
  },
  methods:{
    show: function(number){
      this.number = number
    }
  }
};
</script>
