import { eventBus } from '../../../services/event-bus-service.js'
import TodoLi from './todo-li.cmp.js'


export default {
    props: ['note'],
    template: `
    <section class="note-todos flex">
        <ul class="">
            <todo-li v-for="(todo, idx) in note.info.todos" @updateIsDone="updateTodo(idx, $event)"  :todo="todo" :key='idx' />
        </ul>   
    </section>
    `,
    data() {
        return {
        }
    },
    methods: {
        updateTodo(idx, todo) {
            this.note.info.todos[idx] =  todo;
            eventBus.$emit('save', this.note)
        }
    },
    computed: {
    },
    created() {
    },
    components: {
        TodoLi
    }
} 