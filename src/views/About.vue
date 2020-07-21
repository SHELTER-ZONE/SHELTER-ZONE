<template>
    <div class="about">
        <!-- <div class="bg"></div> -->
        <div class="card" v-for="data in data.about" :key="data.title">
            <p class="title">{{data.title}}</p>
            <p class="content">
                {{data.content}}
            </p>
            <img v-if="data.img !== ''" :src="data.img" alt="">
        </div>

        <Footer />
    </div>
</template>

<script>
    import anime from 'animejs'
    import Footer from '@/components/Footer.vue'
    export default {
        name: "About",
        components: {
            Footer,
        },
        props: {
            data: Object
        },
        mounted() {
            anime({
                targets: '.about',
                opacity: '100%',
                easing: 'easeInOutQuad',
            })
        },
    }
</script>

<style scoped lang="scss">
    * {
        font-family: DisposableDroid BB, AurakaPixel;
    }

    p {
        color: rgb(180, 180, 180);
        text-align: justify;
    }

    .about {
        opacity: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 30px;
    }

    .bg {
        width: 100%;
        height: 40%;
        background-image: url("../assets/img/foggy.jpeg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .card {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            color: white;
            margin-top: 20px;
        }

        .content {
            padding: 20px;
        }
    }

    // ============== //
    //              Mobile              //
    //============== //
    img {
        width: 70%;
    }

    // ============== //
    //             Desktop             //
    //============== //
    @media screen and (min-width: 769px) {
        img {
            width: 30%;
        }

        p {
            font-size: 20px;
        }

        .card {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .title {
                color: white;
            }

            .content {
                padding-left: 300px;
                padding-right: 300px;
            }
        }
    }
</style>