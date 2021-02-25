import { mailServices } from '../services/email.service.js'
import composeBtn from '../cmps/email-compose.cmp.js'
import emailList from '../cmps/email-list.cmp.js'
import choosenOption from '../cmps/choosen-option.cmp.js'
import mailCompose from '../cmps/mail-compose.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'


export default {
    template: `
    <section v-if="mails" class="mail-page flex column center align-items">
        <div class="mail-main-container flex center common-width">
            <div class="mail-options-container flex column align-items">
                <compose-btn @compose="compose"/>
                <choosen-option :chooseName="'Inbox'" @click.native="filterAll" :class="isActive('inbox')"/>
                <choosen-option :chooseName="'Favorites'" @click.native="getFavorite" :class="isActive('favorites')" />
                <choosen-option :chooseName="'Sent Mails'" @click.native="sentMails" :class="isActive('sentMails')" />
            </div>
            <div class="mail-massage-container">
                <email-list :mails="mails" @deleteMail = "deleteMail"/>
                <mail-compose v-if="isAddingMail" @send="sendMail"/>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            isAddingMail: false,
            mails: null,
            choosenOption: 'inbox',
            sentedMails: null
        }
    },
    components: {
        composeBtn,
        emailList,
        choosenOption,
        mailCompose
    },
    methods: {
        compose() {
            this.isAddingMail = true
        },

        loadMails() {
            return mailServices.query()
                .then(mails => {
                    this.mails = mails
                })
        },

        loadSenTedMails() {
            return mailServices.querySented()
                .then(mails => {
                    this.sentedMails = mails
                })
        },

        deleteMail(mail) {
            mailServices.deleteMail(mail)
                .then((mails) => this.mails = mails)
        },
        filterAll() {
            this.choosenOption = 'inbox'
            mailServices.query()
                .then(mails => this.mails = mails)
            this.isAddingMail = false
        },
        getFavorite() {
            this.choosenOption = 'favorites'
            mailServices.filterByFavorites()
                .then(mails => this.mails = mails)
            this.isAddingMail = false
        },
        isActive(name) {
            return { 'active-option': this.choosenOption === name }
        },
        sentMails() {
            this.choosenOption = 'sentMails'
            mailServices.querySented()
                .then(mails => this.mails = mails)
            this.isAddingMail = false
        },
        filteredMails() {
            eventBus.$on('filtered', (filteredMails) => {
                // if (!filteredMails) this.mails = 'No Results'
                this.mails = filteredMails
            })
        },
        sendMail(mail) {
            // console.log('mail:', mail)
            mailServices.createMail(mail)
            mailServices.addSentedMail(mail)
            this.isAddingMail = false
            // mailServices.updateSentedMail(mail)
            this.loadSenTedMails()
                .then(mails => this.sentedMails = mails)
        }

    },
    created() {
        // console.log(this.mail);
        this.loadMails()
        this.loadSenTedMails()
        this.filteredMails()
    },
//     watch: {
//         sentedMails{
//     console.log('sentedMails:', sentedMails)
// }
//     }
}