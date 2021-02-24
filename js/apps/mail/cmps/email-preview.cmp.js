export default {
    props: ['mail'],
    template: `
        <section class="email-preview flex align-items" :class="{read : !mail.isRead}" @click="select(mail)">
            <h1 class="mail-prev-from">{{mail.from}}</h1>
            <div class="mail-prev-content">    
                <p class="mail-prev-subject">{{mail.subject}}</p>
                <p class="mail-prev-body">{{mail.body}}</p>
            </div>
            <p class="mail-prev-date">{{dateToShow}}</p>
        </section>
    `,
    computed: {
        dateToShow() {

            var ts = new Date(this.mail.sentAt);
            // console.log(ts.toDateString());
            new Date()
            return `${ts.getMonth()+1} / ${ts.getDate()} / ${ts.getFullYear()} `
        }
    },
    methods: {
        select() {
            this.$emit('select', this.mail)
        }
    },
}