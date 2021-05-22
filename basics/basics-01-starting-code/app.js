const app = Vue.createApp({
    data: function (){
        return {
            courseGoalA: 'Course Goal A!' ,
            courseGoalB: '<h2>Course Goal B</h2>',
            vueLink: 'https://www.google.com'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');

