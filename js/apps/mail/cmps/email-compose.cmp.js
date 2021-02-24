export default {
    template: `
    <button @click="compose" class="compose-btn">Compose +</button>
    `,

    methods: {
        compose(){
            this.$emit('compose')
        }
    }
}