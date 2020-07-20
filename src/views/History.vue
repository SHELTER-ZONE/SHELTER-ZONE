<template>
    <div class="history">
        <div class="bg"></div>
        <p>🚧 Sorry, This page is not done yet!</p>

    </div>
</template>

<script>
    export default {
        name: "History",
        props: {
            data: Object
        }
    }
</script>

<style scoped lang="scss">
    * {
        font-family: DisposableDroid BB;
    }
    .history {
        width: 100%;
        height: 100%;
    }

    .bg {
        width: 100%;
        height: 50%;
        background-image: url("../assets/img/plant400.gif");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    p {
        color: white;
        font-size: 50px;
    }

    // ============== //
    //             Desktop             //
    //============== //
    @media screen and (min-width: 1024px) {
        .bg {
            margin: 0 auto;
            width: 70%;
            height: 80%;
            background-image: url("../assets/img/plant400.gif");
            background-position: center;
            background-size: cover;
        }
    }
</style>