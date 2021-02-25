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
                <div class="main-body-content flex center"><pre>{{mail.content}}</pre></div>
                <div class="mail-details-options flex space-between">
                    <button class="delete-mail-btn flex align-items center"><img src="../../../../imgs/icons/delete.svg" @click="deleteMail(mail)"></button>
                    <button class="prev-page-btn flex align-items center"><img src="../../../../imgs/icons/curve-arrow-pointing-left.svg" @click="prevPage"></button>

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