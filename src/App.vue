<template>
    <div id="app">
        <Home v-if="ishome" v-on:entry="closehome" />
        <Pages 
            v-if="!ishome"
            :lang="lang" 
            @switchlang="changlang" 
            @gohome="homing"
            />
    </div>
</template>

<script>
    import Home from './views/Home.vue'
    import Pages from './views/Pages.vue'
    export default {
        name: 'App',
        components: {
            Home,
            Pages,
        },
        data() {
            return {
                ishome: true,
                show: "Menu",
                lang: "EN",
            }
        },
        methods: {
            closehome() {
                this.ishome = false
            },
            changlang(lang) {
                this.lang = lang
            },
            homing(){
                this.ishome = true
            }
        }
    }
</script>

<style lang="scss">
@font-face {
    font-family: DisposableDroid BB;
    src: url("./common/font/DisposableDroidBB.ttf");
}
@font-face {
    font-family: AurakaPixel;
    src: url("./common/font/AurakaPixel.ttf");
}
    * {
        margin: 0;
        padding: 0;
        font-family: DisposableDroid BB, AurakaPixel;
    }

    html,
    body,
    #app {
        width: 100%;
        height: 100%;
        background-color: rgb(32, 32, 32);
    }

    .page-wrapper{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 30px;
    }
</style>