export default {
    props: ['info'],
    template: `
    <section class="note-todos">
        <ul>
            <li v-for="todo in info.todos" :key='info.todo'> {{todo.txt}} </li>
        </ul>   
    </section>
    `,
    methods: {
        
    },
    created() {

    }
}