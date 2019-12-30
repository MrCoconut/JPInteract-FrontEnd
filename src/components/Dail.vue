<template>
<div>
  <div id="inputarea">
    <input id="inputText" v-model.trim="quizID" placeholder="Input Quiz ID">
    <button id="Go" @click="send">Go</button>
  </div>
  <div id="dial">
    <button class="dialbtn" @click="add(1)">1</button>
    <button class="dialbtn" @click="add(2)">2</button>
    <button class="dialbtn" @click="add(3)">3</button>
    <button class="dialbtn" @click="add(4)">4</button>
    <button class="dialbtn" @click="add(5)">5</button>
    <button class="dialbtn" @click="add(6)">6</button>
    <button class="dialbtn" @click="add(7)">7</button>
    <button class="dialbtn" @click="add(8)">8</button>
    <button class="dialbtn" @click="add(9)">9</button>
    <div></div>
    <button class="dialbtn" @click="add(0)">0</button>
  </div>
</div>
</template>

<script>
export default {
  name: "Dail",
  data: function() {
    return {
      quizID: ''
    }
  },
  methods: {
    add(value) {
      this.quizID += value
    },
    send() {
      const axios = require('axios');
      axios.get(this.$store.getters.backendbase + "/quiz?quizID=" + this.quizID).then(
        res => {
          if(res.data.result == 404){
            alert("No Quiz Matched")
          }else if(res.data.result == 200){
            this.$router.push({name: "quiz", params:{
              name: res.data.name,
              quizID: res.data.quizID,
              questions: res.data.questions
            }})
          }else{
            alert("Invalid Input")
          }
        }
      ).catch(err => {
        alert(err)
      })
    }
  }
};
</script>

<style scoped lang="scss">
#inputarea {
    margin-top: 70pt;
    display: grid;
    grid-template-columns: 1fr 120pt;
    padding: 0;
}

#dial {
    margin-top: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 50pt;
    width: 100%;
    padding: 0;
    margin-bottom: 70px;
}

#Go {
    background-color: var(--color-brightorange);
    height: 100pt;
}

.dialbtn {
    font-size: 70pt;
    background-color: var(--color-darkpurple);
    border-radius: 100%;
    width: 150pt;
    height: 150pt;
    text-align: center;
    display: block;
    margin: 0 auto;
}
</style>
