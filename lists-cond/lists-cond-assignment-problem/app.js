const app = Vue.createApp({
    data() {
    return {
        taskEntry: '',
        tasks: [],
        visible: true,
        visibleStyle: '',
        command: 'Hide List'
    }
},
methods: {
    addTask: function(){
        this.tasks.push(this.taskEntry);
        this.taskEntry = '';
    },
    changeVisible: function() {
        this.visible = !this.visible;
        if (!this.visible){
            this.visibleStyle = 'none';
            this.command = "Show List";
        } else {
            this.visibleStyle = '';
            this.command = "Hide List";
        }
    }
}
});

app.mount("#assignment");