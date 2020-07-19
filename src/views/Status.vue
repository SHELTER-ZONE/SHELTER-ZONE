<template>
    <div class="status">
        <div class="bg"></div>
        
        <div class="block">
            <div class="members">{{data.status.members}}: {{members}}</div>
            <div class="online">{{data.status.online}}: {{online}}</div>
        </div>
        
        <div class="block discus">
            <p class="title">{{data.status.discussion.title}}</p>
            <div class="cate-wrapper">
                <div class="cate">
                    <p>{{data.status.discussion.cd}}</p>
                    <p>{{data.status.discussion.d3}}</p>
                    <p>{{data.status.discussion.d2}}</p>
                </div>
                <div class="cate-status">
                    <p>{{data.status.discussion.cdstatus}}</p>
                    <p>{{data.status.discussion.d3status}}</p>
                    <p>{{data.status.discussion.d2status}}</p>
                </div>
            </div>
        </div>
        
        <div class="block role">
            <p class="title">{{data.status.role.title}}</p>
            <div class="cate-wrapper">
                <div class="cate" >
                    <p v-for="r in sheet" :key="r.roles">{{r.roles}}</p>
                </div>
                <div class="cate-status" >
                    <p v-for="r in sheet" :key="r.color">{{r.nums}}</p>
                </div>
            </div>
        </div>

        <div class="block channel">
            <p class="title">{{data.status.channel.title}}</p>
            <div class="cate-wrapper">
                <div class="cate" >
                    <p>{{data.status.channel.text}}</p>
                    <p>{{data.status.channel.voice}}</p>
                </div>
                <div class="cate-status" >
                    <p v-for="r in sheet" :key="r.textchannel">{{r.textchannel}}</p>
                    <p v-for="r in sheet" :key="r.voicechannel">{{r.voicechannel}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import anime from 'animejs'
    import GSheetReader from 'g-sheets-api'
    export default {
        name: "Status",
        props: {
            data: Object,
        },
        data() {
            return {
                members: String,
                online: String,
                sheet:Array,
            }
        },
        mounted() {
            anime({
                targets: '.status',
                opacity: '100%',
                easing: 'easeInOutQuad',
            })
        },
        created() {
            // get sz data from g-sheet
            const options = {
                sheetId: '1bfgFhSwMGYgj3ph0nKEgtVdO-1sioUVuIodo6WM4Ftw',
                sheetNumber: 1,
                returnAllResults: false,
            }
            GSheetReader(options, results => {
                this.sheet = results
                this.members = results[0].members
            });
          
            // get current online
            axios.get("https://discordapp.com/api/guilds/445157253385814016/widget.json")
                .then(res => {
                    this.online = res.data.presence_count
                })
                .catch(err => {
                    console.log(err)
                    this.online = "Error"
                })
        }
    }
</script>

<style scoped lang="scss">
    .status {
        opacity: 0;
        width: 100%;
        height: 100%;
        position: relative;
    }
    // ============== //
    //              Mobile              //
    //============== //
    .bg{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        background-image: url("../assets/img/rain.gif");
        background-position: center;
        background-size: cover;
        filter: opacity(50%);
    }

    .block {
        font-size: 1.5rem;
        color: white;
        background-color:black;
        margin-bottom: 50px;
    }

    .discus, .role, .channel{
        width: 80%;
        font-size: 15px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 10px;

        .cate-wrapper{
            display: flex;
            justify-content: space-between;
        }

        .cate p{
            text-align: left;
        }
        .cate-status p{
            text-align: right;
        }
    }
    // ============== //
    //             Desktop             //
    //============== //
@media screen and (min-width: 1024px){
    .bg{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        background-image: url("../assets/img/rain.gif");
        background-position: center;
        background-size: contain;
        filter: opacity(50%);
    }

    .members, .online{
        font-size: 50px;
    }
    p{
        font-size: 30px;
    }
}
</style>