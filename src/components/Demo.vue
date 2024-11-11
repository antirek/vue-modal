<template>
    <div>
        <h1>Hi</h1>
        <p>ready?</p>
        <input type="text" v-bind="name" />
    </div>
</template>

<script setup>
const props = defineProps({
    name: String,
})
</script>