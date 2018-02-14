<template>
  <div class="form-input-case auto-fill" :class="'readonly-' + readonly">
    <span class="text" :style="textStyle" v-if="text">
      {{text}}
    </span>
    <span v-if="text" class="fa fa-angle-right spliter"></span>
    
    <!--文本、数字框、邮件、密码输入框-->
    <input ref="ipt" :readonly="readonly" v-if="type != 'checkbox'" class="input auto-fill" type="text" @focus="focus($event)" v-model="val[name]" autocomplete="off" :style="inputStyle">
    
    <span class="fa fa-times-circle icon" v-if="(['text','password','mail','number'].indexOf(type) > -1) && !readonly && val[name]" @click="reset"></span>
    <span class="icon-show number" v-if="type == 'number' && !readonly">
      <a class="arrow fa fa-caret-up uper" @click="changeNumber(true)"></a>
      <a class="arrow fa fa-caret-down down" @click="changeNumber(false)"></a>
    </span>
    <span class="fa fa-ban icon-readonly" v-if="readonly && (type != 'checkbox')"></span>
    
    <!--Checkbox框-->
    <div class="checkbox-case auto-fill" :class="'checkbox-readonly-' + readonly" v-if="type == 'checkbox'">
      <div class="checkbox-container" @click="changeCheckbox">
        <span class="checkbox-slider" :class="'checkbox-val-' + (val[name] == '1')">
          <a class="checkbox-left fa fa-check"></a>
          <a class="checkbox-center"></a>
          <a class="checkbox-right fa fa-times"></a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'jm-text-input',
  
    props: {
      data: {},
      text: {
        type: String
      },
      name: {
        type: String,
        defProps: 'test'
      },
      type: {
        type: String,
        default: 'text'
      },
      textWidth: {},
      textAlign: {
        type: String,
        default: 'left'
      },
      inputAlign: {
        type: String,
        default: 'left'
      },
      getFocus: {
        type: String,
        default: 'false'
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    
    data(){
      var width = this.textWidth
      
      if(width){
        if(!(width.indexOf('%') > -1)){
          width = width.replace('px', '') + 'px'
        }
      }
      
      return {
        textStyle: {
          width: width,
          'text-align': this.textAlign
        },
        inputStyle: {
          'text-align': this.inputAlign
        },
        val: this.data
      }
    },
    
    components: {
    },
    
    mounted(){
      if(this.getFocus === 'true'){
        this.$refs.ipt.focus()
      }
      if(this.type == 'password' && this.val != ''){
        this.$refs.ipt.type = 'password'
      }
    },
    
    methods: {
      focus(evt){
        if(this.type == 'password'){
          evt.target.type = 'password'
        }
      },
  
      changeNumber(isAdd){
        let isNum = isNaN(this.val[this.name])
        if(!isNum){
          if(isAdd){
            ++ this.val[this.name]
          }else{
            -- this.val[this.name]
          }
        }
      },
  
      reset(){
        if(this.type == 'number'){
          this.val[this.name] = 0
        }else{
          this.val[this.name] = ''
        }
        this.$refs.ipt.focus()
      },
  
      changeCheckbox(){
        if(!this.readonly){
          if(this.val[this.name] == '-1'){
            this.val[this.name] = '1'
          }else{
            this.val[this.name] = '-1'
          }
        }
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import '~@/assets/style/master';
  
  .form-input-case{
    height: 34px;
    border-radius: 34px;
    background: #fff;
    padding: 0 10px;
    @include box-hori-left-middle;
    
    &.readonly-true{
      background: #ccc;
      font-style: italic;
      
      input.input{
        font-style: italic;
        color: #fff;
        text-shadow: 1px 1px 1px #333;
        box-shadow: 50px 50px #ccc inset;
        
        &:hover{
          cursor: default;
        }
      }
      
      .icon-readonly{
        margin-right: 5px;
        color: rgba(234, 111, 90, 0.5);
      }
    }
  
    div.checkbox-case{
      @include box-hori-right-middle;
  
      &.checkbox-readonly-true{
        div.checkbox-container{
          width: 27px;
          border-radius: 0 22px 22px 22px;
          
          a.checkbox-center{
            color: #999;
          }
  
          span.checkbox-val-true{
          }
          span.checkbox-val-false{
            margin-left: -27px;
          }
        }
      }
      &.checkbox-readonly-false{
        div.checkbox-container{
          width: 54px;
        }
      }
      
      div.checkbox-container{
        height: 22px;
        border-radius: 22px;
        background: #dedede;
        border: solid 3px #eee;
        overflow: hidden;
        
        span.checkbox-slider{
          @include box-hori-left-middle;
          width: 88px;
          border-radius: 16px;
          height: 16px;
          background: #eee;
          transition: transform .2s;
          
          &.checkbox-val-true{
            transform: translateX(0);
            a.checkbox-left{
              color: rgba(1, 133, 116, .5);
            }
            a.checkbox-center{
              background: rgba(1, 133, 116, .5);
            }
          }
          &.checkbox-val-false{
            transform: translateX(-29px);
            a.checkbox-center{
              background: rgba(234, 111, 90, .5);
            }
            a.checkbox-right{
              color: rgba(234, 111, 90, .5);
            }
          }
          
          a.checkbox-left{
            width: 31px;
            height: 16px;
            padding-left: 5px;
            padding-top: 1px;
          }
          a.checkbox-center{
            width: 16px;
            height: 16px;
            border-radius: 16px;
            cursor: pointer;
          }
          a.checkbox-right{
            height: 16px;
            width: 31px;
            padding-left: 15px;
            padding-top: 1px;
          }
        }
      }
    }
    
    span.text{
      width: auto;
      padding: 0 10px 0 5px;
      color: #666;
      white-space: nowrap;
      font-size: 12px;
    }
  
    span.spliter{
      font-size: 14px;
      color: #999;
    }
    
    input.input{
      display: block;
      width: 100%;
      height: 20px;
      background: transparent;
      margin: 0 10px;
      cursor: text;
      box-shadow: 50px 50px #fff inset;
    }
    
    span.icon-show{
      @include box-vert-center-middle;
      width: 16px;
      height: 100%;
      font-size: 14px;
      color: #aaa;
      margin-left: 3px;
      transition: color .3s;
      
      &.mail{
        &:hover{
          color: rgba(249, 191, 47, .8);
        }
      }
  
      &.number{
        @include box-vert-right-middle;
        padding-left: 16px;
        height: 32px;
    
        a.arrow{
          width: 16px;
          height: 16px;
          font-size: 14px;
      
          &:hover{
            cursor: pointer;
            transition: color .3s;
            
            &.uper{
              color: #A8C023;
            }
            &.down{
              color: rgba(234, 111, 90, .5);
            }
          }
        }
      }
    }
    span.icon{
      width: 16px;
      height: 16px;
      font-size: 16px;
      color: #333;
      opacity: 0;
      transition: opacify, .3s;
    }
    
    &:hover{
      span.icon{
        opacity: .3;
        
        &:hover{
          opacity: 1.0;
          cursor: pointer;
        }
      }
    }
  }
</style>
