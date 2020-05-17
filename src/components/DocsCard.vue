<template>
    <div class="doc_card">
        <div id="about">
            <div class="pagelink">
                <a id="SZDoc" class="inpage-link" @click="changepage('SZDoc')">Documentation 文件</a> /
                <a id="SZProject" class="inpage-link" @click="changepage('SZProject')">Project 專案</a> /
                <a id="SZApp" class="inpage-link" @click="changepage('SZApp')">Application 應用</a>
            </div>
            <transition name="fade">
                <component v-bind:is='show' />
            </transition>
        </div>
    </div>
</template>

<script>
    import SZDoc from '@/pages/docs/SZDoc.vue'
    import SZProject from '@/pages/docs/SZProject.vue'
    import SZApp from '@/pages/docs/SZApp.vue'
    export default {
        name: "DocsCard",
        components: {
            SZDoc,
            SZProject,
            SZApp,
        },
        data() {
            return {
                show: "SZDoc",
            }
        },
        methods: {
            changepage(page) {
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

    * {
        color: rgb(182, 182, 182);
    }

    .inpage-link{
        color:mediumspringgreen;
    }
    .inpage-link:hover{
        color: hotpink;
    }

    .active{
    color: hotpink;
    border: hotpink 1px solid;
}
</style>