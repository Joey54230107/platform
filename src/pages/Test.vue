<template>
  <win-dialog title="系统登录">
    <layout orient="vert" align="left" valign="top" class="dialog" style="width:200px; height:100px;">
      123123
    </layout>
  </win-dialog>
</template>

<script>
  import winDialog from '../components/core/Dialog'
  import layout from '@/components/core/Layout'
  
  export default{
    name: 'jm-test',
    
    props: ['width', 'height'],
    
    components: {
      winDialog,
      layout
    },
    
    data(){
      
      return {
      }
    },
    
    methods: {
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import '~@/assets/style/master';
  
  .dialog{
    overflow: hidden;
    padding:0 0 20px 0;
  }
</style>
