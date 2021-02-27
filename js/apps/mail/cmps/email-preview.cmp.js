export default {
    props: ['mail'],
    template: `
        <section class="email-preview flex align-items space-between" :class="{read : !mail.isRead}" @click="select(mail)">
            <span class= "fav-star" @click.stop='favorite' :class="{favorite : mail.isFavorite}">{{isFav}}</span>
            <h1 class="mail-prev-from">{{mail.from}}</h1>
            <div class="mail-prev-content flex align-items">    
                <p class="mail-prev-subject">{{mail.subject}}</p>
                <p class="mail-prev-body">{{mail.content}}</p>
            </div>
            <p class="mail-prev-date flex">{{dateToShow}}</p>
        </section>
    `,
    computed: {
        dateToShow() {
            var ts = new Date(this.mail.sentAt);
            new Date()
            return `${ts.getMonth()+1} / ${ts.getDate()} / ${ts.getFullYear()} `
        },
        isFav(){
            // console.log('this.mail.isFavorite:', this.mail.isFavorite)
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