import AppFilter from './app-filter.cmp.js'

export default {
    template: `
    <section class="app-header flex align-items center">
        <header class="common-width flex space-between"> 
            <h1 class="logo">AppSus</h1>
            <app-filter />  
        <nav>
            <h1>Nav</h1>
        </nav>
        </header>
        </div>
    </section>
    `,
    methods: {

    },
    components: {
        AppFilter
    }
}