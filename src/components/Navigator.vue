<template>
    <div class="navigator">
        <div class="navbtn-wrapper">
            <button v-for="btn in data.navbtn" :key="btn" @click="changepage(btn)">
                {{btn}}
            </button>
        </div>
    </div>
</template>

<script>
import anime from 'animejs'
    export default {
        name:"Navigator",
        props:{
            data: Object,
        },
        methods:{
            changepage(page){
                this.$emit("changeto", page)
            }
        },
        mounted(){
            anime({
                targets: 'button',
                translateX: [-500, 0],
                delay: anime.stagger(100, {start: 1700, easing: 'easeInQuad'})
            });
        }
    }
</script>

<style scoped>
.navigator{
width: 100%;
height: 100%;
}

.navbtn-wrapper{
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
button{
    width: 100px;
    padding: 10px;
    margin: 0 auto;
    color: mediumturquoise;
    border: none;
    outline: none;
    background-color: transparent;
}

</style>