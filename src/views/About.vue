<template>
    <!-- BUG 如果直接按上一頁 不會更新state -->
    <!-- TODO 顯示目前是在哪頁 -->
    <div id="about">
        <div class="pagelink">
            <a id="AboutSZ" class="inpage-link active" @click="changepage('AboutSZ')" >SHELTER ZONE</a> /
            <a id="SZStatus" class="inpage-link" @click="changepage('SZStatus')" >Status 現況</a> /
            <a id="SZHistory" class="inpage-link" @click="changepage('SZHistory')" >History 歷史事件</a> /
            <a id="SZOrg" class="inpage-link" @click="changepage('SZOrg')" >Github Org 協作組織</a> /
            <a  id="SZAnecdote" class="inpage-link" @click="changepage('SZAnecdote')" >Anecdote 軼事</a>
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
    import SZAnecdote from '@/pages/about/SZAnecdote.vue'
    export default {
        components: {
            AboutSZ,
            SZStatus,
            SZHistory,
            SZOrg,
            SZAnecdote,
        },
        data() {
            return {
                show: "AboutSZ",
            }
        },
        methods:{
            changepage(page){
                this.show = page
                const alink = document.querySelectorAll('a')
                alink.forEach(x => {
                    x.classList.remove("active")
                });
                document.querySelector(`#${page}`).classList.add("active")
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

.active{
    color: hotpink;
    border: hotpink 1px solid;
}
</style>