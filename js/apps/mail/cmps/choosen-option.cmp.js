
export default {
    props: ['chooseName'],
    template: `
    <section class="choosen-option flex column center" >
        {{chooseName}}
    </section>
    `,
    computed:{
        // choose(){
        //     this.$emit('choose')
        // }
    }
}