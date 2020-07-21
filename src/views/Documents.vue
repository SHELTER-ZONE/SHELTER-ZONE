<template>
    <div class="docs">

        <div class="cate">Documents</div>

        <div class="doc-item" v-for="doc in data.docs" :key="doc.name">
            <a :href="doc.url" target="_blank">
                <strong>
                    <p class="name">{{doc.name}}</p>
                </strong>
                <p class="intro">{{doc.intro}}</p>
            </a>
        </div>

        <div class="cate">Applications</div>

        <div class="doc-item" v-for="app in data.applications" :key="app.name">
            <a :href="app.url" target="_blank">
                <strong>
                    <p class="name">{{app.name}}</p>
                </strong>
                <p class="intro">{{app.intro}}</p>
            </a>
        </div>

        <div class="cate">Projects</div>

        <div class="doc-item" v-for="proj in data.project" :key="proj.name">
            <a :href="proj.url" target="_blank">
                <strong>
                    <p class="name">{{proj.name}}</p>
                </strong>
                <p class="intro">{{proj.intro}}</p>
            </a>
        </div>

        <Footer />
    </div>
</template>

<script>
    import anime from 'animejs'
    import Footer from '@/components/Footer.vue'
    export default {
        name: "Documents",
        components: {
            Footer,
        },
        props: {
            data: Object
        },
        mounted() {
            anime({
                targets: '.docs',
                opacity: "100%",
                easing: 'easeInOutQuad',
            });
            anime({
                targets: '.doc-item',
                width: "100%",
                borderRadius: '5px',
                easing: 'easeInOutQuad',
                delay: anime.stagger(100, {
                    easing: 'easeInQuad'
                })
            });
            anime({
                targets: '.name, .intro',
                opacity: "100%",
                easing: 'easeInOutQuad',
                delay: anime.stagger(100, {
                    start: 1500,
                    easing: 'easeInQuad'
                })
            });
            setTimeout(() => {
                document.getElementsByClassName("doc-item").forEach(el => {
                    el.style.padding = "20px"
                });
            }, 2000);
        }
    }
</script>

<style scoped lang="scss">
* {
        font-family: DisposableDroid BB, AurakaPixel;
    }
    .docs {
        opacity: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 30px;
    }
    // ============== //
    //              Mobile              //
    //============== //
    p {
        color: rgb(255, 255, 255);
    }

    a {
        text-decoration: none;
    }

    .cate {
        font-size: 1.5rem;
        text-align: center;
        color: mediumturquoise;
        // background: white;
        margin-bottom: 1rem;
    }

    .doc-item {
        width: 0;
        background-color: rgb(87, 87, 87);
        margin-bottom: 30px;
        box-sizing: border-box;
        transition: ease-in-out 1s;
        
        // padding: 20px;

        .name,
        .intro {
            opacity: 0;
        }

        .name {
            text-shadow: 2px 2px 1px rgb(32, 32, 32);
            font-size: 1.5rem;
            margin-bottom: 20px;
        }
    }

    // ============== //
    //             Desktop             //
    //============== //
    @media screen and (min-width: 1025px) {
        .docs {
            opacity: 0;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding-left: 500px;
            padding-right: 500px;
        }
        .doc-item p{
            transition: ease-in-out .7s;
        }
        .doc-item:hover{
            p{
                color: mediumspringgreen;
                transform: scale(1.2);
                transition: ease-in-out .3s;
            }
        }
    }
</style>