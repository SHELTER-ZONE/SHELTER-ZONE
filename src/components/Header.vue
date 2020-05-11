<template>
  <div id="header" class="header" :class="{home: msg}">
      <NavBar />
      <h1 id="server-name" 
      data-aos="fade-up" 
      data-aos-duration="2000" 
      data-aos-delay="500">
      SHELTER ZONE
      </h1>
      <h3 id="sub-title" 
      data-aos="fade-up" 
      data-aos-duration="2000" 
      data-aos-delay="1000">2018 / 6 / 27 Proladon#7525</h3>
  </div>
</template>


<script>
import NavBar from '@/components/NavBar.vue'
export default {
    name:"Header",
    components:{
        NavBar,
    },
    data(){
        return{
            msg: this.$store.state.ishome
        }
    },
    computed:{
        listenspage(){
            return this.$store.state.ishome
        }
    },
    watch:{
        listenspage: function (value) {
            this.msg = value
    }
}
   
}
</script>

<style scoped>
    .header{
        width: 100vw;
        height: 50vh;
        background-image: url(../assets/test.jpeg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        transition: 1s;
    }

    .home{
        height: 90vh;
    }

    #server-name{
        margin-top: 80px;
        font-size: 5rem;
    }

    #sub-title{
        color: white;
        font-size: 1rem;
        letter-spacing: 5px;
    }
</style>
