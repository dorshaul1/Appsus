import { mailServices } from '../services/email.service.js'

export default {
    template: `
    <section v-if="mail" class="details-page ">

    </section>
    `,
    data() {
        return {
            mail: null
        }
    },
    created() {
        const id = this.$route.params.mailId
        mailServices.getMailById(id)
            .then(mail => console.log(mail))
        // console.log('this.mail:', this.mail)
    },
}