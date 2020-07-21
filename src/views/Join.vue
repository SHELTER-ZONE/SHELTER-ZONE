<template>
    <div class="join">
        <div class="item" v-for="link in data.join" :key="link.name">
            <img :src="link.img" alt="">
            <strong>
                <p class="title">{{link.title}}</p>
            </strong>
            <p class="content">{{link.content}}</p>
            <p v-if="link.name === 'Github'">{{data.join.github.join}}</p>
            <button>
                <a :href="link.link" target="_blank"><span>Join</span></a>
            </button>
        </div>

    </div>
</template>

<script>
    import anime from 'animejs'
    export default {
        name: "Join",
        props: {
            data: Object
        },
        mounted() {
            anime({
                targets: '.join',
                opacity: "100%",
                easing: 'easeInOutQuad',
            });
            anime({
                targets: '.item',
                opacity:[0, 100],
                translateX: [-500, 0],
                delay: anime.stagger(100, {
                    start: 100,
                    easing: 'easeInOutQuad'
                })
            });
        }
    }
</script>

<style scoped lang="scss">
    * {
        font-family: DisposableDroid BB, AurakaPixel;
    }
    p {
        text-align: justify;
        color: rgb(191, 191, 191);
    }

    .join {
        opacity: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 30px;
    }

    // ============== //
    //              Mobile              //
    //============== //
    .item {
        overflow: hidden;
        margin-bottom: 50px;

        img {
            width: 100%;
            margin-bottom: 10px;
        }

        p {
            font-size: 18px;
            text-align: left;
        }

        a {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            margin: 0 auto;
            color: rgb(32, 32, 32);
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        button {
            position: relative;
            width: 100px;
            height: 30px;
            background-color: mediumspringgreen;
            border-radius: 5px;
            border: none;
            margin-top: 20px;
            outline: none;

            span {
                font-size: 2em;
            }
        }
    }

    // ============== //
    //             Desktop             //
    //============== //
    @media screen and (min-width: 1024px) {
        .item {
            width: 40%;
            margin: 0 auto;
            overflow: hidden;
            margin-bottom: 50px;

            img {
                width: 100%;
                margin-bottom: 10px;
            }

            p {
                font-size: 30px;
            }

            a {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                margin: 0 auto;
                color: rgb(32, 32, 32);
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            button {
                position: relative;
                width: 150px;
                height: 40px;
                background-color: mediumspringgreen;
                border-radius: 5px;
                border: none;
                margin-top: 20px;
                outline: none;

                span {
                    font-size: 2em;
                }
            }
        }
    }
</style>