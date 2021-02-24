import { mailServices } from '../services/email.service.js';
import emailPreview from './email-preview.cmp.js'
import passDownPreview from './pass-down-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
    <ul class="mail-list flex column">
        <li v-if="mails" v-for="mail in mails"><email-preview :mail="mail" @select="select"/>
        <pass-down-preview v-if="mail.isClicked" :mail="mail" @fullScreen="moveToDetails"/></li>

    </ul>
    `,
    data() {
        return {
            // isClicked: false
        }
    },
    components: {
        emailPreview,
        passDownPreview
    },
    methods: {
        select(mail) {
            // console.log('mail:', mail)
            mail.isClicked = !mail.isClicked
            // console.log(' this.isClicked:',  this.isClicked)
            mail.isRead = true
            mailServices.updateMail(mail)
        },
        moveToDetails(mail){
                console.log('mail:', mail)
                this.$router.push(`/mail/details/${mail.id}`)
        }
    }
}