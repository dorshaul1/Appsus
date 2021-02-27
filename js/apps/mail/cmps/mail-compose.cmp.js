import { eventBus } from "../../../services/event-bus-service.js"
import { noteService } from "../../notes/services/notes.service.js"

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
    watch: {
        '$route.params.note'(id) {
            // console.log('this.$route.params.note:', this.$route)
            // console.log(id)
            this.getNote()
            // console.log('noteId:', noteId)
        }
        // function(id)=>{
        // }
    },
    created() {
        this.getNote()
    },
    destroyed() {
        this.$router.push('/mail').catch(()=>{})
    },
}