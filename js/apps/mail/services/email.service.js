import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'


export const mailServices = {
    createMail,
    query,
    getMailById,
    updateMail,
    // updateSentedMail,
    deleteMail,
    // updateMails,
    filterByFavorites,
    searchMail,
    querySented,
    addSentedMail
}

const MAIL_KEY = 'mailsDB'
const SENT_MAIL_KEY = 'sentMails'

const gSentMails = []
const gMails = [
    {
        isClicked: false,
        mailAdress: 'Puki@bla.bla',
        id: utilService.makeId(),
        from: 'Puki',
        subject: 'Wassap?',
        content: 'Pick up!',
        isRead: false,
        sentAt: Date.now(),
        isFavorite: false
    },
    {
        isClicked: false,
        mailAdress: 'Muki@bla.bla',
        id: utilService.makeId(),
        from: 'Muki',
        subject: 'Wassap Man?',
        content: `yo yo!
            wdeefewjnwkefnjekvnewv
            sacsjckjknwevewv
            sjkhvewuihwvuiewv4
            wevjjkev
                                
                        jkhhve
                            schjcs`,
        isRead: false,
        sentAt: Date.now(),
        isFavorite: false
    },
    {
        isClicked: false,
        mailAdress: 'Dor@bla.bla',
        id: utilService.makeId(),
        from: 'Dor',
        subject: 'hi?',
        content: 'how are you?',
        isRead: false,
        sentAt: Date.now(),
        isFavorite: false
    },
    {
        isClicked: false,
        mailAdress: 'Yonatan@bla.bla',
        id: utilService.makeId(),
        from: 'Yonatan',
        subject: 'how are you?',
        content: 'hi!',
        isRead: false,
        sentAt: Date.now(),
        isFavorite: false
    }]

function createMail(mail) {
    const newMail =
    {
        isClicked: false,
        mailAdress: mail.mailAdress,
        id: utilService.makeId(),
        from: mail.from,
        subject: mail.subject,
        content: mail.content,
        isRead: false,
        sentAt: Date.now(),
        isFavorite: false
    }
    storageService.post(MAIL_KEY, newMail)
    gSentMails.push(newMail)
    querySented()
}

function querySented() {
    return storageService.query(SENT_MAIL_KEY)
        .then((mails) => {
            if (!mails.length) {
                utilService.saveToStorage(SENT_MAIL_KEY, gSentMails)
            }
            return mails
        });
}

function query() {
    return storageService.query(MAIL_KEY)
        .then((mails) => {
            if (!mails.length) {
                utilService.saveToStorage(MAIL_KEY, gMails)
            }
            return mails
        });
}

function getMailById(mailId) {
    return storageService.get(MAIL_KEY, mailId)
}

function updateMail(mail) {
    storageService.put(MAIL_KEY, mail)
}

function deleteMail(mail) {
    return storageService.remove(MAIL_KEY, mail.id)
        .then(() => query())
}

function filterByFavorites() {
    return query()
        .then(mails => mails.filter(mail => mail.isFavorite))
}

function searchMail(searchStr, searchBy) {
    const searchType = searchBy.toLowerCase()
    if (!searchType) return
    if (searchType === 'all') {
        return query()
            .then(mails => {
                return mails.filter(mail => {
                    Object.values(mail).some(val => {
                        String(val).toLowerCase().includes(searchStr)
                        // console.log('typeof val:', typeof val)
                    })
                })
            })
    }
    else return query()
        .then(mails => mails.filter(mail => {
            return mail[searchType].toLowerCase().includes(searchStr)
        }))
}

function addSentedMail(mail){
    storageService.post(SENT_MAIL_KEY, mail)
}