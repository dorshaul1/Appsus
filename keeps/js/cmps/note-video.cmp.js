export default {
    props: ['info'],
    template: `
    <section class="note-video">
        <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
            <source :src="info.url" type="video/ogg">
        </video>
    </section>
    `,
    methods: {

    },
    created() {

    }
}