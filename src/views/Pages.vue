<template>
    <div class="pages">

            <Navigator v-if="isnav" :data="data" @changeto="changeto"/>
            
            <div class="components-wrapper" v-if="!isnav">
                <component v-bind:is='show' :data="data"></component>
            </div>

        <div class="statebar-wrapper">
            <div class="state-control">
                    <p id="backbtn" v-if="!isnav" @click="backnav">←</p>
                    <p id="homebtn" v-if="isnav" @click="gohome">■</p>
                    <p>{{show}}</p>
                    <p>
                        <span :class="{highlight:lang==='EN'}" @click="switchlang('EN')">EN</span> / <span
                            :class="{highlight:lang==='CH'}" @click="switchlang('CH')">CH</span>
                    </p>
                    <p id="gotopbtn" @click="gotop">▲</p>
                </div>
        </div>

    </div>
</template>

<script>
    import anime from 'animejs'
    // Json
    import EN from '../json/EN.json'
    import CH from '../json/CH.json'
    // Component
    import Navigator from '@/components/Navigator.vue'
    // Views
    import About from '@/views/About.vue'
    import Status from '@/views/Status.vue'
    import History from '@/views/History.vue'
    import Documents from '@/views/Documents.vue'
    import Join from '@/views/Join.vue'
    export default {
        name: "Pages",
        components:{
            Navigator,
            About,
            Status,
            History,
            Join,
            Documents,
        },
        props: {
            lang: String,
        },
        data(){
            return{
                data: EN,
                show: "Menu",
                isnav: true,
            }
        },
        methods: {
            switchlang(lang) {
                this.$emit("switchlang", lang)
                if (lang === 'EN'){this.data = EN}
                else if (lang === 'CH'){this.data = CH}
            },
            
            changeto(page){
                this.show = page
                this.isnav = false
            },
            
            gohome(){
                this.$emit("gohome")
            },

            backnav(){
                this.isnav = true
                this.show = "Menu"
            },
            gotop(){
                window.scrollTo({
                    top:0,
                    behavior: 'smooth'
                })
            }
        },
        mounted(){
            if(this.lang==='EN'){this.data=EN}
            else if(this.lang==='CH'){this.data=CH}
            anime({
                targets: '.statebar-wrapper',
                width: '100%',
                easing: 'easeInOutQuad',
            })
            
            anime({
                targets: '.state-control',
                keyframes: [
                    {translateY: 50, opacity:0},
                    {translateY: 0,opacity:100},
                ],
                duration: 1500,
                easing: 'easeInOutQuad'
            })

        }
    }
</script>

<style scoped lang="scss">
    @mixin absposition{
        position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin:  0 auto;
    }

    .highlight {
        color: white;
        // animation: breath ease-in-out infinite 5s;
    }
    @keyframes breath{
        0%{color:white}
        50%{color: rgb(32, 32, 32);}
        100%{color:white}
    }
    @keyframes fadein{
        from{opacity: 0;}
        to{opacity: 100;}
    }
    @keyframes fadeup{
        from{
            opacity: 0;
            transform:translate(0px, 50px)
        }
        to{
            opacity: 100;
            transform:translate(0px, 0px)
        }
    }

    .pages{
        width: 100%;
        height: 100%;
        position: relative;
        animation: fadein ease-in-out 1s;
    }

    /*-----------------*/
    /*components-wrapper*/
    /*-----------------*/
    .components-wrapper{
        width: 100%;
        height: 96%;
    }
    // /*-----------------*/
    // /*   statebar-wrapper   */
    // /*-----------------*/
    .statebar-wrapper{
        width: 0;
        height: 5%;
        position: fixed;
        bottom: 0;
        background: mediumturquoise;
    }
    // /*-----------------*/
    // /*        state-control        */
    // /*-----------------*/
    .state-control{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        opacity: 0;
        span{
            cursor: pointer;
        }
    }

    #homebtn, #backbtn, #gotopbtn{
        width: 50px;
        cursor: pointer;
    }
</style>