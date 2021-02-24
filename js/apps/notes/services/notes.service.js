
import { storageService } from '../../../services/async-storage-service.js';

const NOTES_KEY = 'notes';

export const noteService = {
    query,
    getInputTypes,
    saveNote,
    removeNote,
    updateNote
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
        case 'NoteTodos':
            note.info.todos = newTxt.split(',').map(todo => {
                return { txt: todo, doneAt: null };
            });
            break;
        }
    return Promise.resolve(note);
}



function saveNote(note) {
    let newNote = {
        isPinned: false,
        info: {}
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
    {   id: storageService.makeId(),
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {   id: storageService.makeId(),
        type: "NoteTodos",
        info: {
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {   id: storageService.makeId(),
        type: "NoteImg",
        info: {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {   id: storageService.makeId(),    
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {   id: storageService.makeId(),
        type: "NoteImg",
        info: {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {   id: storageService.makeId(),
        type: "NoteTodos",
        info: {
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {   id: storageService.makeId(),
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {   id: storageService.makeId(),
        type: "NoteImg",
        info: {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {   id: storageService.makeId(),
        type: "NoteImg",
        info: {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {   id: storageService.makeId(),
        type: "NoteTodos",
        info: {
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {   id: storageService.makeId(),
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {   id: storageService.makeId(),
        type: "NoteVideo",
        info: {
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
    }
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
    }
]

