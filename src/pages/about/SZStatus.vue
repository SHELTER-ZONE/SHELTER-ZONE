<template>
    <div class="sz_status">
        <div id="sz_status">
            <div class="title-wrapper">
                <p class="article-title" data-aos="fade-up">About</p>
                <p style="font-size:1.5rem;" data-aos="fade-up">SZ Status </p>
            </div>

            <div class="article" id="intro">
                <div class="article-title title1" data-aos="fade-down">Right Now</div>
                <p class="card-date" style="text-align: center;">2020 / 5 / 19 update</p>
                <div class="article-content">
                    <span>
                        目前已正準備邁向組織化，詳見 <a id="org_doc" href="https://github.com/SHELTER-ZONE/Oragnaization-Structure/wiki" target="_blank">Oragnaization-Structure</a>
                    </span>
                    <br>
                    <span>
                        現在以Coding程式交流最為活躍也擁有較多的協作專案與活動正在進行，而3D及2D有些沉寂，因為被群組放置Play了一段時間，目前也正試圖規劃3D專案試圖推動3D的交流活動，與招收新的3D與2D新血來活躍。
                    </span>
                    <p class="title3" >幽靈成員清理</p>
                    <span>
                        自2019/1/19 至 2020 / 5 / 19 <br>
                        根據伺服器幽靈清理機制，已共計踢除 284 名幽靈成員。
                    </span>
                </div>

                <div class="article-title title1" data-aos="fade-down">Core Target</div>
                <div class="article-content">
                    <span>
                        SZ的核心目標/理念為: Coding、3D、2D 整合的技術交流平台(社群)<br>
                        詳情可以閱讀
                        <a id="core-target"
                            href="https://shelter-zone.github.io/SZ-Memoir-Server-Management/Memoir/core_value.html#核心目標-核心理念"
                            target="_blank">
                            SZ回憶錄 - SZ 核心目標/理念
                        </a>
                    </span>
                </div>

                <div class="article-title title1" data-aos="fade-down">SZ Road Map</div>
                <div class="article-content">
                    <span>
                        可以前往
                        <a id="roadmap-link"
                            href="https://www.notion.so/shelterzone/f8ed862ccda145518f8a0c21b6ccff13?v=5551e2c2e6704456886cb09ec715fea3"
                            target="_blank">
                            SZ Road Map (Notion)
                        </a>
                        能看到目前SZ的所有預定規劃與規劃進行現況。
                    </span>
                </div>

            </div>
            <div class="article-title title1" data-aos="fade-down">SZ State</div>
            <div class="article-content">
                <p id="wait-connect">**需稍微等待加載**</p>
                <span>STATBOT 會統計每日伺服器內，不管是成員個人還是各頻道的文字訊息量與語音在現時間數據。</span>
                <iframe id="statbot" src="https://statbot.net/dashboard/445157253385814016/messages"
                    frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .article {
        margin-top: 180px;
        width: 60%;
    }

    .article-content {
        margin-bottom: 150px;

        #wait-connect {
            font-size: 1.2rem;
            color: orange;
            line-height: 40px;
        }
    }

    .title3{
        color: rgb(182, 182, 182);
        font-size: 1.4rem;
        margin-top: 50px;
        margin-bottom: 10px;
    }
    
    #org_doc,
    #roadmap-link,
    #core-target {
        font-size: 1.2em;
        color: lightskyblue;
    }

    #roadmap-link:visited {
        color: lightskyblue;
    }

    #statbot {
        width: 90%;
        height: 165vh;
        margin-top: 50px;
    }

    span {
        line-height: 40px;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>