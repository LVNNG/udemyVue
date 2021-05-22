<template>
    <li>
        <h2>{{ name}} {{ friendIsFavourite ? '(Favourite)' : '' }}</h2>
        <button @click="toggleFavourite">Toggle Favourite</button>
        <button @click="toggleDetails"> {{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
            <li>
                <strong>Phone:</strong>
                {{phoneNumber}}
            </li>
            <li>
                <strong>Email: </strong>
                {{emailAddress}}
            </li>
        </ul>
        <button @click="$emit('delete', id)">Delete</button>
    </li>
</template>

<script>
export default  {
    // props: ['name', 'phoneNumber', 'emailAddress', 'isFavourite'], //camel casing, but in template/html using kebab case
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavourite: {
            type: Boolean,
            required: false,
            default: true,
            validation: function(value){
                return value === true || value === false;
            }
        },
    },
    emits: ['delete'],
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                'id': 'manuel',
                'name': 'manuel lorenz',
                'phone': '0123 45678 90',
                'email': 'manuel@localhost.com'
            },
            friendIsFavourite : this.isFavourite
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavourite() {
            // this.$emit('toggle-favourite', this.id);
            this.friendIsFavourite = !this.friendIsFavourite;
        }
    }

}

</script>