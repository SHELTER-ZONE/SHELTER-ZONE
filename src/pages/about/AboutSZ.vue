<template>
    <div class="about_sz">
        <div id="about-sz">
            <p class="article-title" data-aos="fade-up">About</p>
            <p style="font-size:1.5rem;" data-aos="fade-up">SHELTER ZONE</p>

            <!-- Proladon -->
            <div id="proladon">
                <img id="proladon-img" src="@/assets/avatar/proladon.png" data-aos="flip-right"
                    data-aos-duration="2000">
                <p data-aos="fade-down" data-aos-delay="500">🔰 Server Owner</p>
                <p id="proladon-id" style="font-size:1.5rem;" data-aos="fade-up">Proladon #7525</p>
            </div>

            <!-- SZ Intro Content -->
            <div class="article" id="intro">
                <div class="article-title" data-aos="fade-down">簡介</div>
                <div class="article-content">
                    <p>SHELTER ZONE 是語音軟體 Discord 上的伺服器(Server)，由 Proladon #7525 創立於 2018/6/27</p>
                    <p>起初為一般綜合聊天交流群並以動漫、電玩為主，由 @Gamer @ACG @Creator 三個身分組構成</p>
                    <p>現轉變成技術交流群，身分組結構變為 @Coder @3D Artist @2D Artist 主要構成</p>
                    <p>目前以程式技術交流最為活躍</p>
                </div>
            </div>

            <div class="article" id="intro-name">
                <div class="article-title" data-aos="fade-down">名稱的由來</div>
                <img id="porter" src="@/assets/shelter/porter-madeon-shelter.jpg" alt="porter-madeon-shelter">
                <div class="article-content">
                    <p>靈感來自群主很喜歡的 DJ. Porter Robinson 在 2016 與 DJ. Madeon 合作的一首單曲「Shelter」</p>
                    <p>希望伺服器能接納任何人成為大家的僻護所(Shelter) ，而每個主題的群體各自一個 Shelter </p>
                    <p>所以伺服器這個區域(Zone)就是由多個 Shelter 共同組成的一個 Shelter Zone</p>
                    <p>BTW. 同年與日本 A1 Picture 動畫公司合作的 Shelter 動畫短片，釋出日剛好是群主的生日</p>
                </div>
                <img id="poster" src="@/assets/shelter/a1poster.jpg" alt="porter-madeon-shelter">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutSZ"
    }
</script>

<style scoped>
    * {
        color: rgb(182, 182, 182);
        font-size: 18px;
    }

    .article {
        margin-top: 100px;
    }

    .article-title {
        font-size: 2rem;
        line-height: 60px;
    }

    .article-content {
        margin: 0 auto;
        width: 60%;
        justify-content: center;
    }

    #about-sz {
        width: 90%;
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



    #porter {
        width: 40rem;
    }

    #poster {
        margin-top: 20px;
        width: 20rem;
    }

    @media screen and (max-width: 480px) {
        #intro-history {
            width: 20rem;
        }

        #porter {
            width: 100%;
        }

        #poster {
            width: 100%;
        }
    }

    @media screen and (max-width: 320px) {
        #intro-history {
            width: 20rem;
        }

        #porter {
            width: 100%;
        }

        #poster {
            width: 100%;
        }

        #proladon-img {
            width: 60%;
        }
    }
</style>