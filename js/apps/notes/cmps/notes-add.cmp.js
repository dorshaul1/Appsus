import { noteService } from '../services/notes.service.js'


export default {
    template: `
    <section v-if="currInput" class="notes-add flex">
        <form @submit.prevent="saveNote">
            <input class="add-input"  autocomplete="off" v-model="emptyNote.txt" :placeholder="currInput.placeholder" :type="currInput.type" />
        </form>
            <div class="add-btn-container">
                <i @click="setInput(0)" :class="textType" class="fas fa-font"></i>
                <i @click="setInput(1)" :class="imgType" class="fas fa-image"></i>
                <i @click="setInput(2)" :class="videoType" class="fas fa-video"></i>
                <i @click="setInput(3)" :class="listType" class="fas fa-list-ul"></i>
        </div>
    </section>
    `,
    data() {
        return {
            inputTypes: null,
            currInputIdx: 0,
            currInput: null,
            emptyNote: {
                txt: '',
                typeIdx: null
            }
        }
    },
    methods: {
        getInputTypes() {
            noteService.getInputTypes()
                .then(inputTypes => {
                    this.inputTypes = inputTypes;
                    this.setInput();
                });
        },
        setInput(inputIdx = 0) {
            this.currInputIdx = inputIdx;
            this.currInput = this.inputTypes[this.currInputIdx];
            this.emptyNote.typeIdx = this.currInputIdx;
        },
        saveNote() {
            this.$emit('addNote', this.emptyNote);
            this.emptyNote = null;
            this.getEmptyNote()
        },
        getEmptyNote() {
            this.emptyNote = {
                txt: null,
                typeIdx: this.currInputIdx
            }
        }
    },
    computed: {
        textType() {
            return { 'selected-type': this.currInputIdx === 0}
        },
        imgType() {
            return { 'selected-type': this.currInputIdx === 1}
        },
        videoType() {
            return { 'selected-type': this.currInputIdx === 2}
        },
        listType() {
            return { 'selected-type': this.currInputIdx === 3}
        }
    },
    created() {
        this.getInputTypes()
    },

}