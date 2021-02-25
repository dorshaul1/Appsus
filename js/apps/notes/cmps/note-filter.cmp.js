
export default { 
    template: `
    <section class="note-filter">
        <form class="search-bar" @submit.prevent="setFilter">
            <input @input="setFilter" placeholder="Name" v-model="filterBy.noteName">
            <select @change="setFilter" v-model.number="filterBy.noteType">
                <option value="All">All</option>
                <option value="NoteTxt">Text</option>
                <option value="NoteImg">Image</option>
                <option value="NoteVideo">Video</option>
                <option value="NoteTodos">List</option>
            </select>   
            <button>Search</button>
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
        select(bookId) {
            this.$emit('selected', bookId);
        },
        setFilter() {
            this.$emit('filtered', this.filterBy)
        }
    },
    created() {
        console.log('woooohoooo');
    }
}