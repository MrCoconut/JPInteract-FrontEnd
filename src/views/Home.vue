<template>
  <div id="grid">
    <div class="home">
      <h1>Welcome <br /><span class="blockback">JPInteract</span></h1>
      <Dail />
    </div>
    <div id="teacherlogin">
      <h1>Teacher Login</h1>
      <div>
        <input
          class="logintext"
          v-model.trim="username"
          placeholder="Username"
        />
        <div id="inputarea">
          <input
            class="logintext"
            v-model.trim="password"
            placeholder="Password"
          />
          <button @click="login">
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
                style="fill:#FF7E8A;"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#inputarea {
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 5rem;
  padding: 0;
  max-width: 400px;
}

.logintext {
  font-size: 1.5rem;
  text-align: left;
  color: var(--color-pink);
  border-color: var(--color-pink);
  max-width: 400px;
}

.logintext::placeholder {
  font-size: 1.5rem;
  color: var(--color-pink);
}

#arrow {
  display: absolute;
  left: 40px;
  bottom: 40px;
}

.home {
  padding-top: 30px;
  padding-left: 40px;
  max-width: 510px;
  height: calc(100vh - 200px);
}

#grid {
  display: grid;
  grid-template-rows: 1fr 400px;
}

#teacherlogin {
  padding-top: 20px;
  background-color: var(--color-navy);
  padding-left: 40px;
  color: var(--color-pink);
  max-width: 510px;
  max-height: 350px;
  margin-bottom: 20px;
}

@media (max-width: 767px) {
  #grid {
    grid-template-rows: 1fr;
  }
  #teacherlogin {
    visibility: hidden;
  }
  .home {
    padding-left: 0px;
    padding-top: 0px;
    max-width: none;
    max-height: none;
  }
}
</style>
<script>
import Dail from "@/components/Dail.vue";

export default {
  name: "home",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      const axios = require("axios");
      axios
        .post(this.$store.getters.backendbase + "/login", {
          name: this.username,
          password: this.password
        })
        .then(res => {
          if (res.data.result == 404) {
            alert("Incorrect user name or password.");
          } else if (res.data.result == 200) {
            this.$router.push({
              name: "teacher",
              params: {
                name: this.username
              }
            });
          } else {
            alert("Invalid Input");
          }
        })
        .catch(err => {
          alert(err);
        });
    }
  },
  components: {
    Dail
  }
};
</script>
