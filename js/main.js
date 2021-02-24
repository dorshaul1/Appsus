
import { myRouter } from './routes.js'
import mainHeader from './cmps/header.cmp.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <!-- <user-msg /> -->
            <main-header />
            <router-view />
        </section>
    `,
    components:{
        mainHeader
    }
}

const app = new Vue(options)