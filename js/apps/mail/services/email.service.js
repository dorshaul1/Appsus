import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'


export const mailServices = {
    createMail,
    query,
    getMailById
}

const MAIL_KEY = 'mailsDB'

const gMails = [
    {
        id: utilService.makeId(),
        from: 'Puki',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: utilService.makeId(),
        from: 'Puki',
        subject: 'Wassap Man?',
        body: 'yo yo!',
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: utilService.makeId(),
        from: 'Dor',
        subject: 'hi?',
        body: 'how are you?',
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: utilService.makeId(),
        from: 'Yonatan',
        subject: 'how are you?',
        body: 'hi!',
        isRead: false,
        sentAt: Date.now()
    }]

_saveMailsToStorage()

function createMail() {
    const mail =
    {
        subject,
        body,
        isRead: false,
        sentAt: Date.now()
    }
    storageService.put(MAIL_KEY, mail)
}

function query() {
    return storageService.query(MAIL_KEY)
}

function getMailById(id){
    return storageService.get(id)
}

function _saveMailsToStorage() {
    utilService.saveToStorage(MAIL_KEY, gMails)
}