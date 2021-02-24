import { mailServices } from '../services/email.service.js'

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
                <div class="main-body-content flex center"><pre>{{mail.body}}</pre></div>
                <div class="mail-details-options">

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
    computed:{
        dateToShow() {
            var ts = new Date(this.mail.sentAt);
            new Date()
            return `${ts.getMonth()+1} / ${ts.getDate()} / ${ts.getFullYear()} `
        }
    },
    created() {
        const id = this.$route.params.mailId
        mailServices.getMailById(id)
            .then(mail => {
                console.log('mail:', mail)
                this.mail = mail
            })
        // console.log('this.mail:', this.mail)
    },
}