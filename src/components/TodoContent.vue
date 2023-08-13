<script setup>
import { useTodoStore } from '../stores/TodoStore';
import { ref, computed } from 'vue';

const todoStore = useTodoStore();

const activeIdTodo = computed(() => todoStore.activeId)
const todo = computed(() => todoStore.activeTodo(activeIdTodo.value));


</script>

<template>
    <div class="notes_content">
        <p class="date_creating">{{ todo.created }}</p>
        <h5 class="title_notes">{{ todo.title }}</h5>
        <p class="notes_desc">
            {{ todo.description }}
        </p>
    </div>
</template>