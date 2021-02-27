export default {
    name: 'emailStatus',
    props: ['mailsRead'],
    template: `
    <section class="email-status flex center align-items">
        <h1 class="flex center align-items">{{showMailsRead}}</h1>
            <div class="status-content-container">
                <div v-if="mailsRead" class="status-line" :style="style"></div>
            </div>
    </section>
    `,
    data() {
        return {
            style: {
                width: null
            }
        }
    },
    computed: {
        showMailsRead() {
            return `${this.mailsRead}%`
        },
    },
    methods: {
        changeWidth(newVal) {
            this.style.width = newVal + '%'
        }
    },
    watch: {
        mailsRead: (function(newVal,) {
            this.changeWidth(newVal)
        }),
    }
}