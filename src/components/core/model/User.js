export default function User(user){
  user = user || {}
  this.name = user.name || '朱晋'
  this.photo = user.photo || ''
  this.department = user.department || '研发中心'
}
