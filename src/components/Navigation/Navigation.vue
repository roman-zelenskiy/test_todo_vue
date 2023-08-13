<script setup>
import ButtonAddTodo from './ButtonAddTodo.vue';
import ButtonRemoveTodo from './ButtonRemoveTodo.vue';
import SearchTodo from './SearchTodo.vue';

</script>

<template>
    <div class="nav">
        <nav class="buttons_change">
            <button-add-todo></button-add-todo>
            <button-remove-todo></button-remove-todo>
        </nav>
        <search-todo></search-todo>
    </div>
</template>