<template>
  <div class="icon-case" @mouseover="showTip(true)" @mouseleave="showTip(false)">
    <a :class="'icon-tiper-' + direct + '-' + (align || 'center')" v-if="direct == 'hori' && icon.state.show_tip && (!icon.empty)">
      {{icon.menu.name}}
      <i></i>
    </a>
    <a :class="'icon-tiper-' + direct + '-' + (align || 'center')" v-if="direct == 'vert' && icon.state.show_tip && (!icon.empty)">
      {{icon.menu.name}}
      <i></i>
    </a>
    <span v-if="!icon.empty" class="icon" :class="'fa fa-' + icon.menu.icon" @click="test">
      <i class="msg" v-if="icon.msg"></i>
    </span>
  </div>
</template>

<script>
  import Login from '@/pages/Login'

  export default{
    name: 'jm-sider-icon',
  
    props: ['icon', 'direct', 'align'],
    
    methods: {
      showTip(display){
        this.icon.state.show_tip = display
      },

      test(){
      	this.$store.commit('addCurrDialog', Login)
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import '~@/assets/style/master';

  div.icon-case{
    width: 48px;
    height: 48px;
    background-color: rgba(128,128,128,.1);
    border-radius: 8px;
    margin-bottom: 8px;
    display: block;
    transition: background .4s;
    margin-left: 4px;
    margin-right: 4px;
    float: left;
    position: relative;
    
    &:hover{
      background-color: rgba(128,128,128,.6);
      /*box-shadow: 0 0 5px #ccc;*/
    }
    
    span.icon{
      width: 48px;
      height: 48px;
      font-size: 24px;
      padding-top: 12px;
      text-align: center;
      background: rgba(255, 255, 255, .1);
      border-radius: 8px;
      transition: background .5s;
      color: #888;
      position: relative;
      
      &:hover{
        background: rgba(0, 0, 0, .7);
        cursor: pointer;
        color: #A8C023;
      }
      &:active{
        transition: background .3s;
        background: #A8C023;
        color: rgba(0, 0, 0, .7);
      }
      
      i.msg{
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: #FD6768;
        position: absolute;
        top: 4px;
        right: 4px;
      }
    }
  
    a.icon-tiper-hori-center{
      position: absolute;
      width: 100px;
      height: 24px;
      line-height: 24px;
      background: #111;
      top: -43px;
      left: -26px;
      color: #A8C023;
      font-size: 12px;
      border-radius: 30px;
      text-align: center;
      z-index: 500;
      
      i{
        border-top:solid 8px #111;
        border-left: solid 8px transparent;
        border-right: solid 8px transparent;
        border-bottom: solid 8px transparent;
        position: absolute;
        top: 23px;
        left: 41px;
      }
    }
  
    a.icon-tiper-vert-left{
      position: absolute;
      width: 100px;
      height: 36px;
      line-height: 36px;
      background: #111;
      top: 8px;
      left: 64px;
      color: #A8C023;
      font-size: 12px;
      border-radius: 8px;
      text-align: center;
      z-index: 500;
    
      i{
        border-top:solid 8px transparent;
        border-left: solid 8px transparent;
        border-right: solid 8px #111;
        border-bottom: solid 8px transparent;
        position: absolute;
        top: 10px;
        left: -16px;
      }
    }
  
    a.icon-tiper-vert-right{
      position: absolute;
      width: 100px;
      height: 36px;
      line-height: 36px;
      background: #111;
      top: 8px;
      left: -100%;
      margin-left: -69px;
      color: #A8C023;
      font-size: 12px;
      border-radius: 8px;
      text-align: center;
      z-index: 500;
    
      i{
        border-top:solid 8px transparent;
        border-left: solid 8px #111;
        border-right: solid 8px transparent;
        border-bottom: solid 8px transparent;
        position: absolute;
        top: 10px;
        left: 100%;
      }
    }
  }
</style>
