import Vue from 'vue'
import Vuex from 'vuex'

let
  mutations = {
    setNav,
    setDialogIndex,
		setCurrPage,

		addCurrDialog,
		removeCurrDialog
  },
  state = {
    user: {},
    dialog: {
      z: 1000 //对话框窗口z-index值
    },
		currPage: '',  //设置当前主窗口显示的页面
		currDialogs: []
  }

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})

function setNav(state, navs){
  state.navs = navs
}

function setCurrPage(state, comp){
  comp && (state.currPage = comp)
}

function addCurrDialog(state, comp){
	comp && (state.currDialogs.push(comp))
}

function removeCurrDialog(state){
	state.currDialogs.length > 0 && state.currDialogs.splice(state.currDialogs.length - 1, 1)
}

function setDialogIndex(state, seed){
  if(seed == null || seed == undefined){
    ++ state.dialog.z
  }else{
    state.dialog.z = state.dialog.z + seed
  }
}
