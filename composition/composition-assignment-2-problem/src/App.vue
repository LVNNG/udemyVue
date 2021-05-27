<template>
  <header>
    <h1>Expense Tracker</h1>
  </header>
  <section>
    <div>Available Funds: {{ availFunds }}</div>
    <div>Total Expenses: {{ currentExp }}</div>
    <hr />
    <div>Funds left: {{ remainFunds }}</div>
  </section>
  <section>
    <form @submit.prevent="addExp">
      <div>
        <label for="amount">Amount</label>
        <input id="amount" type="number" v-model="enteredExp" />
      </div>
      <button>Add Expense</button>
    </form>
  </section>
</template>

<script>
import {ref, computed, watch} from 'vue'
export default {
  setup() {
    let availableFunds = ref(100)
    let currentExpenses = ref(0)
    let enteredExpenses = ref(0)

    const remainFunds = computed(function(){
      return availableFunds.value - currentExpenses.value
    })
    function addExpense(){
      currentExpenses.value += Number(enteredExpenses.value)
    }

    watch((remainFunds), function(){
      if (remainFunds.value < 0){
        alert('You are broko!')
      }
    })


    return {
      availFunds: availableFunds,
      currentExp: currentExpenses,
      enteredExp: enteredExpenses,
      remainFunds, addExp: addExpense
    }
  },
  data() {
    return {
      availableFunds: 100,
      currentExpenses: 0,
      enteredExpense: 0,
    };
  },
  computed: {
    remainingFunds() {
      return this.availableFunds - this.currentExpenses;
    },
  },
  methods: {
    addExpense() {
      this.currentExpenses += this.enteredExpense;
    },
  },
  watch: {
    remainingFunds(val) {
      if (val < 0) {
        alert('You are broke!');
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #30006e;
  color: white;
}
section {
  margin: 2rem auto;
  max-width: 35rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

form div {
  margin: 1rem 0;
}
input {
  width: 100%;
  padding: 0.15rem;
}
label {
  font-weight: bold;
  margin: 0.5rem 0;
}
button {
  background-color: #30006e;
  border: 1px solid #30006e;
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  color: white;
}
button:hover,
button:active {
  background-color: #5819ac;
  border-color: #5819ac;
}
</style>