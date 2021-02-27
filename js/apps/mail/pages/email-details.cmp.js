import { mailServices } from '../services/email.service.js'
import NoteImg from "../../notes/cmps/note-img.cmp.js"
import NoteTodos from "../../notes/cmps/note-todos.cmp.js"
import NoteTxt from "../../notes/cmps/note-txt.cmp.js"
import NoteVideo from "../../notes/cmps/note-video.cmp.js"

export default {
    template: `
    <section v-if="mail" class="mail-details-page flex column center">
        <div class="mail-details-container flex center align-items">
            <div class="mail-details-content-container">
                <div class="header-content">{{mail.subject}}</div>
                <div class="from-details-content flex space-between align-items">
                        <div class="details-from flex"><h1>{{mail.from}}</h1><p>< {{mail.mailAdress}} ></p></div>
                        <div class="details-date">{{dateToShow}}</div>
                </div>
                <div class="details-content-container flex align-items center">
                    <div  v-if="!mail.note" class="main-body-content flex center"><pre>{{mail.content}}</pre></div>
                    <component class="note-content flex align-items center" v-if="mail.note" :is="mail.note.type" :note="mail.note"></component>
                </div>
                <div class="mail-details-options flex space-between">
                    <a class="prev-page-btn flex align-items center"><i class="fas fa-arrow-circle-left" @click="prevPage"></i></a>
                    <a class="delete-mail-btn flex align-items center"><i class="fas fa-trash" @click="deleteMail(mail)"></i></a>

                </div>

            </div>
        </div>
    </section>
    `,
    data() {
        return {
            mail: null
        }
    },
    computed: {
        dateToShow() {
            var ts = new Date(this.mail.sentAt);
            new Date()
            return `${ts.getMonth() + 1} / ${ts.getDate()} / ${ts.getFullYear()} `
        }
    },
    components: {
        NoteImg,
        NoteTodos,
        NoteTxt,
        NoteVideo
    },
    methods: {
        deleteMail(mail) {
            this.$emit('delete', mail)
        },
        deleteMail(mail) {
            mailServices.deleteMail(mail)
                .then(() => this.$router.push(`/mail`))
        },
        prevPage(){
            this.$router.push(`/mail`)
        }
    },
    created() {
        const id = this.$route.params.mailId
        mailServices.getMailById(id)
            .then(mail => {
                this.mail = mail
            })
    },
}