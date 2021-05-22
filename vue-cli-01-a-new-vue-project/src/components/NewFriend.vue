<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name: </label>
            <input type="text" name="name" v-model="enteredName" /><br>
        </div>
        <div>
            <label>Number: </label>
            <input type="number" name="phoneNumber" v-model="enteredPhone"/><br>
        </div>
        <div>
            <label>Email: </label>
            <input type="text" name="email" v-model="enteredEmail"/><br>
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
</template>
<script>
export default  {
    emits: ['add-contact'],
    data() {
        return {
            enteredName : '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods: {
        submitData() {
            this.$emit(
                'add-contact',
                this.enteredName,
                this.enteredPhone,
                this.enteredEmail
            )
        }
    }
}
</script>
