const app = Vue.createApp({
    data() {
        return {
            output: '',
            confirmedOutput: ''
        }
    },
    methods: {
        showAlert: function() {
            alert('alert is pressed');
        },
        setOutput: function(event){
            this.output = event.target.value;
        },
        confirmOutput: function(){
            this.confirmedOutput = this.output;
        }
    }
});

app.mount('#assignment');