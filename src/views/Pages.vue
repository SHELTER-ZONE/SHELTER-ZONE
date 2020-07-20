<template>
    <div class="pages">

        <Navigator v-if="isnav" :data="data" @changeto="changeto" />

        <div class="components-wrapper" v-if="!isnav">
            <component v-bind:is='show' :data="data"></component>
        </div>

        <div class="statebar-wrapper">
            <div class="state-control">
                <p id="backbtn" class="back" v-if="!isnav" @click="backnav">
                    <img src="../assets/img/Left.png" alt="">
                </p>
                <p id="homebtn" class="back" v-if="isnav" @click="gohome">
                    <img src="../assets/img/home.png" alt="">
                </p>
                <p>{{show}}</p>
                <p>
                    <span class="lang" :class="{highlight:lang==='EN'}" @click="switchlang('EN')">EN</span> / <span
                        class="lang" :class="{highlight:lang==='CH'}" @click="switchlang('CH')">CH</span>
                </p>
                <p id="gotopbtn" @click="gotop">
                    ▲
                </p>
            </div>
        </div>

        <div class="tooltip-wrapper">
            <span id="back-tip">Back</span>
            <span id="stage-tip">Stage</span>
            <span id="lang-tip">Language</span>
            <span id="gotop-tip">GoTop</span>
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
        components: {
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
        data() {
            return {
                data: EN,
                show: "Menu",
                isnav: true,
            }
        },
        methods: {
            switchlang(lang) {
                this.$emit("switchlang", lang)
                if (lang === 'EN') {
                    this.data = EN
                } else if (lang === 'CH') {
                    this.data = CH
                }
            },
            changeto(page) {
                this.show = page
                this.isnav = false
            },
            gohome() {
                this.$emit("gohome")
            },
            backnav() {
                this.isnav = true
                this.show = "Menu"
            },
            gotop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        },
        mounted() {
            if (this.lang === 'EN') {
                this.data = EN
            } else if (this.lang === 'CH') {
                this.data = CH
            }
            anime({
                targets: '.statebar-wrapper',
                width: '100%',
                easing: 'easeInOutQuad',
            })
            anime({
                targets: '.state-control',
                keyframes: [{
                        translateY: 50,
                        opacity: 0
                    },
                    {
                        translateY: 0,
                        opacity: 100
                    },
                ],
                duration: 1500,
                easing: 'easeInOutQuad'
            })
            var tip = anime({
                targets: '#back-tip, #stage-tip, #lang-tip, #gotop-tip',
                opacity: [0, 100],
                translateY: [400, 0],
                delay: anime.stagger(100, {
                    start: 1200
                }),
            })

            tip.finished.then(reverse);

            function reverse(){
                anime({
                    targets: '#back-tip, #stage-tip, #lang-tip, #gotop-tip',
                    opacity: [100, 0],
                    translateY: [0, 200],
                    easing: 'easeInOutQuad',
                    delay: anime.stagger(100, {start: 2000})
                })
            }
    }}
</script>

<style scoped lang="scss">
    @mixin absposition {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    .highlight {
        color: white;
        // animation: breath ease-in-out infinite 5s;
    }

    @keyframes breath {
        0% {
            color: white
        }

        50% {
            color: rgb(32, 32, 32);
        }

        100% {
            color: white
        }
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }

        to {
            opacity: 100;
        }
    }

    @keyframes fadeup {
        from {
            opacity: 0;
            transform: translate(0px, 50px)
        }

        to {
            opacity: 100;
            transform: translate(0px, 0px)
        }
    }

    .pages {
        width: 100%;
        height: 100%;
        position: relative;
        animation: fadein ease-in-out 1s;
    }

    /*-----------------*/
    /*components-wrapper*/
    /*-----------------*/
    .components-wrapper {
        width: 100%;
        height: 96%;
    }

    // /*-----------------*/
    // /*   statebar-wrapper   */
    // /*-----------------*/
    .statebar-wrapper {
        width: 0;
        height: 5%;
        position: fixed;
        bottom: 0;
        background: mediumturquoise;
    }

    // /*-----------------*/
    // /*        state-control        */
    // /*-----------------*/
    .state-control {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        opacity: 0;

        span {
            cursor: pointer;
        }
    }

    #homebtn,
    #backbtn,
    #gotopbtn {
        width: 50px;
        cursor: pointer;
    }

    .tooltip-wrapper {
        width: 100%;
        position: absolute;
        bottom: 5.5%;
        display: flex;
        justify-content: space-around;
    }

    #back-tip,
    #stage-tip,
    #lang-tip,
    #gotop-tip {
        background-color: hotpink;
        border-radius: 5px;
        text-align: center;
        width: 100px;
        height: 20px;
    }

    .lang,
    #gotopbtn{
        transition: ease-in-out .25s;
    }
    .lang:hover,
    #gotopbtn:hover{
        font-size: 30px;
        transition: ease-in-out .25s;
    }

    .back{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 30%;
            transition: ease-in-out .25s;
        }
    }

    .back:hover{
        img{
            width: 50%;
            transition: ease-in-out .25s;
        }
    }
    

</style>