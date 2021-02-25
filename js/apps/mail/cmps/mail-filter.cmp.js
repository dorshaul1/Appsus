
export default { 
    template: `
    <section class="mail-filter">
        <form class="search-bar" @submit.prevent="setFilter">
            <input @input="setFilter" placeholder="Mail" v-model="filterBy.mailName">
            <select @change="setFilter" v-model.number="filterBy.mailType">
                <option value="All">All</option>
                <option value="mailTxt">Text</option>
                <option value="mailImg">Image</option>
                <option value="mailVideo">Video</option>
                <option value="mailTodos">List</option>
            </select>   
            <button>Search</button>
        </form>
    </section>
    `,
    data() {
        return {
            filterBy: {
                mailName: '',
                mailType: 'All'
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy)
        }
    },
    created() {
        console.log('dorrrrrrrr');
    }
}