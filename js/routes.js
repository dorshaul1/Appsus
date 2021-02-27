
import appsusHome from './pages/appsus-home-page.cmp.js'
import notesApp from './apps/notes/pages/notes-app.cmp.js'
import mailPage from './apps/mail/pages/email-app.cmp.js'
import mailDetails from './apps/mail/pages/email-details.cmp.js'


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
    }
]

export const myRouter = new VueRouter({ routes })