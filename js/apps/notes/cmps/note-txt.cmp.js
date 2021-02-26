export default {
    props: ['note'],
    template: `
    <section class="note-txt">
        <p> {{ note.info.txt }} </p>
        <i class="cat-icon fas fa-font"></i>
    </section>
    `,
    methods: {
      
    }
}