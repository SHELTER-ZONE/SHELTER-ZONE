<template>
    <!-- TODO 如果直接按上一頁 不會更新state -->
    <div id="about">
        <div class="pagelink">
            <a @click="changepage('AboutSZ')">SHELTER ZONE</a> /
            <a @click="changepage('SZStatus')">Status 現況</a> /
            <a @click="changepage('SZHistory')">History 歷史事件</a> /
            <a >Anecdote 軼事</a>
        </div>
        <transition name="fade">
            <component v-bind:is='show' />
        </transition>
        
    </div>
</template>

<script>
    import AboutSZ from '@/pages/about/AboutSZ.vue'
    import SZStatus from '@/pages/about/SZStatus.vue'
    import SZHistory from '@/pages/about/SZHistory.vue'
    export default {
        components: {
            AboutSZ,
            SZStatus,
            SZHistory,
        },
        data() {
            return {
                show: "AboutSZ",
            }
        },
        methods:{
            changepage(page){
                this.show = page
            }
        }
    }
</script>

<style scoped>
*{
    color: rgb(182, 182, 182);
}

.pagelink{
    margin: 0 auto;
    margin-bottom: 100px;
}

a{
    color: mediumspringgreen;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 10px;
    text-decoration: none;
    transition: 1s;
}

a:hover{
    color:hotpink;
    transition: .5s;
}
</style>