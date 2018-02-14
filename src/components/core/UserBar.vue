<template>
  <ul class="user-case">
    <li class="circle user-photo">
      <span class="user-photo-default fa fa-github" v-if="!user.photo"></span>
    </li>
    <li class="user-info auto-fill">
      <h1 class="user-name f14">{{user.name}}</h1>
      <h2 class="user-department f12">{{user.department}}</h2>
    </li>
    <li class="circle user-exit">
      <span class="user-exit-icon fa fa-desktop"></span>
    </li>
  </ul>
</template>

<script>
  export default{
    name: 'jm-user-bar',
    
    props: ['user'],
    
    methods: {

    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import '~@/assets/style/master';

  ul.user-case{
    @include box-hori-left-middle;
    transition: opacity 1s;
    width: auto;
    height: 40px;
    opacity: .4;
    border-radius: 40px;
    background: rgba(255,255,255,.7);

    &:hover{
      opacity: 1;
    }
  }

  li.circle{
    width: 36px;
    height: 36px;
    border-radius: 36px;
    margin: 2px;
    overflow: hidden;
  }

  li.user-photo{
    span.user-photo-default{
      width: 36px;
      height: 36px;
      color: #666;
      text-align: center;
      line-height: 36px;
      font-size: 36px;
    }
  }

  li.user-info{
    width: auto;
    min-width: 100px;
  }

  li.user-exit{
    @include box-vert-center-middle;
    width: 34px;
    height: 34px;
    margin: 3px 4px;
    background: rgba(0,0,0,.25);
    text-align: center;
    padding-top: 2px;
    color: #ea6f5a;

    &:hover{
      background: #ea6f5a;
      cursor:pointer;
      color: #fff;
    }

    span{
      font-size: 18px;
    }
  }

  h1.user-name{
    margin-top: -2px;
    padding-left: 5px;
  }

  h2.user-department{
    color: #666;
    padding-left: 5px;
  }
</style>
