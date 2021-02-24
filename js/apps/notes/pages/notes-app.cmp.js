
import { noteService } from '../services/notes.service.js'
import notesAdd from '../cmps/notes-add.cmp.js'
import notesList from '../cmps/notes-list.cmp.js'



export default {
    template: `
    <section class="notes-app">
        <notes-list />
    </section>
    `,
    methods: {
      
    },
    components: {
        notesList
    }
}