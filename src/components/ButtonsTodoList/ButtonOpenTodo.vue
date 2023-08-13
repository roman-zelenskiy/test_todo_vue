<script setup>
import { useTodoStore } from '../../stores/TodoStore';
import { computed } from 'vue';

const props = defineProps({
    todo: Object,
    required: true
})

const todoStore = useTodoStore();
const activeTodoId = computed(() => todoStore.activeId);
const setActiveId = (id) => {
    return todoStore.setActiveId(id);
}
const checkActiveTodo = computed(() => props.todo.id === activeTodoId.value);

</script>

<template>
<button class="note_item" :class="{active: checkActiveTodo}" @click="setActiveId(todo.id)">
    {{ todo.title }}
</button>
</template>