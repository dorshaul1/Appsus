import NoteTxt from './note-txt.cmp.js'
import NoteImg from './note-img.cmp.js'
import NoteTodos from './note-todos.cmp.js'
import NoteVideo from './note-video.cmp.js'
import noteEdit from './note-edit.cmp.js'


export default {
    props: ['note'],
    template: `
    <section class="note-preview flex column">
        <component :is="note.type" :info="note.info" @setVal="setAns($event, idx)"></component>
        <div v-if="!isEditting" class="note-edit-btns">
            <button @click="remove">Remove</button>
            <button @click="edit">Edit</button>
        </div>
        <note-edit @closeEdit="isEditting=false" v-if="isEditting" :note="note" />
    </section>
    `,
    data() {
        return {
            isEditting: false
        }
    },
    methods: {
        remove() {
            this.$emit('remove', this.note.id);
            console.log('deleting');
        },
        edit() {
            this.isEditting = true;
        }
    },
    components: {
        NoteTxt,
        NoteImg,
        NoteTodos,
        NoteVideo,
        noteEdit
    }
}