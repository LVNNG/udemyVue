const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ],
            isVisible : false
        }
    },
    methods: {
        toggleDetails: function () {
            this.isVisible = !this.isVisible;
        }
    }
});

app.component('friend-contact',{
    template: `
    <li v-for="friend in friends" :key="friend.id">
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">{{ isVisible? 'Hide' : 'Show' }} Details</button>
        <ul v-if="isVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            isVisible : false,
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                }
                // {
                //     id: 'julie',
                //     name: 'Julie Jones',
                //     phone: '09876 543 221',
                //     email: 'julie@localhost.com'
                // }
            ]
        }
    },
    methods: {
        toggleDetails: function () {
            this.isVisible = !this.isVisible;
        }
    }
}) //it is like a custom html element
app.mount('#app');
