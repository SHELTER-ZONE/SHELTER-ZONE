<template>
    <!-- BUG 如果直接按上一頁 不會更新state -->
    <!-- TODO 顯示目前是在哪頁 -->
    <div id="about">
        <div class="pagelink">
            <a class="inpage-link" @click="changepage('AboutSZ')">SHELTER ZONE</a> /
            <a class="inpage-link" @click="changepage('SZStatus')">Status 現況</a> /
            <a class="inpage-link" @click="changepage('SZHistory')">History 歷史事件</a> /
            <a class="inpage-link" @click="changepage('SZOrg')">Organization 組織</a> /
            <a class="inpage-link">Anecdote 軼事</a>
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
    import SZOrg from '@/pages/about/SZOrg.vue'
    export default {
        components: {
            AboutSZ,
            SZStatus,
            SZHistory,
            SZOrg
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

<style lang="scss" scoped>
@import url('../assets/css/inpage_link.css');
*{
    color: rgb(182, 182, 182);
}

.inpage-link{
    color:mediumspringgreen
}

.inpage-link:hover{
    color: hotpink;
}
</style>