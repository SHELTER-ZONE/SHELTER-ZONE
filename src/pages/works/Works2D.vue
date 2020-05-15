<template>
  <div class="works2d">
      <div class="container">
          <div class="artwork-card" v-for="work in works" :key="work.img">
              <img v-bind:src="work.img" alt="(っ °Д °;)っ">
              <p>{{work.authour}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Works2D",
    data(){
        return{
            works:{
                work1:{
                    img:"https://cdn.discordapp.com/attachments/480994700212305921/710099812640358421/136.png",
                    authour:"燕燕啾啾叫#7569",
                },
                work2:{
                    img:"https://cdn.discordapp.com/attachments/480994700212305921/696672486817005608/poppo.png",
                    authour:"Mineo#5250",
                },
                work3:{
                    img:"https://cdn.discordapp.com/attachments/480994700212305921/678677080434540547/natsumi.gif",
                    authour:"Mineo#5250"
                }
            }
        }
    }
}
</script>

<style scoped>
.container{
    width: 90%;
    display: flex;
}
.artwork-card{
    width: 300px;
    height: 500px;
}
.artwork-card img{
    padding: 20px;
    width: 30%;
}

.artwork-card p{
    color: rgb(182, 182, 182);
}
</style>