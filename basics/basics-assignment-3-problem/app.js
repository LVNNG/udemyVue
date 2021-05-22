const app = Vue.createApp({
    data: function(){
        return {
            result: 0,
            message: ''
        }
    },
    methods: {
        add: function(num){
            this.result = this.result + Number(num);
            console.log('ok');
        }
    },
    watch: {
        result(value){
            if (value > 37){
                this.message = 'too much!';
            }
            else {
                this.message = 'not yet';
            }
            const that = this;
            setTimeout(function() {
                that.result = 0;
            }, 2000);
        }
    }
});

app.mount('#assignment');