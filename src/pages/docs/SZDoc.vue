<template>
    <div class="szdoc">
        <div class="card" v-for="doc in docs" :key="doc.name">
            <strong id="doc-name">{{ doc.name }}</strong>
            <a id="doc-link" :href="doc.url" target="_blank"></a>
            <p id="doc-des">{{ doc.des }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SZDoc",
        data() {
            return {
                docs: {
                    doc1: {
                        name: "📘 Ask Questions Guide",
                        url: "https://shelter-zone.github.io/Ask-Questions-Guide-Doc/",
                        des: " 如何詢問問題指南 | Ask Questions Guide"
                    },
                     doc2: {
                        name: "📙 SZ 組織結構",
                        url: "https://github.com/SHELTER-ZONE/Oragnaization-Structure/wiki",
                        des: "SZ 組織結構、理念與說明"
                    },
                    doc3: {
                        name: "📑 課程開課指南",
                        url: "https://hackmd.io/@3iMCUso7TlKlC47LfsqoSA/SZ-1902",
                        des: "螢幕分享課程開課指南"
                    },
                    doc4: {
                        name: "📑 課程規劃與準備指南",
                        url: "https://hackmd.io/@pvAwpBIcRXOl8ngyCpR06A/r1yBiK4XH",
                        des: "如何規劃螢幕分享課程與準備課程指南"
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