<template>
    <base-card>
        <base-button @click="setSelectedComponent('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedComponent('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <component :is="selectedTab"></component>
    <!-- <add-resource @add-data="addResource"></add-resource> -->
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {id: 'offical-guide', title: 'Official Guide', description: 'the official vue.js documentation', link: 'https://vuejs.org'},
                {id: 'google', title: 'google', description: 'learn to google...', link: 'https://google.org'},

            ]
        }
    },
    methods: {
        setSelectedComponent(cmp){
            this.selectedTab = cmp;
            console.log(cmp);
        },
        addResource(title, description, link){
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: link
            }
            this.storedResources.push(newResource)
            this.selectedTab = 'stored-resources'
        },
        removeResource(id){
            const resIndex = this.storedResources.findIndex(res => res.id == id)
            this.storedResources.splice(resIndex, 1);
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab  === 'stored-resources' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat'
        }
    }
}
</script>
