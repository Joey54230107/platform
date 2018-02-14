function openWin(param){
  let
    path = param.path || '',
    query = param.query || {}
  
  if(path){
    this.$router.push({
      path: path,
      query: query
    })
  }
}

export default {
  openWin
}
