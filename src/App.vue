<script setup>
import {defineAsyncComponent, ref} from 'vue'
import {useModal} from './components/Modal/useModal'
import CancelButton from './components/CancelButton.vue'
import Demo from './components/Demo.vue';

const selectedFolder = (folderName) => {
    console.log(folderName, 'folderName')
}

const confirmedData = (data) => {
    console.log(data)
}

const name = ref('test test test');

const openModal = () => {
    //в компонент slots.default должен быть встроен emit close
    useModal({
        component: defineAsyncComponent(() =>
            import('./components/Modal/ModalRed.vue')
        ),
        slots: {default: Demo},
        props: {name},
        emits: {
            onSelectedFolder: selectedFolder,
            onConfirm: confirmedData,
        },
    })
}
</script>

<template>
    <button type="button" class="btn" @click="openModal">Open Modal!</button>
</template>

<style scoped></style>
