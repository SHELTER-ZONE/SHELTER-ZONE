<template>
  <div class="szorg">
      <div id="about-org">
            <p class="article-title" data-aos="fade-up">About</p>
            <p style="font-size:1.5rem;" data-aos="fade-up">Orgnaization</p>

            <!-- SZ Intro Content -->
            <div class="article" id="intro">
                <div class="article-title title1" data-aos="fade-down">SHELTER ZONE Orgnaization (SZ.Org)</div>
                <div class="article-content">
                    <span>其實在目前我們這邊指的組織是指Github上SZ專屬的組織，
                        但是在未來組織會指向整個 SZ，目前SZ正處於由伺服器(Server)轉向組織(Orgnaization)的過程中。<br>
                        SZ幾乎所有的專案、應用、文件等都會放在 Github SZ.Org 上管理與呈現，基本上所有的專案都是開源的。
                        也因此，如果成員想參加或是協作伺服器的專案的話，必須先加入SZ.Org，並且需要學習如何使用Github，
                        如果你是第 一次使用 Github 也不用擔心，伺服器內的所有 @Coder 都會提供幫助。
                    </span> <br>
                    <p class="card-title title2">如何加入</p>
                    <span>
                        註冊申請Github帳號後，直接給 @Proladon 你的Github ID 或是 你註冊的信箱。
                    </span>
                </div>
            </div>
            <img id="SZOrg-img" src="@/assets/shelter/github-org.png" data-aos="flip-right"
            data-aos-duration="2000">

            
        </div>

  </div>
</template>

<script>
export default {
    name:"SZOrg",
}
</script>

<style scoped>
.article{
    width: 70%;
}

.article-content span{
    line-height: 40px;
}

.article-content .title2{
    margin-top: 50px;
    margin-bottom: 30px;
}
#SZOrg-img{
    margin: 0 auto;
    margin-top: 50px;
    width: 80vw;
}


</style>