const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add: function(num) {
      this.counter += num;
      return this.counter;
    },
    subtract: function(num) {
      this.counter -= num;
      return this.counter;
    },
    setName: function(event) {
      this.name = event.target.value;
    },
    submitForm: function() {
      alert("submitted!");
    },
    confirmInput: function(){
      this.confirmedName = this.name;
    },
    resetInput: function(){
      this.name = '';
    }
  }
});

app.mount('#events');
