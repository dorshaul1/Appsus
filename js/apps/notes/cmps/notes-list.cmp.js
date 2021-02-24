
import { noteService } from '../services/notes.service.js'
import NotePreview from './note-preview.cmp.js'
import AddNote from './notes-add.cmp.js'


export default {
    template: `
    <section v-if="notes" class="notes-list flex column align-items">
        <add-note @noteAdded="getNotes" />
        <div class="notes-container common-width">
               <note-preview  v-for="(note, idx) in notes" :note="note" :key="idx" />
        </div>
    </section>
    `,
    data() {
        return {
            notes: null
        }
    },
    methods: {
        getNotes() {
            noteService.query()
                .then(notes => {
                    this.notes = notes
                    // console.log(this.notes);
                });
        }

    },
    created() {
        this.getNotes()
    },
    components: {
        NotePreview,
        AddNote
    }
}