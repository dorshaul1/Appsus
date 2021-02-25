import NoteFilter from '../apps/notes/cmps/note-filter.cmp.js'
import MailFilter from '../apps/mail/cmps/mail-filter.cmp.js'

export default {
    template: `
    <section class="app-filter">
        <component :is="currFilter"> </component>
    </section>
    `,
    data() {
        return {
            currFilter: null
        }
    },
    methods: {
        setFilter(path) {
            if (path === '/notes') this.currFilter = 'NoteFilter';
            if (path === '/mail') this.currFilter = 'MailFilter';
            if (path === '/') this.currFilter = null;
        }
    },
    components: {
        NoteFilter,
        MailFilter
    },
    created() {
        this.setFilter(this.$route.fullPath)

    },
    watch:{
        $route (to, from){
            this.setFilter(to.fullPath)
        }
    } 
}