<template>
    <div id="header" class="header" :class="{home: home}">
        <NavBar />
        <h1 id="server-name" :class="{header_title: !home, server_name: home}" data-aos="fade-up"
            data-aos-duration="2000" data-aos-delay="500">
            SHELTER ZONE
        </h1>
        <h3 id="sub-title" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1200">2018 / 6 / 27 Proladon#7525
        </h3>
        <button id="enter" data-aos="flip-right" data-aos-duration="2000" data-aos-delay="2000"  @click="entry" :class="{hide: !home}">Entry</button>
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
                    }, 2500);
                } else {
                    setTimeout(() => {
                        AOS.refresh()
                    }, 1100);
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
        width: 100vw;
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

    .server_name {
        margin-top: 300px;
        font-size: 8rem;
        transition: 2s;
        animation: tohome 1s;
    }

    .header_title {
        margin-top: 80px;
        font-size: 5rem;
        animation: pagechange 1s;
    }


    #sub-title {
        color: white;
        font-size: 1em;
        letter-spacing: 5px;
    }

    #enter {
        color: #2c3e50;
        margin-top: 50px;
        background-color: transparent;
        border: transparent;
        font-size: 2rem;
        padding: 10px;
        outline: none;
    }

    #enter:hover {
        color: aquamarine;
        text-decoration: underline;
        text-underline-offset: 20px;
        transition: 1.5s;
    }

    .hide{
        color: transparent !important;
    }

    @keyframes pagechange {
        from {font-size: 8rem;}

        to {font-size: 5rem;}

        from {margin-top: 300px;}

        to {margin-top: 80px;}
    }

    @keyframes tohome {
        from {font-size: 5rem;}

        to {font-size: 8rem;}

        from {margin-top: 80px;}

        to {margin-top: 300px;}
    }

    @media screen and (max-width: 375px) {
        .server_name {
            margin-top: 200px;
            font-size: 5rem;
            transition: 2s;
            animation: tohome 1s;
        }

        .header_title {
            margin-top: 80px;
            font-size: 2.5rem;
            animation: pagechange 1s;
        }

        #sub-title {
            color: white;
            font-size: .5rem;
            letter-spacing: 5px;
            transition: 2s;
        }

        @keyframes pagechange {
            from {font-size: 5rem;}

            to {font-size: 2.5rem;}

            from {margin-top: 200px;}

            to {margin-top: 80px;}
        }

        @keyframes tohome {
            from {font-size: 2.5rem;}

            to {font-size: 5rem;}

            from {margin-top: 80px;}

            to {margin-top: 200px;}
        }
    }
</style>