import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todo: [],
        activeId: null
    }),
    getters: {
        activeTodo: (state) => (id) => {
            let activeTodo = {};

            state.todo.forEach(element => {
                if (element.id === id) {
                    activeTodo = element;
                }
            });

            return activeTodo;
        },
    },
    actions: {
        filterTodo(filterParam) {
            const regex = new RegExp(filterParam, 'i');

            this.todo.forEach(el => {
                if (!regex.test(el.title) && !regex.test(el.description)) {
                    el.visible = false;
                    return false;
                }
                el.visible = true;
            })
        },
        resetfilter() {
            this.todo.forEach(el => {
                el.visible = true;
            })
        },
        setTodo(todos) {
            this.todo = todos;
        },
        setLocalStorage() {
            localStorage.setItem('todos', JSON.stringify(this.todo));
        },
        setActiveId(id) {
            this.activeId = id;
        },
        addTodo() {
            const newTodo = {
                id: this.todo.length + 1,
                title: 'New Todo',
                description: 'description todo',
                created: new Date,
                visible: true
            }

            this.todo = [...this.todo, newTodo];
        },
        removeTodo() {
            this.todo = this.todo.filter(el => el.id !== this.activeId);
        }
    }
})