<template>
    <div class="footer">
        <div class="wrapper">
            <div class="power">
                <p>
                    Power by <span> Vue.js </span> | <span> AOS.js </span>
                </p>
            </div>
            <div class="build">
                <p>
                    Build on 2020
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
    }
</script>

<style lang="scss" scoped>
    .footer {
        margin: 0 auto;
        color: rgb(182, 182, 182);
        font-size: 10pt;
        display: flex;
        flex-flow: wrap;
        justify-content: space-around;
        bottom: 20px;
    }

    .wrapper{
        margin-top: 20px;
        margin-bottom: 10px;
        line-height: 20px;

        span{
            margin-left: 5px;
            margin-right: 5px;
        }
    }

</style>