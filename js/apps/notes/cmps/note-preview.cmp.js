import NoteTxt from './note-txt.cmp.js'
import NoteImg from './note-img.cmp.js'
import NoteTodos from './note-todos.cmp.js'
import NoteVideo from './note-video.cmp.js'


export default {
    props: ['note'],
    template: `
    <section class="note-preview">
        <component :is="note.type" :info="note.info" @setVal="setAns($event, idx)"></component>
    </section>
    `,
    methods: {
        
    },
    components: {
        NoteTxt,
        NoteImg,
        NoteTodos,
        NoteVideo
    }
}