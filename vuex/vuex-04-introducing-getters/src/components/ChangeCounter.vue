<template>
  <button @click="increment">Add 2</button>
  <button @click="increase(10)">Add 2</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    // addOne() {
    //   this.$store.commit('increment');
    // }
    ...mapActions(['increase', 'increment'])
  }
}
</script>