<template>
  <div :class="clsName" class="layout">
    <slot></slot>
  </div>
</template>

<script>
  export default{
    name: 'jm-layout',
    
    props: ['orient', 'align', 'valign'],

    props: {
    	orient: {
    		type: String,
        default: 'hori'
      },
      align: {
    		type: String,
        default: 'left' // left | center | right
      },
      valign: {
    		type: String,
        default: 'center' //top | center | bottom
      }
    },
    
    data(){
      return {
        clsName: this.orient + '-' + this.align + '-' + this.valign
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import '~@/assets/style/master';

  div.layout{
    display: block;
    position: relative;
    transition: width .3s, height .3s;

    /*水平方向*/
    &.hori-left-top{
      @include box-hori-left-top;
    }
    &.hori-left-center{
      @include box-hori-left-middle;
    }
    &.hori-left-bottom{
      @include box-hori-left-bottom;
    }

    &.hori-center-top{
      @include box-hori-center-top;
    }
    &.hori-center-center{
      @include box-hori-center-middle;
    }
    &.hori-center-bottom{
      @include box-hori-center-bottom;
    }

    &.hori-right-top{
      @include box-hori-right-top;
    }
    &.hori-right-center{
      @include box-hori-right-middle;
    }
    &.hori-right-bottom{
      @include box-hori-right-bottom;
    }

    /*垂直方向*/
    &.vert-left-top{
      @include box-vert-left-top;
    }
    &.vert-left-center{
      @include box-vert-left-middle;
    }
    &.vert-left-bottom{
      @include box-vert-left-bottom;
    }

    &.vert-center-top{
      @include box-vert-center-top;
    }
    &.vert-center-center{
      @include box-vert-center-middle;
    }
    &.vert-center-bottom{
      @include box-vert-center-bottom;
    }

    &.vert-right-top{
      @include box-vert-right-top;
    }
    &.vert-right-center{
      @include box-vert-right-middle;
    }
    &.vert-right-bottom{
      @include box-vert-right-bottom;
    }
  }
</style>
