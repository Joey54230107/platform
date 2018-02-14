<template>
  <div id="platform">
    <top :navs="navs" />
    <div class="work auto-fill">
      <aside class="left-bar">
        <sider dir="vert | left" :bars="leftSideBars" />
      </aside>
      <main class="stage auto-fill">
        <div class="main-work auto-fill">
          <div :is="$store.state.currPage"></div>
        </div>
        <sider class="btm-sider" dir="hori" :bars="rightSideBars" />
      </main>
      <aside class="right-bar">
        <sider dir="vert | right" :bars="btmSideBars" />
      </aside>
    </div>
    <bottom />

    <div :is="$store.state.currDialogs[index]" v-for="(dialog, index) in $store.state.currDialogs"></div>
  </div>
</template>

<script>
  import './assets/style/master.scss'
  import top from '@/components/core/Topper'
  import bottom from '@/components/core/Bottom'
  import sider from '@/components/core/Sider'
  import mainConfig from '../static/main.config'
  import util from '@/plugin/util'
  import dialog from '@/components/core/Dialog'
  import Icon from './components/core/model/Icon'
  
  export default {
    name: 'App',
    
    components: {
      top,
      sider,
      bottom
    },
    
    data(){
      let totalMenus = []
      this.getTotalMenu(totalMenus, mainConfig.navs)
      
      return {
        leftSideBars: [],
        rightSideBars: [],
        btmSideBars: [],
        navs: this.getMenus(),
        totalNavs: totalMenus
      }
    },
    
    methods: {
      getMenus(){
        let menus = mainConfig.navs
        menus && menus.forEach(menu => {
          menu.chose = false
        })
        return menus
      },
  
      getTotalMenu(tpl_list, navs){
        navs && navs.forEach(nav => {
          if(!nav.sub){
            tpl_list.push(nav)
          }else{
            this.getTotalMenu(tpl_list, nav.sub)
          }
        })
      },
  
      initSideBars(menus){
        let tpl_list = []
        
        for(var i=0; i<this.totalNavs.length; i++){
          let nav = this.totalNavs[i]
          if(menus.indexOf(nav.id) > -1){
            tpl_list.push(new Icon(nav))
          }
        }
        
        let size = tpl_list.length
        if(size < 10){
          for(var i=0; i<(10 - size); i++){
            tpl_list.push(new Icon())
          }
        }
        return tpl_list
      }
    },
    
    mounted(){
      console.log('mounted')
      let
        leftMenus = [1,2,3,4,5,6,7],
        rightMenus = [4,5,6,7,8,9,10],
        btmMenus = [1,2,3,4,5,6,7,8,9]
      
      /*this.$api.get('/portal/init/').then((data) => {
        console.dir(data)
      })*/

			/*this.openWin({
				path: '/login'
			})*/
      
      this.leftSideBars = this.initSideBars(leftMenus)
      this.rightSideBars = this.initSideBars(rightMenus)
      this.btmSideBars = this.initSideBars(btmMenus)
    }
  }
  
  
</script>

<style lang="scss" type="text/scss" scoped>
  @import '~@/assets/style/master.scss';
  
  #platform{
    width: 100%;
    height: 100%;
    @include box-vert;
    
    div.work{
      margin: 15px 0;
      @include box-hori-left-top;

      main.init-case{
        height: 100%;
        width: 100%;
        @include box-hori-center-middle;

        h1{
          font-size: 64px;
          color: rgba(255,255,255,.8);
          letter-spacing: 8px;
          text-shadow: 0 0 5px #333;
        }
      }
  
      aside.left-bar, aside.right-bar{
        @include box-hori-center-middle;
        width: 64px;
        height: 100%;
        padding: 30px 0;
      }
      main.stage{
        @include box-vert-center-top;
        margin: 0 10px;
        height: 100%;
        position: relative;
        overflow: hidden;

        .main-work{
          border-radius: 10px;
          width: 100%;
          overflow: hidden;
        }
        
        .btm-sider{
          height: 70px;
          width: 100%;
          margin-bottom: 8px;
        }
      }
    }
  }
</style>
