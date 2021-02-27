
export default {
    props: ['isMenuOpen'],
    template: `
        <section v-if="isMenuOpen" >
            <div class="menu-screen" @click="closeMenu"></div>
            <nav class="app-menu flex">
            <router-link @click.native="closeMenu" to="/notes"><i class="fas fa-sticky-note"></i></router-link>
            <router-link @click.native="closeMenuMail" to="/mail"><i class="fas fa-envelope"></i></router-link>
            <router-link @click.native="closeMenu" to="/"><i class="fas fa-home"></i></router-link>
            </nav>
        </section>
    `,
    methods: {
        closeMenu() {
            this.$emit('close');
        },
        closeMenuMail() {
            this.$emit('close');
        }
        
    },
}