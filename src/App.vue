<script setup>
import ButtonsTodoList from './components/ButtonsTodoList/ButtonsTodoList.vue';
import TodoContent from './components/TodoContent/TodoContent.vue';
import Navigation from './components/Navigation/Navigation.vue';
import { useTodoStore } from './stores/TodoStore';
import { ref, provide, computed, watch } from 'vue';

const todoStore = useTodoStore();
const switchOffcanvas = ref(false);


const closeOffcanvas = (data) => {
  setOffcanvas(data)
};
const todos = computed(() => todoStore.todo);
const setOffcanvas = (value) => {
  switchOffcanvas.value = value;
}
const resetFilter = () => todoStore.resetfilter(); 
const setTodoLocalStorage = () => todoStore.setLocalStorage();
const setTodo = (todos) => todoStore.setTodo(todos);

const getTodo = () => {
  const todoLocalStorage = JSON.parse(localStorage.getItem('todos'));

  if (!todoLocalStorage) {
    localStorage.setItem('todos', JSON.stringify([]));
    return false;
  }

  setTodo(todoLocalStorage);
}

watch(
  todos,
  () => {
    setTodoLocalStorage()
  },
  { deep: true }
)

getTodo();
resetFilter();
provide('closeOffcanvas', closeOffcanvas);
</script>

<template>
  <div class="notes_app">
    <header class="header">
        <navigation/>
    </header>
    <div class="content_app">
      <aside class="aside_notes">
        <buttons-todo-list @click="setOffcanvas(true)" />
      </aside>
      <todo-content :class="{ active: switchOffcanvas }" />
    </div>
  </div>
</template>

<style scoped></style>
