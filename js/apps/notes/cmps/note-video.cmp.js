export default {
    props: ['info'],
    template: `
    <section class="note-video">
        <video width="320" height="240" controls>
            <source :src="info.url" type="video/ogg">
        </video>
        <i class="cat-icon fas fa-video"></i>
    </section>
    `,
    methods: {

    },
    created() {

    }
}