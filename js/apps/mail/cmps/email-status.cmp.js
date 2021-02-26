export default {
    props: ['mailsRead'],
    template: `
    <section v-if="mailsRead" class="email-status flex center align-items">
        <h1 class="flex center align-items">{{showMailsRead}}</h1>
        <!-- <div class="status-container flex center align-items"> -->
            <div class="status-content-container">
                <div class="status-line" :style="{width: changeStyle}"></div>
                <!-- <style>
                    --line-width: {{mailsRead}}
                    .status-line{
                        width: 30%
                    }
                </style> -->
            </div>
        <!-- </div> -->
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
        changeStyle() {
            return this.changeWidth()
        }
    },
    methods: {
        changeWidth() {
            this.style.width = this.mailsRead + '%'
            console.log('this.style.width:', this.style.width)
        }
    },
    watch: {
        width: (change => {
            // console.log('change:', change)
            // this.style.width = String(change) + '%'
            console.log(change + '%')
            // return change + '%'
        })
        // }
        // created() {
        //     // this.changeWidth()
        // },
    }
}