<template>
  <win-dialog title="系统登录" btnOrient="hori">
    <layout orient="vert" align="left" valign="top" class="dialog" style="width:300px; height:auto;">
      <layout orient="vert" align="center" valign="center" class="user-photo-case">
        <gragh src="http://localhost:9999/cdn/img/github.png" class="user-photo" fill="origin"></gragh>
      </layout>
      <layout orient="hori" align="center" valign="center" class="user-info">
        <text-input textWidth="60" type="text" text="用户名称" getFocus="true" :data="user" name="name" />
      </layout>
      <layout orient="hori" align="center" valign="center" class="user-info">
        <text-input textWidth="60" type="password" text="登录密码" :data="user" name="psd" />
      </layout>
      <!--<layout orient="hori" align="center" valign="center" class="user-info">
        <text-input textWidth="60" type="number" text="年龄 / 岁" :data="user" name="age" />
      </layout>
      <layout orient="hori" align="center" valign="center" class="user-info">
        <text-input textWidth="60" type="checkbox" text="是否党员" :data="user" name="part" />
      </layout>
      <layout orient="hori" align="left" valign="center" class="user-info">
        <text-input textWidth="60" type="mail" text="邮箱" :data="user" name="mail" />
      </layout>-->
    </layout>
    <footer-button slot="bottom" :handler="login">登录</footer-button>
  </win-dialog>
</template>

<script>
  import winDialog from '../components/core/Dialog'
  import layout from '@/components/core/Layout'
  import footerButton from '@/components/core/FooterButton'
  import gragh from '@/components/core/Gragh'
  import textInput from '@/components/core/TextInput'
  import Test from '@/pages/Test'
  
  export default{
    name: 'jm-dialog',
    
    props: ['width', 'height'],
    
    components: {
      winDialog,
      layout,
      footerButton,
      gragh,
      textInput
    },
    
    data(){
    	console.dir(textInput)
      
      return {
        user: {
          name: 'zhuj',
          psd: '111111',
          age: 23,
          part: '-1',
          mail: 'asdlfkjsldkf@asd.com'
        }
      }
    },
    
    methods: {
      login(){
				this.$store.commit('addCurrDialog', Test)
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import '~@/assets/style/master';
  
  .dialog{
    overflow: hidden;
    padding:0 0 20px 0;
  }
  
  .user-photo-case{
    height: 160px;
    width: 100%;
    
    .user-photo{
      width: 81px;
      height: 81px;
      border-radius: 81px;
      border: solid 4px #bbb;
    }
  }
  
  .user-info{
    padding: 0 30px 10px;
  }
</style>
