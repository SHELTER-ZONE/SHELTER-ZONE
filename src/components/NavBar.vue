<template>
    <div id="nav" data-aos="fade-down" data-aos-duration="1000" :class="{homenav: $store.state.ishome}">
        <router-link to="/" @click.native="repage(true)">Home</router-link> |
        <router-link to="/about" @click.native="repage(false)">About</router-link> |
        <router-link to="/docs" @click.native="repage(false)">Docs</router-link> |
        <router-link to="/join" @click.native="repage(false)">Join</router-link>
    </div>
</template>

<script>
    import AOS from 'aos'
    export default {
        name: "NavBar",
        methods:{
            repage(value){
                this.$store.commit('page', value)
                if (value == true){
                    setTimeout(() => {
                        AOS.refreshHard()
                    }, 2500);
                }else{
                    setTimeout(() => {
                        AOS.refresh()
                    }, 1100);
                }
            }
        }
    }
    
</script>

<style lang="scss" scoped>
    #nav {
        // visibility: hidden;
        font-size: 20pt;
        padding: 30px;
        background: transparent;

        a {
            font-weight: bold;
            color: #2c3e50;
            transition: .3s;

            &.router-link-exact-active {
                color: #42b983;
            }
        }

        a:hover {
            font-size: 30pt;
            transition: 0.5s;
        }
    }

    .homenav{
        visibility: collapse;
    }

</style>