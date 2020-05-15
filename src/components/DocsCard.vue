<template>
    <div class="doc_card">
        <div id="about">
            <div class="pagelink">
                <a class="inpage-link" @click="changepage('SZDoc')">Documentation 文件</a> /
                <a class="inpage-link" @click="changepage('SZProject')">Project 專案</a> /
                <a class="inpage-link" @click="changepage('SZApp')">Application 應用</a>
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
</style>