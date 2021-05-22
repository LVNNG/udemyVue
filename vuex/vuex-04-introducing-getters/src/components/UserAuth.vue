<template>
  <button @click="login" v-if="!userIsAuthenticated">Login</button>
  <button @click="logout" v-if="userIsAuthenticated">Logout</button>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    // isAuth() {
    //   return this.$store.getters.userIsAuthenticated;
    // }
    ...mapGetters(['userIsAuthenticated'])
  }
}
</script>