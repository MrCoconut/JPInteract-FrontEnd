<template>
  <div class="about">
    <h1>{{quizName}}</h1>
    <Question v-for="(question, num) in questions" v-bind:key="num" v-bind:question="question" v-bind:result="result"></Question>
    <button class="submit" @click="send">Submit</button>
  </div>
</template>

<style>
.submit {
  background-color: var(--color-brightorange);
  width: 100%;
  font-size: 1.5rem;
  height: 2rem;
  text-align: center;
  margin-top:20px;
}
</style>

<script>
import Question from "@/components/Question.vue"

export default {
  name: "quiz",
  data: function(){
    return{
      quizName: this.$route.params.name,
      quizID: this.$route.params.quizID,
      questions: this.$route.params.questions,
      result: {}
    }
  },
  methods: {
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
    //Parse String into Json Object
    Object.keys(this.$route.params.questions).forEach((key)=>{
      this.$route.params.questions[key] = JSON.parse(this.$route.params.questions[key])
      this.result[key] = ''
    })
  }
};
</script>
