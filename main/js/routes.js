
import appsusHome from './apps/appsus-pages/appsus-home-page.cmp.js'
// import bookDetails from './pages/book-details.cmp.js'
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
    // {
    //     path: '/book',
    //     component: bookApp,
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