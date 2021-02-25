
import { myRouter } from './routes.js'
import mainHeader from './cmps/header.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <user-msg />
            <main-header />
            <router-view />
        </section>
    `,
    components:{
        mainHeader,
        userMsg
    }
}

const app = new Vue(options)