
import { myRouter } from './routes.js'
import mainHeader from './cmps/header.cmp.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <main-header />
            <!-- <user-msg /> -->
            <!-- <app-header /> -->
            <router-view />
            <!-- <app-footer /> -->
        </section>
    `,
    components:{
        mainHeader
    }
}

const app = new Vue(options)