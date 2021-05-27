<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3>OUTPUT COURSE GOAL</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <p v-if="courseData.goalVisibility">{{ courseData.goal }}</p>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
  <button @click="toggleOptionsGoal">Toggle Goal</button>
  <p v-if="isVisible">{{optionsGoal}}</p>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const courseData = ref({
      goal: 'Finish the course',
      goalVisibility: false
    })

    function toggleView() {

      courseData.value.goalVisibility = !courseData.value.goalVisibility

    }

    return { courseData : courseData, toggleGoal: toggleView };
  },
  data() {
    return {
      optionsGoal : "this is options goal",
      isVisible : true
    }
  },
  methods: {
    toggleOptionsGoal(){
      this.isVisible = !this.isVisible
}
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
