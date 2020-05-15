<template>
    <div class="szapp">
        <div class="card" v-for="app in apps" :key="app.name">
            <strong id="doc-name">{{ app.name }}</strong>
            <a id="doc-link" :href="app.url" target="_blank"></a>
            <p id="doc-des">{{ app.des }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"SZApp",
        data() {
            return {
                apps: {
                    app1: {
                        name: "❤ 成員貢獻",
                        url: "https://github.com/SHELTER-ZONE/Coder_Cert",
                        des: "伺服器成員專案貢獻 | Members Contributions"
                    },
                    app2: {
                        name: "🔰 Coder 認證",
                        url: "https://github.com/SHELTER-ZONE/Coder_Cert",
                        des: "Coder 程式語言身份組認證 | Coder Certification"
                    },
                },
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