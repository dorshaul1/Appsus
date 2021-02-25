export default {
    props: ['info'],
    template: `
    <section class="note-todos flex">
        <ul class="">
            <li class="todo-txt" v-for="(todo, idx) in info.todos" :key='idx'> {{todo.txt}} <hr></li>
        </ul>   
        <i class="cat-icon fas fa-list-ul"></i>
    </section>
    `,
    methods: {
        
    },
    created() {
    }
} 