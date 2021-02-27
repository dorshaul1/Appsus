export default {
    template: `
    <button @click="compose" class="compose-btn flex center align-items"><h1>Compose</h1> <i class="fas fa-plus"></i></button>
    `,

    methods: {
        compose(){
            this.$emit('compose')
        }
    }
}