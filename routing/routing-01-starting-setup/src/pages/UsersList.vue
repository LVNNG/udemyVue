<template>
  <button @click="confirmInput">Confirm</button>
    <button @click="SaveChanges">Save changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  data(){
    return {
      changesSaved: false
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/teams')
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UsersList Cmp beforeRouteEnter')
    console.log(to, from)
    next()
  },
  beforeRouteLeave(to, from, next){
    console.log('UsersList Cmp beforeRouteLeave')
    console.log(to, from)
    if (this.changesSaved){
      next();
    } else {
      const userWantsToLeave = confirm('you sure?')
      next(userWantsToLeave)
    }
  }, 
  saveChanges() {
    this.changesSaved = true
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>