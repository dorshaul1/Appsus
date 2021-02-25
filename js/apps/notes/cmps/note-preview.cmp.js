import NoteTxt from './note-txt.cmp.js'
import NoteImg from './note-img.cmp.js'
import NoteTodos from './note-todos.cmp.js'
import NoteVideo from './note-video.cmp.js'
import noteEdit from './note-edit.cmp.js'


export default {
    props: ['note'],
    template: `
    <section :class="pinned" :style=" { background: getColor } " class="note-preview flex column">
        <component :is="note.type" :info="note.info" @setVal="setAns($event, idx)"></component>
        <div v-if="!isEditting" class="note-edit-btns">
            <button @click="remove">Remove</button>
            <button @click="edit">Edit</button>
            <!-- <button @click="pin">pin</button> -->
            <i @click="pin" class="pin-btn fas fa-thumbtack"></i>
            <button class="edit-color-btn">Color
                <div class="colors-container">
                    <span class="color-option" @click="setColor('rgb(255, 255, 255)')" style="background-color: rgb(255, 255, 255);"> &nbsp; </span>
                    <span class="color-option" @click="setColor('rgb(255, 204, 136)')" style="background-color: rgb(255, 204, 136);"> &nbsp; </span>
                    <span class="color-option" @click="setColor('rgb(204, 255, 153)')" style="background-color: rgb(204, 255, 153);"> &nbsp; </span>
                    <span class="color-option" @click="setColor('rgb(255, 136, 136)')" style="background-color: rgb(255, 136, 136);"> &nbsp; </span>
                    <span class="color-option" @click="setColor('rgb(170, 255, 238)')" style="background-color: rgb(170, 255, 238);"> &nbsp; </span>
                    <span class="color-option" @click="setColor('rgb(255, 255, 136)')" style="background-color: rgb(255, 255, 136);"> &nbsp; </span>
                    <span class="color-option" @click="setColor('rgb(136, 221, 255)')" style="background-color: rgb(136, 221, 255);"> &nbsp; </span>
                    <span class="color-option" @click="setColor('rgb(136, 187, 255)')" style="background-color: rgb(136, 187, 255);"> &nbsp; </span>
                    <span class="color-option" @click="setColor('rgb(221, 187, 255)')" style="background-color: rgb(221, 187, 255);"> &nbsp; </span>
                    <span class="color-option" @click="setColor('rgb(221, 221, 221)')" style="background-color: rgb(221, 221, 221);"> &nbsp; </span>
                </div>
            </button>
        </div>
        <note-edit @closeEdit="isEditting=false" v-if="isEditting" :note="note" />
    </section>
    `,
    data() {
        return {
            isEditting: false,
            chosenColor: 'white'
        }
    },
    methods: {
        remove() {
            this.$emit('remove', this.note.id);
        },
        edit() {
            this.isEditting = true;
        },
        setColor(color) {
            this.note.style.backgroundColor = color;
            this.$emit('saveNote', this.note);
        },
        pin() {
            this.$emit('pin', this.note);
        }
    },
    computed: {
        getColor() {
            return this.note.style.backgroundColor;
        },
        pinned() {
            return { pinned: this.note.isPinned}
        }
    },
    created() {
    },
    components: {
        NoteTxt,
        NoteImg,
        NoteTodos,
        NoteVideo,
        noteEdit
    },
}