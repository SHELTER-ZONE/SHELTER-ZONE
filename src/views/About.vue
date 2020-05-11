<template>
    
    <div id="about">
        
        <div id="about-sz">
            <p class="article-title" data-aos="fade-up">About</p>
            <p style="font-size:1.5rem;" data-aos="fade-up">SHELTER ZONE</p>

            <!-- Proladon -->
            <div id="proladon">
                <img src="../assets/avatar/proladon.png" data-aos="flip-right" data-aos-duration="2000">
                <p data-aos="fade-down" data-aos-delay="500">🔰 Server Owner</p>
                <p id="proladon-id" style="font-size:1.5rem;" data-aos="fade-up">Proladon #7525</p>
            </div>

            <!-- SZ Intro Content -->
            <div class="article" id="intro">
                <div class="article-title" data-aos="fade-right">簡介</div>
                <span data-aos="zoom-out-up" data-aos-duration="3000">
                    SHELTER ZONE 是語音軟體 Discord 上的伺服器(Server)，由 Proladon #7525 創立於 2018/6/27 <br>
                    起初為一般綜合聊天交流群並以動漫、電玩為主，由 @Gamer @ACG @Creator 三個身分組構成
                </span>
            </div>

            <div class="article" id="intro-name">
                <div class="article-title" data-aos="fade-left">名稱的由來</div>
                <span>
                    SHELTER = 僻護所<br>
                    ZONE<br>
                </span>
            </div>

            <div class="article" id="intro-history">
                <div class="article-title" data-aos="fade-left">伺服器變革</div>

                <!-- SZ Histroy -->
                <div class="article-card-wrapper">
                    <div class="article-card">
                        <div class="title-date" data-aos="flip-down" data-aos-delay="500">
                            <p class="card-title">第一次變革</p>
                            <p class="card-date" style="text-align: center;">2018 / 8 / 20</p>
                        </div>
                        <p class="card-content" data-aos="zoom-out-up" data-aos-duration="3000">
                            由於沒有明確的方向主題與管理的不當，導致伺服器的風氣越來越亂，
                            因此在某幾位成員的建議與怨言下迎來了第一次變革。
                        </p>
                    </div>

                    <div class="article-card">
                        <div class="title-date" data-aos="flip-down" data-aos-delay="600">
                            <p  class="card-title">第二次變革</p>
                            <p class="card-date" style="text-align: center;">2019 / 1 / 19</p>
                        </div>
                        <p class="card-content" data-aos="zoom-out-up" data-aos-duration="3000">
                            經過第一次變革後，伺服器也開始活絡了起來，3D、2D、Coding 各領域的大佬不斷出現，
                            但隨著時間的推移，群主因課業的原因有很長一段時間沒有管理也沒有新的伺服器活動，
                            因此大量的成員開始潛水、幽靈，伺服器開始變得死寂。為改變現況而迎來了第二次變革。
                        </p>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        components: {}
    }
</script>

<style scoped>
    * {
        color: rgb(182, 182, 182);
    }

    .article {
        margin-top: 100px;
    }

    .article-title {
        font-size: 2rem;
        line-height: 60px;
    }

    #about-sz {
        width: 80%;
        margin-top: 100px;
        margin: 0 auto;
        line-height: 40px;
    }

    #proladon {
        margin-top: 100px;
    }


    #intro-name {
        display: block;
    }

    #intro-history {
        clear: both;
        display: block;
    }
</style>