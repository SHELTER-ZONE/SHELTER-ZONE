<template>
    <div class="szproject">
        <div class="szdoc">
            <div class="card" v-for="project in projects" :key="project.name" >
                <strong id="doc-name">{{ project.name }}</strong>
                <a id="doc-link" :href="project.url" target="_blank"></a>
                <p id="doc-des">{{ project.des }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SZProject",
        data() {
            return {
                projects: {
                    project1: {
                        name: "💾 3D Project 0 - Server Map",
                        url: "https://github.com/SHELTER-ZONE/3D-Project0-Server-Map",
                        des: "3D 專案0 | 3D Project 0"
                    },
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        color: #2c3e50;
        cursor: pointer;
        text-align: left;
        padding: 20px;
        width: 60%;
        margin: 0 auto;
        border-radius: 5px;
        background: rgb(148, 148, 148);
        box-shadow: 5px 5px 5px 1px rgb(10, 10, 10);
        margin-top: 50px;
        transition: 1s;
        position: relative;
    }

    .card:hover {
        transform: scale(1.1);

        #doc-name {
            color: aquamarine;
        }
    }


    #doc-name {
        padding: 10px;
        font-size: 25px;
        transition: .7s;
    }

    #doc-link {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }

    #doc-des {
        margin-top: 20px;
        font-size: 18px;
    }
</style>