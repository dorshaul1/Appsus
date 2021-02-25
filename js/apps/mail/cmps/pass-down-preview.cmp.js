
export default {
    props: ['mail'],
    template: `
        <section class="pass-down-prev-conteainer">
            <div class="pass-down-prev-header-content flex space-between align-items">
                {{mail.subject}}
                <div class="pass-down-prev-options flex">
                    <button class="delete-mail-btn flex align-items center"><img src="../../../../imgs/icons/delete.svg" @click="deleteMail(mail)"></button>
                    <button class="full-screen-btn flex align-items center"><img src="../../../../imgs/icons/switch-to-full-screen-button.svg" @click="fullScreen(mail)"></button>
                </div>
            </div>
            <div class="from-pass-down-prev-content flex space-between align-items">
                    <div class="pass-down-prev-from flex"><h1>{{mail.from}}</h1><p>< {{mail.mailAdress}} ></p></div>
            </div>
            <div class="pass-down-prev-body-content flex center"><pre>{{mail.body}}</pre></div>
        </section>
    `,
        methods: {
            fullScreen(mail){
                this.$emit('fullScreen', mail)
            },
            deleteMail(mail){
                this.$emit('delete', mail)
            }
        },
}