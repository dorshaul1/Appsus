import { eventBus } from "../../../services/event-bus-service.js"
import { noteService } from "../../notes/services/notes.service.js"
import NoteImg from "../../notes/cmps/note-img.cmp.js"
import NoteTodos from "../../notes/cmps/note-todos.cmp.js"
import NoteTxt from "../../notes/cmps/note-txt.cmp.js"
import NoteVideo from "../../notes/cmps/note-video.cmp.js"

export default {
    template: `
    <section class="mail-compose flex center">
        <div class="mail-compose-container">
        <div class="compose-header flex align-items">New Message</div>
            <form class="flex column">
                <input v-model="mailToSend.mailAdress" class="compose-to" type="text" placeholder="To:"/>
                <input v-model="mailToSend.from" class="compose-cc" type="text" placeholder="From:"/>
                <input v-model="mailToSend.subject" class="compose-subject" type="text" placeholder="Subject:"/>
                <textarea v-if="!note" v-model="mailToSend.content" class="compose-content" type="text" cols="30" rows="17" placeholder="Content:"></textarea>
                <component v-if="note" :is="note.type" :note="note"></component>
                <a @click.prevent="send" class="send-mail-btn"><i class="fas fa-share"></i></a>
                
            </form>
        </div>
    </section>
    `,
    data() {
        return {
            mailToSend: {
                from: null,
                mailAdress: null,
                subject: null,
                content: null,
            },
            note: null
        }
    },
    methods: {
        send() {
            const regex = /\S+@\S+\.\S+/
            if (regex.test(this.mailToSend.mailAdress)) this.$emit('send', { ...this.mailToSend })
            else console.log('not a valid mail');
        },
        getNote() {
            const noteId = this.$route.params.note
            console.log('noteId:', noteId)
            noteService.getNoteById(noteId)
                .then(note => {
                    this.note = note
                    console.log('this.note:', this.note)
                })
        }
    },
    components: {
        NoteImg,
        NoteTodos,
        NoteTxt,
        NoteVideo
    },
    watch: {
        '$route.params.note'(id) {
       
            this.getNote()
        }
    },
    created() {
        this.getNote()
    },
    destroyed() {
    },
}