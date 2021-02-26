import { eventBus } from "../../../services/event-bus-service.js"

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
            const regex = /\S+@\S+\.\S+/
            if (regex.test(this.mailToSend.mailAdress)) this.$emit('send',{...this.mailToSend})
            else console.log('not a valid mail');
        }
    },
}