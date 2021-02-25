export default {
    template: `
    <button @click="compose" class="compose-btn">Compose <i class="fas fa-plus"></i></button>
    `,

    methods: {
        compose(){
            this.$emit('compose')
        }
    }
}