import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todo: [
            {
                id: 1,
                title: 'todo',
                description: 'qqflkmfweffmkmewmgeopgewgpoewkgegergporkgkgrgopgrepokgrpokegrkegkoprgproke',
                created: new Date()
            },
            {
                id: 2,
                title: 'todo2',
                description: 'qqflkmfqwfqw;fdsvsdvdsgsddsflqwfweffmkmewmgeopgewgpoewkgegergporkgkgrgopgrepokgrpokegrkegkoprgproke',
                created: new Date()
            }
        ],
        activeId: 1
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
        }
    },
    actions: {
        setTodo() {
            const todoLocalStorage = JSON.parse(localStorage.getItem('todos'));
            
            this.todo = todoLocalStorage;
        }, 
        setActiveId(id) {
            this.activeId = id;
        }
    }
})