
import { noteService } from '../services/notes.service.js'
import NotePreview from './note-preview.cmp.js'
import AddNote from './notes-add.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'
import { storageService } from '../../../services/async-storage-service.js'


export default {
    template: `
    <section v-if="notes" class="notes-list flex column align-items">
        <add-note @addNote="addNote" />
        <div class="notes-container common-width">
               <note-preview @remove="removeNote" v-for="(note, idx) in notes" :note="note" :key="idx" />
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
                    this.notes = notes;
                });
        },
        addNote(newNote) {
            noteService.saveNote(newNote)
                .then(this.getNotes)
        },
        removeNote(noteId) {
            noteService.removeNote(noteId)
                .then(this.getNotes);
        },
        updateNote(newTxt, note) {
            noteService.updateNote(newTxt, note)
                .then(this.getNotes)
        }
    },
    created() {
        this.getNotes()
        eventBus.$on('update', this.updateNote)
    },
    components: {
        NotePreview,
        AddNote
    }
}