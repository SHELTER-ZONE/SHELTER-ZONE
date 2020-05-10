<template>
    <div class="gotop">
        <button @click="this.scrollToTop">
        </button>
    </div>
</template>

<script>
    export default {
        name: "GoTop",
        methods: {
            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    }
</script>

<style scoped>
    .gotop {
        position: fixed;
        right: 5vw;
        bottom: 3vh;
        width: 50px;
        height: 50px;
    }


    button {
        font-size: 1rem;
        width: 10px;
        height: 15px;
        background-color: transparent;
        border: rgb(0, 255, 179) solid 2px;
        border-radius: 25px;
        outline: none;
        transition: 1s;
    }

    button:hover{
        background-color: white;
        width: 50px;
        height: 50px;
        transition: .5s;
    }

    button:hover:after{
        content: "TOP";
        
    }
</style>