
export default {
    name:'choosenOption',
    props: ['chooseName'],
    template: `
    <section class="choosen-option flex column center" >
        {{chooseName}}
    </section>
    `,
}