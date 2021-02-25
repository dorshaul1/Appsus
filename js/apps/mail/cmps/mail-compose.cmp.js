// import { mailServices } from '../services/email.service.js'
// import composeBtn from '../cmps/email-compose.cmp.js'
// import emailList from '../cmps/email-list.cmp.js'
// import choosenOption from '../cmps/choosen-option.cmp.js'
// import mailCompose from '../cmps/mail-compose.cmp.js'
// import { eventBus } from '../../../services/event-bus-service.js'


export default {
    template: `
    <section class="mail-compose flex center">
        <div class="mail-compose-container">
        <div class="compose-header flex align-items">New Message</div>
            <form class="flex column">
                <input v-model="mailToSend.mailAdress" class="compose-to" type="text" placeholder="To:"/>
                <input v-model="mailToSend.from" class="compose-cc" type="text" placeholder="From:"/>
                <input v-model="mailToSend.subject" class="compose-subject" type="text" placeholder="Subject:"/>
                <textarea v-model="mailToSend.content" class="compose-content" type="text" cols="30" rows="17" placeholder="Content:"></textarea>
            </form>
                <a @click.prevent="send" class="send-mail-btn"><i class="fas fa-share"></i></a>
        </div>
    </section>
    `,
    data() {
        return {
            mailToSend:{
                from: null,
                mailAdress: null,
                subject: null,
                content: null
            }
        }
    },
    methods: {
        send(){
            this.$emit('send',{...this.mailToSend})
        }
    },
}