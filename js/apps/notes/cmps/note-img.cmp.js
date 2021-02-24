export default {
    props: ['info'],
    template: `
    <section class="note-img">
        <h2> {{info.title}} </h2>
        <img :src="info.url"> 
    </section>
    `,
    methods: {
        
    },
    created() {
        
    }
}