import { noteService } from '../services/notes.service.js'


export default {
    template: `
    <section class="notes-add">
        <input autocomplete="off" :placeholder="What’s on your mind..." type="text" />
        <div>
            <a @click="setInput(0)">text</a>
            <a @click="setInput(1)">photo</a>
            <a @click="setInput(2)">video</a>
            <a @click="setInput(3)">todo</a>
        </div>
    </section>
    `,
    data() {
        return {
            inputTypes: null,
            currInputIdx: 0,
            emptyNote: {
                
            }
        }
    },
    methods: {
        getInputTypes() {
            noteService.getInputTypes()
            .then(inputTypes => {
                this.inputTypes = inputTypes
                console.log(this.inputTypes)
            })
        },
        setInput(inputIdx) {
            this.currInputIdx = inputIdx;
            console.log(this.currInputIdx);
        }
    },
    
    created() {
        this.getInputTypes()
    },

}