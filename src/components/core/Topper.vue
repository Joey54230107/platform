<template>
  <header class="header">
    <span id="logo" class="fa fa-github" @click="test"></span>
    <nav class="header-nav auto-fill">
      <menu v-for="nav in navs" :key="nav.id" @mouseover="showSub(nav, true, $event)" @mouseleave="showSub(nav, false, $event)">
        <div class="f16" :class="'fa fa-' + nav.icon">
          <span class="f14">{{nav.name}}</span>
        </div>
        <span class="ani-300 fa" v-if="nav.sub" :class="nav.chose ? 'fa-angle-up' : 'fa-angle-down'"></span>
        
        <div v-if="nav.sub && nav.chose" class="sub-nav-case">
          <ul class="sub-navs">
            <li class="sub-nav" v-for="subNav in nav.sub">
              <span>{{subNav.name}}</span>
            </li>
          </ul>
        </div>
      </menu>
    </nav>
    
    <button class="close"></button>
  </header>
</template>

<script>
	import Editor from '@/pages/Editor'

  export default{
    name: 'jm-header',
    
    props: ['navs'],
    
    methods: {
      showSub(item, display, evt){
        if(item.sub){
          item.chose = display
        }
      },

      test(){
				console.log('clicked!')
				this.$store.commit('setCurrPage', Editor)
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import '~@/assets/style/master';
  
  .header{
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background: #9A9A9A;
    padding: 0 30px 0 10px;
    position: relative;
    @include box-hori-left-middle;
    
    #logo{
      width: 30px;
      height: 30px;
      background: #fff;
      border-radius: 40px;
      display: block;
      text-align: center;
      font-size: 25px;
      line-height: 30px;
      color: #A8C023;
    }
    
    .header-nav{
      @include box-hori-left-middle;
      padding-left: 32px;
      
      menu{
        position: relative;
        transition: background .6s;
        width: auto;
        height: 36px;
        border-radius: 5px;
        background: transparent;
        padding: 0 15px;
        line-height: 36px;
        margin-right: 20px;
        color: #454545;
  
        &:hover{
          background: #ccc;
          cursor: default;
          color: #000;
        }
        
        span{
          padding-left: 5px;
        }
        
        div.sub-nav-case{
          position: absolute;
          top: 100%;
          padding-top: 3px;
          left: 0;
          height: auto;
          width: 200px;
          z-index: 500;
          
          ul.sub-navs{
            padding: 5px;
            border-radius: 5px;
            background: #ccc;
            box-shadow: 3px 3px 15px #444;
            overflow: hidden;
    
            li.sub-nav{
              height: 30px;
              line-height: 30px;
              transition: background .3s;
              color: #666;
              border-radius: 5px;
              padding-left: 10px;
      
              span{
                padding-left: 2px;
                font-size: 12px;
              }
      
              &:last-child{
                border-bottom-width: 0;
              }
              &:hover{
                background: #A8C023;
                color: #000;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    
    .close{
      width: 16px;
      height: 16px;
      background: #FD6768;
      position: absolute;
      right: 10px;
      top: 8px;
      border-radius: 20px;
      font-size: 12px;
      color: transparent;
      opacity: .7;
      transition: opacity .3s;

      &:hover{
        opacity: 1.0;
        cursor: pointer;
      }
    }
  }
</style>
