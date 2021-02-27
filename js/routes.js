
import appsusHome from './pages/appsus-home-page.cmp.js'
import notesApp from './apps/notes/pages/notes-app.cmp.js'
import mailPage from './apps/mail/pages/email-app.cmp.js'
import mailDetails from './apps/mail/pages/email-details.cmp.js'
// import mailCompose from './apps/mail/cmps/mail-compose.cmp.js'
// import homePage from './pages/home-page.cmp.js'
// import aboutPage from './pages/about-page.cmp.js'
// import addBooks from './pages/add-books.cmp.js'
// import mySelf from './cmps/my-self.cmp.js'
// import vue from './cmps/vue.cmp.js'


const routes = [
    {
        path: '/',
        component: appsusHome,
    },
    {
        path: '/notes',
        component: notesApp,
    },
    {
        path: '/mail',
        component: mailPage,
    },
    {
        path: '/mail/details/:mailId',
        component: mailDetails,
    },
    {
        path: '/mail/:note',
        component: mailPage,
    },
    // {
    //     path: '/mail:notes?',
    //     component: mailPage,
    // },

    // {
    //     path: '/about',
    //     component: aboutPage,
    //     children: [
    //         {
    //             path: 'me',
    //             component: mySelf
    //         },
    //         {
    //             path: 'vue',
    //             component: vue
    //         },
    //     ]
    // },
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails,
    // },
    // {
    //     path: '/addBooks',
    //     component: addBooks,
    // },
]

export const myRouter = new VueRouter({ routes })