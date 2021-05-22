<template>
    <ul>
        <li v-for="goal in goals" :key='goal.id'>
            <slot :item="goal"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['Finish Course', 'Learn Vue']
        }
    }
}
</script>
