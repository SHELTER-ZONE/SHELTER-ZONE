<template>
    <div class="join" data-aos="fade-up">

        <p id="make-sure">
            你已經認識 SHELTER ZONE 並願意加入了嗎?
        </p>

        <a href="https://discord.gg/R75DXHH" target="_blank">
            <img src="../assets/shelter/123.gif" alt="">
        </a>

        <div class="wrapper">
            <a href="https://discord.gg/R75DXHH" target="_blank">
                <p id="join">JOIN</p>
            </a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Join",
    }
</script>

<style scoped>
    .wrapper {
        margin: 0 auto;
        width: 30%;
    }

    a {
        margin: 0 auto;
        text-decoration: none;
    }

    p {
        margin: 0 auto;
        margin-top: 30px;
    }

    img {
        border-radius: 10px;
        margin: 0 auto;
        width: 30%;
    }
    #make-sure{
        color: rgb(182, 182, 182);
        font-size: 3vw;
        margin-bottom: 50px;
    }

    #join {
        text-align: center;
        background: mediumturquoise;
        letter-spacing: 2vw;
        border-radius: 50px;
        color: rgb(32, 32, 32);
        font-size: 3vw;
        padding: 20px;
        transition: 1s;
    }

    #join:hover {
        box-shadow:10px 10px 10px 1px rgb(32, 32, 32);
        background: mediumspringgreen;
        transition: .5s;
    }
</style>