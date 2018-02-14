<template>
  <div class="side-bar">
    <div :class="'side-bar-' + direct">
      <icon class="icon-case" :direct="direct" :align="align" v-for="(bar, index) in bars" :icon="bar" :key="bar.id"></icon>
    </div>
  </div>
</template>

<script>
  import icon from '@/components/core/Icon'
  
  export default{
    name: 'jm-sider',
  
    props: ['dir', 'bars'],
    
    data(){
      let dir = this.dir.replace(/\s/g, '').split('|')
      
      return {
        direct: dir[0],
        align: dir[1]
      }
    },
    
    components: {
      icon
    },
    
    methods: {}
  }
</script>

<style lang="scss" type="text/scss">
  @import '~@/assets/style/master';

  div.side-bar{
    height: 100%;
    @include box-vert-center-middle;
  }
  
  div.side-bar-vert{
    width: 64px;
    height: auto;
    background: transparent;
    border-radius: 10px;
    transition: background .3s;
    padding: 8px 4px 0;
  
    &:hover{
      background: rgba(255,255,255,.05);
    }
  }

  div.side-bar-hori{
    @include box-hori-center-bottom;
    width: auto;
    position: absolute;
    bottom: 0;
    height: 64px;
    background: transparent;
    border-radius: 10px;
    transition: background .3s;
    padding: 8px 4px 0;
    text-align: center;
  
    &:hover{
      background: rgba(255,255,255,.05);
    }
  }
</style>
