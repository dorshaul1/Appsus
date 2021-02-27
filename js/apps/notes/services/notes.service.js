
import { storageService } from '../../../services/async-storage-service.js';

const NOTES_KEY = 'notes';

export const noteService = {
    query,
    getInputTypes,
    addNote,
    removeNote,
    updateNote,
    saveNote,
    pinNote,
    getNoteById
}

function pinNote(note) {
    note.isPinned = !note.isPinned;
    return storageService.put(NOTES_KEY, note)
}
function updateNote(newTxt, note) {
    return setnewNoteTxt(newTxt, note)
        .then(note => {
            return storageService.put(NOTES_KEY, note)
        });
}

function setnewNoteTxt(newTxt, note) {
    switch (note.type) {
        case 'NoteTxt':
            note.info.txt = newTxt;
            break;
        case 'NoteImg':
            note.info.url = newTxt;
            break;
        case 'NoteVideo':
            note.info.url = newTxt;
            break;
        case 'NoteAudio':
            note.info.url = newTxt;
            break;
        case 'NoteTodos':
            note.info.todos = newTxt.split(',').map(todo => {
                return { txt: todo, doneAt: null };
            });
            break;
    }
    return Promise.resolve(note);
}

function saveNote(note) {
    return storageService.put(NOTES_KEY, note);
}


function addNote(note) {
    let newNote = {
        isPinned: false,
        info: {},
        style: {
            backgroundColor: 'white'
        }
    }

    switch (note.typeIdx) {
        case 0:
            newNote.type = 'NoteTxt'
            newNote.info.txt = note.txt;
            break;
        case 1: newNote
            newNote.type = 'NoteImg'
            newNote.info.url = note.txt;
            break;
        case 2:
            newNote.type = 'NoteVideo'
            newNote.info.url = note.txt;
            break;
        case 3:
            newNote.type = 'NoteTodos'
            newNote.info.todos = note.txt.split(',').map(todo => {
                return { txt: todo, doneAt: null };
            });
            break;
        case 3:
            newNote.type = 'NoteAudio'
            newNote.info.url = note.txt;
            break;
    }
    return storageService.post(NOTES_KEY, newNote);
}

function removeNote(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}

function query() {
    if (!localStorage.getItem(NOTES_KEY)) {
        storageService.save(NOTES_KEY, notesDB);
        return Promise.resolve(notesDB);
    }
    return storageService.query(NOTES_KEY);
}

function getInputTypes() {
    return Promise.resolve(inputTypes);
}

const notesDB = [
    {
        id: storageService.makeId(),
        type: "NoteTxt",
        isPinned: false,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "rgb(221, 187, 255)"
        }
    },
    {
        id: storageService.makeId(),
        type: "NoteTodos",
        isPinned: true,
        info: {
            todos: [
                { txt: "eat()", isDone: false },
                { txt: "sleep()", isDone: false },
                { txt: "code()", isDone: false },
                { txt: "repeat()", isDone: false }
            ]
        },
        style: {
            backgroundColor: "rgb(255, 255, 136)"
        }
    },
    {
        id: storageService.makeId(),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "data:image/jpeg;base64,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",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "rgb(136, 187, 255)"
        }
    },
    {
        id: storageService.makeId(),
        type: "NoteVideo",
        isPinned: false,
        info: {
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        },
        style: {
            backgroundColor: "rgb(255,255,255)"
        }
    },
    {
        id: storageService.makeId(),
        type: "NoteAudio",
        isPinned: true,
        info: {
            url: "../../../../audio/timbaland.mp3"
        },
        style: {
            backgroundColor: "rgb(136, 221, 255)"
        }
    },
    {
        id: storageService.makeId(),
        type: "NoteImg",
        isPinned: true,
        info: {
            url: "https://media.giphy.com/media/h40iIBC3wqOns75yOa/giphy.gif",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "rgb(255, 136, 136)"
        }
    },
    {
        id: storageService.makeId(),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "https://media.giphy.com/media/3o7qE2VAxuXWeyvJIY/giphy.gif",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "rgb(204, 255, 153)"
        }
    },
    {
        id: storageService.makeId(),
        type: "NoteTodos",
        isPinned: true,
        info: {
            todos: [
                { txt: "flex", isDone: false },
                { txt: "grid", isDone: false },
                { txt: "Bootstrap", isDone: false },
                { txt: "CSS won me", isDone: false }
            ]
        },
        style: {
            backgroundColor: "rgb(170, 255, 238)"
        }
    },
    {
        id: storageService.makeId(),
        type: "NoteTxt",
        isPinned: false,
        info: {
            txt: "Its not a bug its a feature.."
        },
        style: {
            backgroundColor: "rgb(255, 204, 136)"
        }
    },
    {
        id: storageService.makeId(),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "https://media.giphy.com/media/ASzK5wWjMtc6A/giphy.gif",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "rgb(136, 221, 255)"
        }
    },
    {
        id: storageService.makeId(),
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "The only people up at 3AM are either in love, lonely drunk or PROGRAMMER"
        },
        style: {
            backgroundColor: "rgb(221, 221, 221)"
        }
    },
    
    
]

const inputTypes = [
    {
        type: 'text',
        placeholder: 'What’s on your mind...'
    },
    {
        type: 'url',
        placeholder: 'Enter image URL...'
    },
    {
        type: 'url',
        placeholder: 'Enter video URL...'
    },
    {
        type: 'text',
        placeholder: 'Enter comma separated list...'
    },
    {
        type: 'url',
        placeholder: 'Enter audio URL...'
    }
]

function getNoteById(id) {
    return storageService.get(NOTES_KEY, id)
}

