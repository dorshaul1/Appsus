export default {
    props: ['info'],
    template: `
    <section class="note-todos">
        <ul>
            <li v-for="(todo, idx) in info.todos" :key='idx'> {{todo.txt}} </li>
        </ul>   
    </section>
    `,
    methods: {
        
    },
    created() {
        // console.log('fucking todo', this.info.todos);
    }
}