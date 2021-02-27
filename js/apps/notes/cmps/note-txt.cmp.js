export default {
    props: ['note'],
    template: `
    <section class="note-txt">
        <p> {{ note.info.txt }} </p>
    </section>
    `,
    methods: {
      
    }
}