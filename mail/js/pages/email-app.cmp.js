import { mailServices } from '../services/email.service.js'
import composeBtn from '../cmps/email-compose.cmp.js'
import emailList from '../cmps/email-list.cmp.js'

export default {
    template: `
    <section class="mail-page flex column">
        <div class="mail-main-container flex">
            <div class="mail-options-container flex column align-items">
                <compose-btn @compose="compose"/>
            </div>
            <div class="mail-massage-container">
                <email-list :mails="mails"/>
            </div>
        <!-- <router-link class="buy-books-btn" to="/book">Lets </router-link> -->
        </div>
    </section>
    `,
    data() {
        return {
            mails: null
        }
    },
    components: {
        composeBtn,
        emailList
    },
    methods: {
        compose() {
            console.log('hi');
        }
    },
    created() {
        mailServices.query()
            .then(mails=> {
                console.log('mails:', mails)
                this.mails = mails
            })
    },
}