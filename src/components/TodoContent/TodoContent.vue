<script setup>
import ButtonCloseOffcanvas from './ButtonCloseOffcanvas.vue';
import { useTodoStore } from '../../stores/TodoStore';
import { ref, computed } from 'vue';

const todoStore = useTodoStore();

const activeIdTodo = computed(() => todoStore.activeId)
const todo = computed(() => todoStore.activeTodo(activeIdTodo.value));

</script>

<template>
    <div class="notes_description">
        <div class="wrap_desc">
            <button-close-offcanvas/>
            <div class="notes_content">
                <p class="date_creating">{{ todo.created }}</p>
                <textarea v-model="todo.title" class="title_notes">{{ todo.title }}</textarea>
                <textarea v-model="todo.description" class="notes_desc">{{ todo.description }}</textarea>
            </div>
        </div>
    </div>
</template>