<template>
  <div>
    <div id="backdrop" v-if="create"></div>
    <div id="newQuiz" v-if="create">
      <input
        id="questionTitle"
        type="text"
        v-model="newquiz"
        placeholder="Input title."
      />
      <button class="createQuestion" id="exit" @click="exit()">Exit</button>
      <div id="questionBox">
        <div
          v-for="(question, num) in questions"
          v-bind:key="num"
          class="questionTeacher"
        >
          <span class="blockback">{{ num }}.</span
          ><input
            class="inputTeacher"
            type="text"
            v-model="question.title"
            placeholder="Please input the title of your question."
          />
          <div v-if="question.type == 'MUL'" class="options">
            A.
            <input
              class="inputTeacher"
              type="text"
              v-model="question.options.A"
              placeholder="Input option A"
            /><br />
            B.
            <input
              class="inputTeacher"
              type="text"
              v-model="question.options.B"
              placeholder="Input option B."
            /><br />
            C.
            <input
              class="inputTeacher"
              type="text"
              v-model="question.options.C"
              placeholder="Input option C."
            /><br />
            D.
            <input
              class="inputTeacher"
              type="text"
              v-model="question.options.D"
              placeholder="Input option D."
            /><br />
          </div>
        </div>
        <div id="buttonBox">
          <button class="createQuestion" @click="addMUL()">
            + Multi-Choice
          </button>
          <button class="createQuestion" @click="addSHT()">
            + Short Answer
          </button>
        </div>
        <button class="createQuestion" @click="send()">Save!</button>
      </div>
    </div>
    <div id="grid-teacher">
      <div id="left">
        <h1>
          Welcome,<br /><span class="blockback">{{ name }}</span
          >.
        </h1>
        <h2>Your quizzes:</h2>
        <div id="box" v-if="fetched">
          <QuizCard
            v-for="(quiz, num) in quizzes"
            v-bind:key="num"
            v-bind:name="quiz.name"
            v-bind:id="quiz.quizID"
            v-bind:attempt="quiz.attempt"
            @mouseover.native="show(num)"
            @mouseleave.native="show(-1)"
          ></QuizCard>
          <button class="create" @click="createQuiz()">Create</button>
        </div>
      </div>
      <div id="result" v-if="this.number != -1">
        <h1 class="title">{{ quizzes[this.number].name }}</h1>
        <QuestionResult
          v-for="(question, num) in quizzes[this.number].questions"
          v-bind:question="question"
          v-bind:key="num"
          class="results"
        ></QuestionResult>
      </div>
    </div>
  </div>
</template>

<style>
#exit {
  position: absolute;
  top: 20px;
  right: 20px;
}
.options {
  margin-top: 10px;
  margin-left: 15px;
}
#buttonBox {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
}
#questionTitle {
  font-family: "Inria Serif", serif;
  font-size: 3rem;
  line-height: 3rem;
  margin-top: 20px;
  font-weight: 900;
  margin: 0 auto;
  margin-bottom: 40px;
  display: block;
  width: 60%;
  height: 60px;
  text-align: center;
}
#questionTitle::placeholder {
  font-size: 3rem;
  text-decoration: none;
  text-align: center;
}

.questionTeacher {
  margin-bottom: 20px;
}

.createQuestion {
  background-color: var(--color-pink);
  color: var(--color-navy);
  width: auto;
  font-size: 1.5rem;
  padding-left: 15px;
  padding-right: 15px;
  height: 2rem;
  border-radius: 50px;
  text-align: center;
  display: block;
  margin: 0 auto;
}

.inputTeacher {
  font-family: "Inria Serif", serif;
  font-size: 1.0625rem;
  width: 450px;
  height: 2rem;
  display: inline;
  margin-left: 10px;
}

#questionBox {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
}

#backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: var(--color-pink);
  opacity: 0.8;
}
#newQuiz {
  width: 80vw;
  height: 80vh;
  background-color: var(--color-palegreen);
  z-index: 1;
  position: absolute;
  left: 10vw;
  top: 40px;
  padding: 40px;
  overflow-y: auto;
  overflow-x: hidden;
}

.results {
  margin-bottom: 20px;
  margin-top: 20px;
}

.title {
  margin-top: 0;
}

#result {
  padding: 40px;
}

#grid-teacher {
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
  margin-top: 20px;
  margin-bottom: 20px;
}

#box {
  display: flex;
  flex-direction: column;
  width: 500px;
}

#result {
  background-color: var(--color-palegreen);
}
</style>

<script>
import QuizCard from "@/components/QuizCard.vue";
import QuestionResult from "@/components/QuestionResult.vue";

export default {
  name: "teacher",
  data: function() {
    return {
      name: this.$route.params.name,
      quizzes: {},
      fetched: false,
      number: -1,
      create: false,
      newquiz: "",
      questions: {},
      quizCount: 1
    };
  },
  created: function() {
    this.fetch();
  },
  components: {
    QuizCard,
    QuestionResult
  },
  methods: {
    fetch() {
      const axios = require("axios");
      axios
        .get(
          this.$store.getters.backendbase + "/quizRetrieve?name=" + this.name
        )
        .then(res => {
          this.quizzes = res.data;
          Object.keys(this.quizzes).forEach(num => {
            Object.keys(this.quizzes[num].questions).forEach(key => {
              this.quizzes[num].questions[key] = JSON.parse(
                this.quizzes[num].questions[key]
              );
            });
          });
          this.fetched = true;
        })
        .catch(err => {
          alert(err);
        });
    },
    show: function(number) {
      this.number = number;
    },
    createQuiz: function() {
      this.create = true;
      this.newquiz = "";
    },
    addMUL: function() {
      this.$set(this.questions, this.quizCount, {
        title: "",
        type: "MUL",
        options: {
          A: "",
          B: "",
          C: "",
          D: ""
        }
      });
      this.quizCount += 1;
    },
    addSHT: function() {
      this.$set(this.questions, this.quizCount, {
        title: "",
        type: "SHT"
      });
      this.quizCount += 1;
    },
    exit() {
      this.create = false;
      this.quizCount = 1;
      this.newquiz = "";
      this.questions = {};
    },
    send: function() {
      const axios = require("axios");
      axios
        .put(this.$store.getters.backendbase + "/quiz", {
          name: this.newquiz,
          questions: this.questions,
          teacher: this.name
        })
        .then(res => {
          if (res.data.result == 200) {
            alert("Success");
          } else {
            alert("Error");
          }
          this.exit();
          this.fetch();
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>
