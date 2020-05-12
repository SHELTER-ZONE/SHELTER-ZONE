<template>
    <div id="app">
        <Header />
        <transition name="fade" >
            <router-view id="router-view" v-if="$store.state.ishome==false"/>
        </transition>
        <GoTop />
        <Footer id="footer"/>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import GoTop from '@/components/GoTop.vue'
    import Footer from '@/components/Footer.vue'
    export default {
        components: {
            Header,
            GoTop,
            Footer,
        },
    }
</script>

<style lang="scss">
    //  CSS reset
    @import url(assets/css/reset.css);
    @import url(assets/css/article_card.css);

    body {
        overflow-x: hidden;
        background-color: rgb(36, 48, 54);
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    @media screen and (max-width: 300px){
        #app{
            width: 100vw;
            height: 100vh;
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    #router-view{
        margin-top: 100px;
    }

    #footer{
        clear: both;
    }
</style>