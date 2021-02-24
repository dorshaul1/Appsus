export default {
    props: ['info'],
    template: `
    <section class="note-todos">
        <ul>
            <li v-for="(todo, idx) in info.todos" :key='idx'> {{todo.txt}} <hr></li>
        </ul>   
    </section>
    `,
    methods: {
        
    },
    created() {
    }
} 