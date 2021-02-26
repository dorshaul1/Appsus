export default {
    props: ['note'],
    template: `
    <section class="note-img flex align-items center">
        <img :src="note.info.url"> 
        <i class=" cat-icon fas fa-image"></i>
    </section>
    `,
    methods: {
        
    },
    created() {
        
    }
}