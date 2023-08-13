<script setup>
import { inject } from 'vue';
import { useTodoStore } from '../../stores/TodoStore';

const todoStore = useTodoStore();
const closeOffcanvas = inject('closeOffcanvas');

const setActiveId = () => {
    return todoStore.setActiveId(null);
}

const sendDataToParent = () => {
    closeOffcanvas(false);
    setActiveId();
};

</script>

<template>
    <button class="close_content_btn" @click="sendDataToParent">
        <span></span>
    </button>
</template>