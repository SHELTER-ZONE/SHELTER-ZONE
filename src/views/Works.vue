<template>
    <div class="works">
        <div class="pagelink">
            <a class="inpage-link" @click="changepage('works3D')">3D ArtWorks</a> /
            <a class="inpage-link" @click="changepage('works2D')">2D ArtWorks</a> /
        </div>
        <transition name="fade">
            <component v-bind:is='show' />
        </transition>
    </div>
</template>

<script>
    import Works3D from '@/pages/works/Works3D.vue'
    import Works2D from '@/pages/works/Works2D.vue'
    export default {
        name: "Works",
        components: {
            Works3D,
            Works2D,
        },
        data() {
            return {
                show: "Works3D"
            }
        },
        methods: {
            changepage(page) {
                this.show = page
            }
        }
    }
</script>

<style scoped>

</style>