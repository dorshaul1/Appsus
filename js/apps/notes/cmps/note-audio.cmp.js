export default {
    props: ['note'],
    template: `
    <section class="note-audio flex align-items center">    
    <audio controls>
    <source :src="note.info.url" type="audio/ogg">
    <source :src="note.info.url" type="audio/mpeg">
    </audio>
    </section>
    `
}