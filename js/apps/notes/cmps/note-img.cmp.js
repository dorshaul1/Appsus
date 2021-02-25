export default {
    props: ['info'],
    template: `
    <section class="note-img">
        <img :src="info.url"> 
        <i class=" cat-icon fas fa-image"></i>
    </section>
    `,
    methods: {
        
    },
    created() {
        
    }
}