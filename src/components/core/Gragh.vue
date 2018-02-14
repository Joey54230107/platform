<template>
  <span :style="style"></span>
</template>

<script>
  export default{
    name: 'jm-gragh',
  
    props: {
      src: {
        type: String
      },
      fill: {
        type: String,
        default: 'origin'
      }
    },
    
    data(){
      let size = 'auto auto';
      
      if(this.fill == 'origin' || this.fill == 'stretch'){
        if(this.fill == 'origin'){
          size = 'auto auto'
        }else{
          size = 'contain'
        }
      }
      return {
        style: {
          width: this.width,
          height: this.height,
          background: 'url(' + this.src + ') center center/' + size + ' no-repeat'
        }
      }
    },
    
    components: {
    },
    
    methods: {
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import '~@/assets/style/master';
  
</style>
