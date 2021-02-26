import { mailServices } from '../services/email.service.js'
import { eventBus } from '../../../services/event-bus-service.js'

export default {
    template: `
    <section class="mail-filter">
        <form class="search-bar" @input.prevent="setFilter">
            <input placeholder="Search mail" v-model="searchStr">
            <select v-model ="selected" >
                <option>All</option>
                <option>From</option>
                <option>Subject</option>
                <option>Content</option>
            </select>   
            <i class="search-btn fas fa-search"></i>
        </form>
    </section>
    `,
    data() {
        return {
            selected: '',
            searchStr: '',
        }

    },
    methods: {
        setFilter() {
            if (!this.selected) this.selected ='all'
            if (this.searchStr === '') {
                mailServices.query()
                    .then(mails => eventBus.$emit('filtered', mails))
            }
            else mailServices.searchMail(this.searchStr, this.selected)
                .then(mails => {
                    eventBus.$emit('filtered', mails)
                })
        }
    }
}