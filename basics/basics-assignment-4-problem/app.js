const app = Vue.createApp({
    data() {
        return {
            firstInput: '',
            toggle: true,
            visibility: 'visible',
            secondInput: ''
        }
    },
    methods: {
        doThis: function(){
            this.toggle = !this.toggle;
            if (! this.toggle){
                this.visibility = 'hidden'
            } else {
                this.visibility = 'visible'
            }
        },
        changeColor: function(){
            
        }
    }

});

app.mount('#assignment');