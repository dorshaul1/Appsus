import { eventBus } from '../../../services/event-bus-service.js'

export default { 
    template: `
    <section class="note-filter">
        <form class="search-bar" @submit.prevent="setFilter">
            <input @input="setFilter" placeholder="Search note" v-model="filterBy.noteName" />
            <select @change="setFilter" v-model.number="filterBy.noteType">
                <option value="All">All</option>
                <option value="NoteTxt">Text</option>
                <option value="NoteImg">Image</option>
                <option value="NoteVideo">Video</option>
                <option value="NoteTodos">List</option>
            </select>   
            <i class="search-btn fas fa-search"></i>
        </form>
    </section>
    `,
    data() {
        return {
            filterBy: {
                noteName: '',
                noteType: 'All'
            }
        }
    },
    methods: {
        setFilter() {
            // console.log('triggered');
            const filters = Object.assign({}, this.filterBy);
            eventBus.$emit('filter', filters);
        }
    },
    created() {
    }
}