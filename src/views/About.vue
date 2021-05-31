<template>
<b-container fluid class="p-4 bg-dark">
 
  <div :style= "myStyle" class="about">
    <h1>Quienes somos></h1>
  
    <img alt="Vue logo" src="../assets/pentagramaOptimus.jpg" />
  </div>
  </b-container>
</template>
<script>


export default {
  name: "Home",
  data(){
       return{
         myStyle:{
            backgroundColor:"#16a085" 
          
         }
            }
  },
  components:{
  
  }
  
};
</script>
