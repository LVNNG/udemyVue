const app = Vue.createApp({
    data: function(){
        return {
            name: 'taiger',
            age: '100',
            imageLink: 'https://www.google.com/search?q=%s&tbm=isch&sout=1'
        }
    },
    methods: {
        rando() {
            var n = Math.random()
            return n.toFixed(2);
        }
    }
})

app.mount("#assignment");