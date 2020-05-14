<template>
    <div id="header" class="header" :class="{home: home}">
        <NavBar v-if="!home"/>
        <div class="title-wrapper">
            <div class="text-container">
                <p id="server-name" :class="{header_title: !home, server_name: home}" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                    SHELTER ZONE
                </p>
                
                <p class="sub-title" data-aos="fade" data-aos-duration="2000" data-aos-delay="1500">
                    2018 / 06 / 27 Proladon #7525
                </p>
                <button id="enter" data-aos="flip-right" data-aos-duration="2000" data-aos-delay="3000" @click="entry"
                    :class="{hide: !home}">
                    Entry
                </button>
            </div>
        </div>

    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import AOS from 'aos'
    export default {
        name: "Header",
        components: {
            NavBar,
        },
        data() {
            return {
                home: this.$store.state.ishome
            }
        },
        methods: {
            repage(value) {
                this.$store.commit('page', value)
                if (value == true) {
                    setTimeout(() => {
                        AOS.refreshHard()
                    }, 1000);
                } else {
                    setTimeout(() => {
                        AOS.refreshHard()
                    }, 1000);
                }
            },

            entry() {
                this.$router.push({
                    path: 'about'
                })
                this.repage(false)
            }
        },
        computed: {
            listenspage() {
                return this.$store.state.ishome
            }
        },
        watch: {
            listenspage: function(value) {
                this.home = value
            }
        }
    }
</script>

<style scoped>
    .header {
        height: 50vh;
        background-image: url(../assets/test.jpeg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        transition: 1s;
    }

    .home {
        height: 90vh;
    }

    .title-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .text-container {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 0;
        padding: 0;
        transform: translateX(-50%) translateY(-50%);
    }

    .server_name {
        font-size: 8.5vw;
        text-align: center;
        transition: 1s;
        animation: tohome 2s;
    }

    .sub-title {
        color: white;
        font-size: 1.2vw;
        text-align: center;
        letter-spacing: 5px;
    }

    .header_title {
        font-size: 5.5vw;
        transition: 1s;
        animation: pagechange 2s;
    }

    #enter {
        color: #2c3e50;
        background-color: transparent;
        border: transparent;
        font-size: 3vw;
        margin-top: 25px;
        padding: 10px;
        outline: none;
    }

    #enter:hover {
        color: aquamarine;
        text-decoration: underline;
        text-underline-offset: 20px;
        transition: 1.5s;
    }

    .hide {
        color: transparent !important;
    }

    @keyframes pagechange {
        from {font-size: 8.5vw;}
        to {font-size: 5.5vw;}
    }

    @keyframes tohome {
        from {font-size: 5.5vw;}
        to {font-size: 8.5vw;}

    }

    @media screen and (max-width: 480px) and (max-width: 768px) and (max-width: 1024px){
         .server_name{
             font-size: 15vw;
            text-align: center;
            transition: 1s;
            animation: tohome 2s;
         }

         #enter {
            color: #2c3e50;
            background-color: transparent;
            border: transparent;
            font-size: 10vw;
            margin-top: 25px;
            padding: 10px;
            outline: none;
        }
    }

</style>