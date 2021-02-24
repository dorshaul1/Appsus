
import { myRouter } from './routes.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <!-- <user-msg /> -->
            <!-- <app-header /> -->
            <router-view />
            <!-- <app-footer /> -->
        </section>
    `,
    components:{
       
    }
}

const app = new Vue(options)