<template>
  <div class="editor-case">
    <header>
      123
    </header>
    <main class="auto-fill">
      <aside class="left">
        <h3>组件池</h3>
        <div class="left-case">
          <ul class="pool-case auto-fill">
            <li class="comp-item" v-for="comp in pool" @click="choseItem(comp)">
              <span class="icon" :class="'fa fa-' + comp.icon"></span>
            </li>
          </ul>
        </div>
      </aside>
      <div class="body auto-fill">
        <div class="editor-page auto-fill">
          <div class="editor-page-inner">

            <Login></Login>

          </div>
        </div>
      </div>
      <aside class="right">
        <div class="right-top">
          <h3>
            <span v-if="currentComponent.icon" :class="'fa fa-' + currentComponent.icon"></span>
            <a>{{currentComponent.name ? currentComponent.name + '的属性' : '未选择组件'}}</a>
          </h3>
        </div>
        <div class="right-bottom auto-fill">
          <h3>
            图层
          </h3>
        </div>
      </aside>
    </main>

    <router-view></router-view>
  </div>
</template>

<script>
  import Layout from '@/components/core/Layout'
  import TextInput from '@/components/core/TextInput'
  import Gragh from '@/components/core/Gragh'
  import Dialog from '@/components/core/Dialog'

  import Login from '@/pages/Login'

  export default{
    name: 'jm-page-editor',

    components: {
    	Login
    },
    
    data(){
    	//Layout, TextInput, Gragh, Dialog
      return {
      	currentComponent: {},

				pool: [
          {name: '布局容器组件', icon: 'object-group', comp: Layout},
					{name: '文本组件', icon: 'pencil', comp: TextInput},
					{name: '图像组件', icon: 'photo', comp: Gragh},
					{name: '对话框组件', icon: 'desktop', comp: Dialog}
        ],
      }
    },
    
    methods: {
			choseItem(comp){
				this.currentComponent = comp
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import '~@/assets/style/master';

  div.editor-case{
    @include box-vert-left-top;
    height: 100%;

    header{
      @include box-hori-left-middle;
      height: 42px;
      background: rgba(33,33,33, .9);
      border-radius: 10px;
    }
    main{
      @include box-hori-left-middle;
      padding: 10px 0 0;

      aside.left{
        @include box-vert-left-top;
        background: rgba(33,33,33, .9);
        border-radius: 10px;
        height: 100%;
        width: 127px;
        overflow: hidden;

        h3{
          height: 34px;
          background: #000;
          padding: 0 15px;
          line-height: 34px;
          width: 100%;
          text-align: center;
          color: #999;
        }

        div.left-case{
          padding: 10px;
          height: 100%;

          ul.pool-case{
            @include box-hori-left-top;
            flex-wrap: wrap;

            li.comp-item{
              @include box-hori-center-middle;
              width: 48px;
              height: 48px;
              border-radius: 7px;
              margin-bottom: 10px;
              background: #414141;
              transition: background .3s;

              span.icon{
                font-size: 21px;
                color: #222;
              }

              &:nth-child(odd){
                margin-right: 10px;
              }

              &:hover{
                cursor: pointer;
                background: rgba(168, 192, 35, .5);

                span.icon{
                  color: #fff;
                }
              }

              &:active{
                background: rgba(168, 192, 35, 1);

                span.icon{
                  color: #333;
                }
              }
            }
          }
        }

      }
      aside.right{
        @include box-vert-left-top;
        height: 100%;
        width: 300px;
        overflow: hidden;

        div.right-top{
          border-radius: 10px;
          background: rgba(33,33,33, .9);
          height: 50%;
          width: 100%;
          overflow: hidden;
        }
        div.right-bottom{
          border-radius: 10px;
          background: rgba(33,33,33, .9);
          margin-top: 10px;
          width: 100%;
          overflow: hidden;
        }

        h3{
          @include box-hori-left-middle;
          height: 34px;
          background: #000;
          padding: 0 15px;
          line-height: 34px;
          color: #999;

          a{
            padding-left: 6px;
          }
        }
      }
      div.body{
        background: rgba(33,33,33, .9);
        border-radius: 10px;
        height: 100%;
        margin: 0 10px;
        padding: 15px;
        overflow: hidden;

        div.editor-page{
          width: 100%;
          height: 100%;
          overflow: hidden;

          div.editor-page-inner{
            width: 100%;
            height: auto;
            min-height: 800px;
            background: url("~@/assets/img/bg2.png");
            position: relative;

          }
        }
      }
    }
  }
</style>
