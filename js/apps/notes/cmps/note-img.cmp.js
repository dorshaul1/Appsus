export default {
    props: ['note'],
    template: `
    <section class="note-img flex align-items center">
        <img :src="note.info.url"> 
    </section>
    `
}