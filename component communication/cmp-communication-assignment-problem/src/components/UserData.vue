<template>
 <section>
    <form @submit.prevent="addUser">
    <label>Name: <input type="text" v-model="enteredName" placeholder="your name"></label>
    <label>Age: <input type="number" v-model="enteredAge" placeholder="your age"></label>
    <button>Add User</button>
    </form>
 </section>
</template>
<script>
export default {
    emits: ['add-user'],
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    methods: {
        addUser() {
            this.$emit(
                'add-user',
                this.enteredName,
                this.enteredAge
            )
        }
    }
}
</script>
