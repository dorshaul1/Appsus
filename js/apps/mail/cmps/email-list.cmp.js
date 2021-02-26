import { mailServices } from '../services/email.service.js';
import emailPreview from './email-preview.cmp.js'
import passDownPreview from './pass-down-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
    <ul class="mail-list flex column">
        <li v-if="mails" v-for="mail in mails"><email-preview :mail="mail" @select="select" @favorite = "favorite(mail)"/>
            <pass-down-preview v-if="mail.isClicked" :mail="mail" @fullScreen="moveToDetails" @delete="deleteMail"/>
        </li>

    </ul>
    `,
    components: {
        emailPreview,
        passDownPreview
    },
    methods: {
        select(mail) {
            mail.isClicked = !mail.isClicked
            mail.isRead = true
            mailServices.updateMail(mail)
                .then(()=>{
                    if (mail.isRead) this.$emit('changeStatus')
                })
        },
        moveToDetails(mail) {
            this.$router.push(`/mail/details/${mail.id}`)
        },
        deleteMail(mail) {
            this.$emit('deleteMail', mail)
        },
        favorite(mail) {
            mail.isFavorite = !mail.isFavorite
            mailServices.updateMail(mail)
        }
    }
}