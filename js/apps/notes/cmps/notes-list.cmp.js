
import { noteService } from '../services/notes.service.js'
import NotePreview from './note-preview.cmp.js'


export default {
    template: `
    <section v-if="notes" class="notes-list flex column align-items">
        <!-- <h1 class="notes-add-title">add note</h1> -->
        <div class="notes-container common-width">
               <note-preview v-for="(note, idx) in notes" :note="note" :key="idx" />
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
            noteService.getNotes()
                .then(notes => {
                    this.notes = notes
                    console.log(this.notes);
                });
        }

    },
    created() {
        this.getNotes()
    },
    components: {
        NotePreview
    }
}