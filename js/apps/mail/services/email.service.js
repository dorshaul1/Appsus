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
        mailAdress: 'bra.pitt@gmail.com',
        id: utilService.makeId(),
        from: 'brad Pitt',
        subject: 'Wassap?',
        content: `Hey! 
            I'm working on a new movie 
            and i'm so exited,
                        love brad`,
        sentAt: Date.now(),
        isClicked: false,
        isRead: false,
        isFavorite: false,
    },
    {
        mailAdress: 'b-yonce@gmail.com',
        id: utilService.makeId(),
        from: 'beyonce',
        subject: 'Yo yo!',
        content: `yo yo!
                how are you?
                I recording a new song on Monday
                Are you coming?
        
                    
                        beyonce`,
        sentAt: Date.now(),
        isClicked: false,
        isRead: true,
        isFavorite: false,
    },
    {
        mailAdress: 'Dor@gmail.com',
        id: utilService.makeId(),
        from: 'Dor Shaul',
        subject: 'hi?',
        content: `hi!
                you are a fullstack developer already?`,
        sentAt: Date.now(),
        isClicked: false,
        isRead: false,
        isFavorite: false,
    },
    {
        mailAdress: 'Dor@gmail.com',
        id: utilService.makeId(),
        from: 'Evan You',
        subject: 'important!',
        content: `Data is function that return an object!
                        remember that`,
        sentAt: Date.now(),
        isClicked: false,
        isRead: true,
        isFavorite: false,
    },
    {
        mailAdress: 'Ede.A@gmail.com',
        id: utilService.makeId(),
        from: 'Eden Aran',
        subject: 'are you OK?',
        content: `hi Dor and Yonatan!
                are you solved the problem you had?`,
        sentAt: Date.now(),
        isClicked: false,
        isRead: true,
        isFavorite: false,
    },
    {
        mailAdress: 'Yonatan@gmail.com',
        id: utilService.makeId(),
        from: 'Yonatan',
        subject: 'Appsus',
        content: `My friend and I developed an app called Appsus!
                    you must see that app`,
        sentAt: Date.now(),
        isClicked: false,
        isRead: false,
        isFavorite: false,
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
        isSented: true,
        note: mail.note
    }
    // console.log(newMail);
    return storageService.post(MAIL_KEY, newMail)
        .then(() => query())
}

function query() {
    if (!localStorage.getItem(MAIL_KEY)) {
        storageService.save(MAIL_KEY, gMails);
        return Promise.resolve(gMails);
    }
    return storageService.query(MAIL_KEY);
}
// function query() {
//     return storageService.query(MAIL_KEY)
//         .then((mails) => {
//             if (!mails.length) {
//                 utilService.saveToStorage(MAIL_KEY, gMails)
//             }
//             return mails
//         });
// }

function getMailById(mailId) {
    return storageService.get(MAIL_KEY, mailId)
}

function updateMail(mail) {
    return storageService.put(MAIL_KEY, mail)
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