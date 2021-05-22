<template>
    <ul v-for="user in users" :key="user.id">
        <active-user
        :username='user.username'
        :age="user.age"
        ></active-user>
  </ul>    
  <user-data @add-user="addUser"></user-data>
</template>
<script>
export default {
methods: {
    addUser(name, age) {
        const newUser = {
            id: name,
            username: name,
            age: age,
        }
        this.users.push(newUser)
    }
},
data() {
    return {
        users:
            [{
            id: 'manuel',
            username: 'manuel lorenz',
            age: '23',
            }]

    }
}
}
</script>
