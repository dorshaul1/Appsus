export default {
    props: ['mailsRead'],
    template: `
    <section class="email-status flex center align-items">
        <h1>{{mailsRead}}</h1>
    </section>
    `,
    // computed:{
    //     showReadenMails(){
    //         console.log(this.mailsRead)
    //     }
    // }
}