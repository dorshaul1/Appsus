export default {
    props: ['mail'],
    template: `
        <section class="email-preview flex align-items space-between" :class="{read : !mail.isRead}" @click="select(mail)">
            <span class= "fav-star" @click.stop='favorite' :class="{favorite : mail.isFavorite}">{{isFav}}</span>
            <div class="mail-prev-from">{{mail.from}}</div>
            <div class="mail-prev-content flex align-items">    
                <p class="mail-prev-subject">{{mail.subject}}</p>
                <p class="mail-prev-body">{{mail.content}}</p>
            </div>
            <div class="mail-prev-date flex">{{dateToShow}}</div>
        </section>
    `,
    computed: {
        dateToShow() {
            var ts = new Date(this.mail.sentAt);
            new Date()
            return `${ts.getMonth()+1} / ${ts.getDate()} / ${ts.getFullYear()} `
        },
        isFav(){
            return this.mail.isFavorite ? '★' : '☆' 
        }
    },
    methods: {
        select() {
            this.$emit('select', this.mail)
        },
        favorite(){
            this.$emit('favorite')
        }
    },
}