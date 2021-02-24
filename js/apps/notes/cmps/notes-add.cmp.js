import { storageService } from '../../../services/async-storage-service.js'
import { noteService } from '../services/notes.service.js'


export default {
    template: `
    <section v-if="currInput" class="notes-add">
        <form @submit.prevent="saveNote">
            <input  autocomplete="off" v-model="emptyNote" :placeholder="currInput.placeholder" :type="currInput.type" />
        </form>
            <div>
                <a @click="setInput(0)">text</a>
                <a @click="setInput(1)">photo</a>
                <a @click="setInput(2)">video</a>
            <a @click="setInput(3)">todo</a>
            <pre>
                {{emptyNote}}
            </pre>
        </div>
    </section>
    `,
    data() {
        return {
            inputTypes: null,
            currInputIdx: 0,
            currInput: null,
            emptyNote: null
        }
    },
    methods: {
        getInputTypes() {
            noteService.getInputTypes()
            .then(inputTypes => {
                this.inputTypes = inputTypes
                this.setInput()
            })
        },
        setInput(inputIdx = 0) {
            this.currInputIdx = inputIdx;
            this.currInput = this.inputTypes[this.currInputIdx];
        },
        saveNote() {
            noteService.saveNote(this.currInputIdx, this.emptyNote)
            .then (ans => {
                this.$emit('noteAdded');
            })
            this.emptyNote = null;
        }
    },
    computed: {
    },
    created() {
        this.getInputTypes()
    },

}