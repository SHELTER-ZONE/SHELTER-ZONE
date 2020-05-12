<template>
    <div class="doc_card">
        <div class="card" v-for="doc in docs" :key="doc.name">
            <a :href="doc.url"></a>

        </div>

    </div>
</template>

<script>
    export default {
        name: "DocsCard",
        data() {
            return {
                docs: {
                    doc1: {
                        name: "Ask Questions Guide",
                        url: "https://shelter-zone.github.io/Ask-Questions-Guide-Doc/"
                    },
                    doc2: {
                        name: "Ask Questions Guide",
                        url: "https://shelter-zone.github.io/Ask-Questions-Guide-Doc/"
                    },
                }
            }
        }
    }
</script>

<style scoped>
    .card {
        width: 80%;
        height: 50px;
        margin: 0 auto;
        background: azure;
        margin-top: 50px;
    }

    a {}
</style>