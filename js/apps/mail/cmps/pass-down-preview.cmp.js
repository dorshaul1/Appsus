import NoteImg from "../../notes/cmps/note-img.cmp.js"
import NoteTodos from "../../notes/cmps/note-todos.cmp.js"
import NoteTxt from "../../notes/cmps/note-txt.cmp.js"
import NoteVideo from "../../notes/cmps/note-video.cmp.js"
import NoteAudio from "../../notes/cmps/note-audio.cmp.js"

export default {
    name: 'pass-down',
    props: ['mail'],
    template: `
        <section class="pass-down-prev-conteainer">
            <div class="pass-down-prev-header-content flex space-between align-items">
                {{mail.subject}}
                <div class="pass-down-prev-options flex">
                    <a class="delete-mail-btn flex align-items center"><i class="fas fa-trash" @click="deleteMail(mail)"></i></a>
                    <a class="full-screen-btn flex align-items center"><i class="fas fa-expand" @click="fullScreen(mail)"></i></a>
                </div>
            </div>
            <div class="from-pass-down-prev-content flex space-between align-items">
                    <div class="pass-down-prev-from flex"><h1>{{mail.from}}</h1><p>< {{mail.mailAdress}} ></p></div>
            </div>
            <div class="content-container flex align-items center">
                <div v-if="!mail.note" class="pass-down-prev-body-content flex center"><pre>{{mail.content}}</pre></div>
                <component class="note-content-pass-down flex align-items center" v-if="mail.note" :is="mail.note.type" :note="mail.note"></component>
            </div>

        </section>
    `,
    components: {
        NoteImg, 
        NoteTodos,
        NoteTxt, 
        NoteVideo,
        NoteAudio
    },
    methods: {
        fullScreen(mail) {
            this.$emit('fullScreen', mail)
        },
        deleteMail(mail) {
            this.$emit('delete', mail)
        }
    },
}