export default {
    props: ['info'],
    template: `
    <section class="note-txt">
        <p> {{ info.txt }} </p>
        <i class="cat-icon fas fa-font"></i>
    </section>
    `,
    methods: {
      
    }
}