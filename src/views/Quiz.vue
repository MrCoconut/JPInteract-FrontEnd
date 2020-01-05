<template>
  <div class="quiz">
    <h1 class="title">{{quizName}}</h1>
    <Question v-for="(question, num) in questions" v-bind:key="num" v-bind:question="question" v-bind:result="result"></Question>
    <button class="submit" @click="send">Submit</button>
  </div>
</template>

<style>
.title{
  text-align: center;
}
.submit {
  background-color: var(--color-yellow);
  color: var(--color-navy);
  width: 120px;
  font-size: 1.5rem;
  height: 2rem;
  border-radius: 50px;
  text-align: center;
  display: block;
  margin: 0 auto;
  margin-top:40px;
  margin-bottom:20px;
}

.quiz{
    max-width:700px;
    padding-top:30px;
    padding-bottom:30px;
    padding-left: 50px;
    padding-right: 50px;
    margin: 0 auto;
    background-color: var(--color-palegreen);
}

@media (max-width: 767px){
  .quiz{
    padding:10px;
  }
}
</style>

<script>
import Question from "@/components/Question.vue"

export default {
  name: "quiz",
  data: function(){
    return{
      quizName: '',
      quizID: this.$route.params.quizID,
      questions: {},
      result: {}
    }
  },
  methods: {
    fetch(){
      const axios = require('axios');
      axios.get(this.$store.getters.backendbase + "/quiz?quizID=" + this.quizID).then(
        res => {
          if(res.data.result == 404){
            alert("No Quiz Matched")
            this.$router.push({name: "home"})
          }else if(res.data.result == 200){
            this.quizName= res.data.name,
            Object.keys(res.data.questions).forEach((key)=>{
              this.questions[key] = JSON.parse(res.data.questions[key])
              this.result[key] = ''
            })
          }else{
            alert("Invalid Input")
            this.$router.push({name: "home"})
          }
        }
      ).catch(err => {
        alert(err)
      })
    },
    send(){
      const axios = require('axios');
      axios.post(this.$store.getters.backendbase + "/quizSubmit?quizID=" + this.quizID, this.result).then(
        res => {
          if(res.data.result == 200){
            this.$router.push({name: "success"})
          }else{
            alert("Server Error")
          }
        }
      ).catch(err => {
        alert(err)
      })
    }
  },
  components:{
    Question
  },
  created: function(){
    this.fetch()
    //Parse String into Json Object
  }
};
</script>
