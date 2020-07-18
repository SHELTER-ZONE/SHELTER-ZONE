<template>
    <div class="home">
        <div class="hpage-wrapper">

            <div class="bg-wrapper" :class="{fade:fade}"></div>

            <div class="title-wrapper">
                <p :class="{outSZ:fade}">SHELTER ZONE</p>
                <ParticleEffectButton id="entry-btn" :visible.sync="btnOps.visible" :animating.sync="btnOps.animating"
                    :options="btnOps" cls="btnentry">
                    Entry!
                </ParticleEffectButton>
            </div>

            <div class="footer-wrapper" :class="{fade:fade}">
                <p>Artworks by Mienar</p>
            </div>

        </div>
    </div>
</template>

<script>
    import ParticleEffectButton from "vue-particle-effect-buttons"
    export default {
        name: "Home",
        components: {
            ParticleEffectButton,
        },
        data() {
            return {
                fade:false,
                btnOps: {
                    type: "circle",
                    easing: "easeOutQuart",
                    size: 0.7,
                    direction: "bottom",
                    canvasPadding: 50,
                    particlesAmountCoefficient: 10,
                    oscillationCoefficient: 20,
                    color: function() {
                        return Math.random() < 0.5 ? "#000000" : "#ffffff";
                    },
                    onComplete: () => {
                        
                        this.$emit("entry")
                        // setTimeout(() => {
                        // }, 100);
                        console.log("complete");
                    },
                    onBegin: () => {
                        setTimeout(() => {
                            this.fade = true
                        }, 1300);
                        console.log("begin");
                    },
                    visible: true,
                    animating: false
                },
            }
        }
    }
</script>

<style lang="scss">
    @mixin maxparent() {
        width: 100%;
        height: 100%;
    }

    .home {
        background-color: rgb(32, 32, 32);
        @include maxparent()
    }

    p {
        margin: 0 auto;
        text-align: center;
        font-family: DisposableDroid BB;
    }

    // ============== //
    //              Mobile              //
    //============== //

    .hpage-wrapper {
        display: flex;
        flex-direction: column;
        @include maxparent()
    }

    /*-----------------*/
    /*          bg-wrapper        */
    /*-----------------*/
    .bg-wrapper {
        width: 100%;
        height: 75%;
        background-image: url("../assets/img/house.gif");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        animation: inhome 1.5s;
    }

    @keyframes inhome{
        from{opacity: 0;}
        to{opacity: 100;}
    }

    /*-----------------*/
    /*        title-wrapper       */
    /*-----------------*/
    .title-wrapper {
        width: 100%;
        height: 25%;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        position: relative;

        p {
            color: white;
            font-size: 40px;
            animation: inSZ 1.5s;
        }

    }

    @keyframes inSZ{
        from{
            opacity: 0;
            transform:translate(0px, 30px)
        }
        to{
            opacity: 100;
            transform:translate(0px, 0px)
        }
    }

    // Overwrite particle btn
    .btnentry {
        width: 120px !important;
        padding: 10px !important;
        background: rgb(0, 255, 191) !important;
        color: rgb(32, 32, 32) !important;
        font-family: DisposableDroid BB;
        text-align: center;
    }
    

    @keyframes inBtn{
        from{
            opacity: 0!important;
            width: 0px !important;
        }
        to{
            opacity: 100!important;
            width: 120px !important;
        }
    }


    /*-----------------*/
    /*      footer-wrapper     */
    /*-----------------*/
    .footer-wrapper {
        width: 100%;
        height: 5%;
        color: cadetblue;
        font-size: 12px;
    }

    // ============== //
    //             if-Class             //
    //============== //
    .fade{
        opacity: 0;
        transition: ease-in-out 1s;
    }

    .outSZ{
        animation: outSZ 1.3s !important;
    }
    @keyframes outSZ{
        from{
            opacity: 100;
            transform:translate(0px, 0px)
        }
        to{
            opacity: 0;
            transform:translate(0px, -30px)
        }
    }

</style>