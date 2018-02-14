<template>
  <footer class="footer">
    <user-bar :user="user" />
  </footer>
</template>

<script>
  import User from '@/components/core/model/User'
  import UserBar from '@/components/core/UserBar'
  
  export default{
    name: 'jm-footer',
    
    data(){
      return {
        user: new User()
      }
    },

    components: {
			UserBar
    },
    
    mounted(){
      return this.$store.state.user
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import '~@/assets/style/master.scss';
  
  .footer{
    width: 100%;
    height: 54px;
    background: #222;
    border-radius: 10px;
    @include box-hori-center-middle;

  }
</style>
