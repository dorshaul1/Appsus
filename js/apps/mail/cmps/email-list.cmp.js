import { mailServices } from '../services/email.service.js';
import emailPreview from './email-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
    <ul class="mail-list flex column">
        <li v-for="mail in mails"><email-preview :mail="mail" @select="select"/></li>
    </ul>
    `,
    data() {
        return {

        }
    },
    components: {
        emailPreview
    },
    methods: {
        select(mail) {
            mail.isRead = true
            this.$router.push(`/mail/details/${mail.id}`)
        }
    }
}