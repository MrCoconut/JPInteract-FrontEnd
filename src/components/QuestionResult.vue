<template>
  <div>
    <h2>{{ this.$vnode.key }}. {{ question.title }}</h2>
    <div v-if="question.type == 'MUL'">
      <div
        class="answer"
        v-for="(detail, label) in question.options"
        v-bind:key="label"
      >
        {{ label }}: {{ question.options[label] }}
        <span class="blockback">{{ question.optionCounts[label] }}</span>
      </div>
    </div>
    <div v-if="question.type == 'SHT'" class="sht">
      <div
        class="answer"
        v-for="answer in question.answers"
        v-bind:key="answer.id"
      >
        {{ answer }}
      </div>
    </div>
  </div>
</template>

<style>
.answer {
  margin-left: 20px;
}

.sht {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

<script>
export default {
  name: "QuestionResult",
  props: {
    question: Object
  }
};
</script>
