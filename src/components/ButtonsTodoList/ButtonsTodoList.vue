<script setup>
import ButtonOpenTodo from './ButtonOpenTodo.vue';
import { useTodoStore } from '../../stores/TodoStore';
import { computed } from 'vue';

const todoStore = useTodoStore();

const todo = computed(() => todoStore.todo);


</script>

<template>
    <div class="notes_btn_list">
        <button-open-todo v-for="el in todo" :todo="el" :key="todo.id"/>
    </div>
</template>