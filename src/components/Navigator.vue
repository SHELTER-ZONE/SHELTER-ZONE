<template>
    <div class="navigator">
        <div class="bg">
            <p>Welcome to SHELTER ZONE !</p>
        </div>
        <div class="navbtn-wrapper">
            <button v-for="btn in data.navbtn" :key="btn" @click="changepage(btn)">
                {{btn}}
            </button>
        </div>
        <Footer />
    </div>
</template>

<script>
    import anime from 'animejs'
    import Footer from '@/components/Footer.vue'
    export default {
        name: "Navigator",
        components:{
            Footer
        },
        props: {
            data: Object,
        },
        methods: {
            changepage(page) {
                if (page === '關於') {
                    page = 'About'
                } else if (page === '現況') {
                    page = 'Status'
                } else if (page === '歷史') {
                    page = 'History'
                } else if (page === '文件') {
                    page = 'Documents'
                } else if (page === '加入') {
                    page = 'Join'
                }
                this.$emit("changeto", page)
            }
        },
        mounted() {
            anime({
                targets: 'button',
                translateX: [-500, 0],
                delay: anime.stagger(100, {
                    start: 100,
                    easing: 'easeInQuad'
                })
            });
        }
    }
</script>

<style scoped lang="scss">
    .navigator {
        width: 100%;
        height: 100%;
    }
    
    // ============== //
    //              Mobile              //
    //============== //
    .bg {
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("../assets/img/after.gif");
        background-position: center;
        background-size: cover;
        p{
            font-size: 50px;
            color: white;
            padding: 20px;
            text-shadow: 5px 5px 10px rgb(32, 32, 32);
        }
    }

    .navbtn-wrapper {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    button {
        font-size: 20px;
        width: 100px;
        padding: 10px;
        margin: 0 auto;
        color: white;
        border: none;
        outline: none;
        background-color: transparent;
    }

    // ============== //
    //             Desktop             //
    //============== //
    @media screen and (min-width: 1024px) {
        .bg {
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("../assets/img/after.gif");
        background-position: center;
        background-size: cover;
        p{
            font-size: 100px;
            color: white;
            text-shadow: 5px 5px 10px rgb(32, 32, 32);
        }
    }

        .navbtn-wrapper {
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        button {
            font-size: 50px;
            padding: 10px;
            width: 20em;
            margin: 0 auto;
            color: white;
            border: none;
            outline: none;
            background-color: transparent;
        }

        button:hover {
            color: mediumturquoise;
        }
    }
</style>