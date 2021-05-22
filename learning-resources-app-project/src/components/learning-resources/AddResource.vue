<template>
<base-dialog v-if="inputIsValid == false" title="Invalid Input" @close="confirmError">
    <template v-slot:default>
        <p>One or more input is invalid</p>
        <p>Please check all inputs </p>
    </template>
    <template v-slot:actions>
        <base-button @click="ConfirmError">Okay</base-button>
    </template>
</base-dialog>
    <base-card>
        <form @submit.prevent="addData">
            <div class="form-control">
                <label>Title
                    <input id="title" name="title" type="text" v-model="enteredTitle">
                </label>
            </div>
            <div class="form-control">
                <label>Description
                    <textarea id="description" name="description" rows='3' v-model="enteredDescription"></textarea>
                </label>
            </div>
            <div class="form-control">
                <label>Link
                    <input id="link" name="link" type='url' v-model="enteredLink" />
                </label>
            </div>
            <base-button type="submit">Add Resource</base-button> 
            <!-- fallthrough for type in button  -->
        </form>
    </base-card>
</template>
<script>
import BaseButton from '../UI/BaseButton.vue'
export default {
    components: {
        BaseButton
    },
    data() {
        return {
 
            enteredTitle: '',
            enteredDescription: '',
            enteredLink: '',
            inputIsValid : true
        }
    },
    methods: {
        addData() {

            if (this.enteredTitle.trim() === '' 
            ||  this.enteredDescription.trim() === ''
            || this.enteredLink.trim() === ''){
                this.inputIsValid = false
                console.log(this.enteredTitle)
                return;
            }

            this.addResource(this.enteredTitle, this.enteredDescription, this.enteredLink);
        },
        confirmError() {
            this.inputIsValid = true;
        }
    },
    inject: ['addResource']
}
</script>


<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>