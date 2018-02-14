<template>
  <div class="footer-btn-case auto-fill button" :class="type" @click="btnClick">
    <slot></slot>
  </div>
</template>

<script>
  export default{
    name: 'jm-footer-button',
    
    props: {
      type: {
        type: String,
        default: 'info' // info | success | warning | danger
      },
      handler: {
        type: Function
      }
    },
    
    methods:{
      btnClick(){
        if(this.handler){
          this.handler()
        }
      }
    },
    
    data(){
      return {
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import '~@/assets/style/master';

  .footer-btn-case{
    height: 100%;
    width: 100%;
    color: #555;
    letter-spacing: 1px;
    @include box-hori-center-middle;
    
    span{
      padding-right: 4px;
      opacity: .7;
    }
  }

  div.button{
    transition: background .3s;
    height: 42px;
    
    &.info{
      &:hover{
        color: #000;
        background: #e3e3e3;
        cursor: pointer;
      }
      &:active{
        background: #bbb;
        color: #000;
      }
    }
    &.danger{
      &:hover{
        color: #c7254e;
        background: rgba(234, 111, 90, .2);
        cursor: pointer;
      }
      &:active{
        background: rgba(234, 111, 90, .6);
        color: #fff;
      }
    }
  }
</style>
