
import { storageService } from '../../../services/async-storage-service.js';

const NOTES_KEY = 'notes';

export const noteService = {
    query,
    getInputTypes,
    saveNote
}

function saveNote(typeIdx, note) {
    let newNote = {
        isPinned: false,
        info: {}
    }

    switch (typeIdx) {
        case 0:
            newNote.type = 'NoteTxt'
            newNote.info.txt = note;
            break;
        case 1: newNote
            newNote.type = 'NoteImg'
            newNote.info.url = note;
            break;
        case 2:
            newNote.type = 'NoteVideo'
            newNote.info.url = note;
            break;
        case 3:
            newNote.type = 'NoteTodos'
            newNote.info.todos = note.split(',').map(todo => {
                return { txt: todo, doneAt: null };
            });
            break;
    }
    return storageService.post(NOTES_KEY, newNote);
}

function query() {
    return storageService.query(NOTES_KEY)
        .then(notes => {
            if (!notes.length) return storageService.postMany(NOTES_KEY, notesDB);
            else return notes;
        });
}


function getInputTypes() {
    return Promise.resolve(inputTypes);
}

const notesDB = [
    {
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteTodos",
        info: {
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTodos",
        info: {
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTodos",
        info: {
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
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

