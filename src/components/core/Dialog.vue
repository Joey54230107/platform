<template>
  <div class="win-masker">
    <transition name="slide">
      <div class="win-dialog">
        <header class="dialog-header">
          <h3 class="dialog-title auto-fill">
            <a>{{title}}</a>
          </h3>
          <ul class="dialog-btns">
            <li class="btn win-max" @click="maxWin"></li>
            <li class="btn win-close" @click="closeWin"></li>
          </ul>
        </header>
        <main class="dialog-body">
          <slot></slot>
        </main>
        <footer :class="'dialog-bottom-' + btnOrient">
          <slot name="bottom"></slot>
          <footer-button slot="bottom" type="danger" :handler="closeWin">
            <span class="fa fa-ban"></span>
            退出
          </footer-button>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script>
  import footerButton from '@/components/core/FooterButton'
  
  export default{
    name: 'jm-dialog',
    
    props: {
      title: {
        type: String
      },
      btnOrient: {
        type: String,
        default: 'hori'
      }
    },
    
    created(){
    },
    
    mounted(){
    },
  
    destroyed(){
      console.log('end')
    },
    
    components: {
      footerButton
    },
    
    methods: {
			closeWin(){
				this.$store.commit('removeCurrDialog')
      },

			maxWin(){
        let inner = this.$slots.default[0].elm
        this.$nextTick(() => {
					inner.style.transition = 'width .5s, height .5s'
        })
        inner.style.width = '800px'
        inner.style.height = '600px'
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import '~@/assets/style/master';
  
  .win-masker{
    @include box-hori-center-middle;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  div.win-dialog{
    width: auto;
    height: auto;
    display: block;
    position: relative;
    opacity: .9;
    border-radius: 15px;
    overflow: hidden;
    
    header.dialog-header{
      @include box-hori-left-middle;
      background: #fff;
      height: 44px;
      padding: 0 10px;
      box-shadow: 10px 10px 15px #000;
      
      h3.dialog-title{
        padding-left: 5px;
        font-size: 14px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #000;
        
        a{
          padding-left: 5px;
        }
      }
      ul.dialog-btns{
        @include box-hori-right-middle;
        width: 50px;
        margin-top: -12px;
        
        li.btn{
          width: 16px;
          height: 16px;
          border-radius: 16px;
          overflow: hidden;
          margin: 0 0 0 8px;
          opacity: .5;
          transition: opacity .3s;
          cursor: pointer;
          
          &:hover{
            opacity: 1.0;
          }
          
          &.win-max{
            background: #F9BF2F;
          }
          &.win-origin{
            background: #A8C023;
          }
          &.win-close{
            background: #ea6f5a;
          }
        }
      }
    }
    main.dialog-body{
      background: #dedede;
      height: auto;
      min-height: 200px;
      min-width: 300px;
      box-shadow: 0 5px 25px #b1b1b1 inset;
    }
    footer.dialog-bottom-hori{
      @include box-hori-left-middle;
      background: #eee;
      box-shadow:0 5px 25px #ccc;
  
      div.footer-btn-case{
        border-right: solid 1px #ddd;
        
        &:last-child{
          border-right-width: 0;
        }
      }
    }
    footer.dialog-bottom-vert{
      @include box-vert-left-middle;
      background: #eee;
      box-shadow:0 5px 25px #ccc;
  
      div.footer-btn-case{
        border-bottom: solid 1px #ddd;
  
        &:last-child{
          border-bottom-width: 0;
        }
      }
    }
  }
</style>
