import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'


export const mailServices = {
    createMail,
    query,
    getMailById,
    updateMail,
    deleteMail,
    filterByFavorites,
    searchMail,
    filterBySented,
    getReadenMails
}

const MAIL_KEY = 'mailsDB'
// const SENT_MAIL_KEY = 'sentMails'

const gMails = [
    {
        mailAdress: 'Puki@bla.bla',
        id: utilService.makeId(),
        from: 'Puki',
        subject: 'Wassap?',
        content: 'Pick up!',
        sentAt: Date.now(),
        isClicked: false,
        isRead: false,
        isFavorite: false
    },
    {
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
        sentAt: Date.now(),
        isClicked: false,
        isRead: false,
        isFavorite: false
    },
    {
        mailAdress: 'Dor@bla.bla',
        id: utilService.makeId(),
        from: 'Dor',
        subject: 'hi?',
        content: 'how are you?',
        sentAt: Date.now(),
        isClicked: false,
        isRead: false,
        isFavorite: false
    },
    {
        mailAdress: 'Yonatan@bla.bla',
        id: utilService.makeId(),
        from: 'Yonatan',
        subject: 'how are you?',
        content: 'hi!',
        sentAt: Date.now(),
        isClicked: false,
        isRead: false,
        isFavorite: false
    }]

function createMail(mail) {
    const newMail =
    {
        mailAdress: mail.mailAdress,
        id: utilService.makeId(),
        from: mail.from,
        subject: mail.subject,
        content: mail.content,
        sentAt: Date.now(),
        isClicked: false,
        isRead: false,
        isFavorite: false,
        isSented: true
    }
    return storageService.post(MAIL_KEY, newMail)
        .then(() => query())
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

function filterBySented() {
    return query()
        .then(mails => mails.filter(mail => mail.isSented))
}

function searchMail(searchStr, searchBy) {
    const searchType = searchBy.toLowerCase()
    const searchStrLC = searchStr.toLowerCase()
    if (!searchType) return
    if (searchType !== 'all') {
        return query()
            .then(mails => mails.filter(mail => {
                return mail[searchType].toLowerCase().includes(searchStr)
            }))
    } else return query()
        .then(mails => {
            return mails.filter(obj => {
                return Object.values(obj).some(val => {
                    if (typeof val === 'string') {
                        return val.toLocaleLowerCase().includes(searchStrLC)// console.log('mail:', mail)
                    }
                })
            })
        })
}

function getReadenMails() {
    var mailsToCalc = {
        mailsLength: query()
            .then(mails => mails.length),
        readenMails: query()
            .then(mails => mails.filter(mail => mail.isRead).length)
    }
    return mailsToCalc
}