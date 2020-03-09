<template>
  <div>
    <div id="inputarea">
      <input id="inputText" v-model.trim="quizID" placeholder="Input Quiz ID" />
      <button id="Go" @click="send">
        <svg
          id="arrow"
          width="75%"
          height="75%"
          viewBox="0 0 200 200"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          xmlns:serif="http://www.serif.com/"
          style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
        >
          <path
            d="M100,0c55.192,0 100,44.808 100,100c0,55.192 -44.808,100 -100,100c-55.192,0 -100,-44.808 -100,-100c0,-55.192 44.808,-100 100,-100Zm66.633,93.67l6.33,6.33l-52.574,52.574l-6.33,-6.33l41.768,-41.768l-128.79,0l0,-8.952l128.79,0l-41.768,-41.768l6.33,-6.33l46.244,46.244Z"
            style="fill:#1e1a34;"
          />
        </svg>
      </button>
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
      quizID: ""
    };
  },
  methods: {
    add(value) {
      this.quizID += value;
    },
    send() {
      this.$router.push({
        name: "quiz",
        params: {
          quizID: this.quizID
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
#inputarea {
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 0;
  max-width: 400px;
}

#dial {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 1.25rem;
  visibility: hidden;
  max-width: 300px;
  margin-left: 0;
  margin-top: 5vh;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 5vh;
  padding-bottom: 5vh;
  background-color: var(--color-pink);
}
@media (max-width: 767px) {
  #dial {
    visibility: visible;
  }
  #inputarea {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
#inputText {
  font-size: 1.5rem;
  text-align: left;
}

#inputText::placeholder {
  font-size: 1.5rem;
  text-align: left;
  text-decoration: none;
  border: none;
}

#Go {
  color: var(--color-navy);
  height: auto;
  width: 5rem;
}

.dialbtn {
  font-size: 2rem;
  background-color: var(--color-yellow);
  color: var(--color-navy);
  border-radius: 100%;
  width: 3.5rem;
  height: 3.5rem;
  text-align: center;
  display: block;
  margin: 0 auto;
}
</style>
