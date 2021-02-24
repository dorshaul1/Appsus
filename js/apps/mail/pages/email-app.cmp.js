import { mailServices } from '../services/email.service.js'
import composeBtn from '../cmps/email-compose.cmp.js'
import emailList from '../cmps/email-list.cmp.js'
import choosenOption from '../cmps/choosen-option.cmp.js'

export default {
    template: `
    <section v-if="mails" class="mail-page flex column center">
        <div class="mail-main-container flex center">
            <div class="mail-options-container flex column align-items">
                <compose-btn @compose="compose"/>
                <choosen-option :chooseName="'inbox'" @click.native="filterAll" :class="isActive('inbox')"/>
                <choosen-option :chooseName="'favorites'" @click.native="getFavorite" :class="isActive('favorites')" />
            </div>
            <div class="mail-massage-container">
                <email-list :mails="mails" @deleteMail = "deleteMail"/>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            mails: null,
            choosenOption: 'inbox'
        }
    },
    components: {
        composeBtn,
        emailList,
        choosenOption
    },
    methods: {
        compose() {
        },

        loadMails() {
            return mailServices.query()
                .then(mails => {
                    this.mails = mails
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
        },
        getFavorite() {
            this.choosenOption = 'favorites'
            mailServices.filterByFavorites()
                .then(mails => this.mails = mails)
        },
        isActive(name){
            return {'active-option' : this.choosenOption === name}
        }

    },
    created() {
        this.loadMails()
    },
}