import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'


export const mailServices = {
    createMail,
    query,
    getMailById,
    updateMail
}

const MAIL_KEY = 'mailsDB'

const gMails = [
    {
        isClicked: false,
        mailAdress: 'Puki@bla.bla',
        id: utilService.makeId(),
        from: 'Puki',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: Date.now()
    },
    {
        isClicked: false,
        mailAdress: 'Muki@bla.bla',
        id: utilService.makeId(),
        from: 'Muki',
        subject: 'Wassap Man?',
        body: 'yo yo!',
        isRead: false,
        sentAt: Date.now()
    },
    {
        isClicked: false,
        mailAdress: 'Dor@bla.bla',
        id: utilService.makeId(),
        from: 'Dor',
        subject: 'hi?',
        body: 'how are you?',
        isRead: false,
        sentAt: Date.now()
    },
    {
    isClicked: false,        
        mailAdress: 'Yonatan@bla.bla',        
        id: utilService.makeId(),
        from: 'Yonatan',
        subject: 'how are you?',
        body: 'hi!',
        isRead: false,
        sentAt: Date.now()
    }]

// _saveMailsToStorage()

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
        .then((mails) => {
            if (!mails.length) {
                utilService.saveToStorage(MAIL_KEY, gMails)
                // books = booksList
            }
            // console.log('mails:', mails)
            return mails
        });
}

function getMailById(mailId) {
    return storageService.get(MAIL_KEY, mailId)
    // .then((mails) => {
    // })
}

<<<<<<< HEAD
function updateMail(mail){
    storageService.put(MAIL_KEY, mail)
}

// function getMailById(id){

//     .then(mail => console.log(mail))
// }
=======
>>>>>>> dfaa3e006492dd426626e7a6562f6a54d71dd051

// function _saveMailsToStorage() {
//     utilService.saveToStorage(MAIL_KEY, gMails)
// }