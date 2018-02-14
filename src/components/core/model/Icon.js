export default function Icon(menu){
  this.id = Symbol('icon_id')
  this.menu = menu || {}
  this.state = {
    m_down: false,
    m_up: false,
    m_over: false,
    m_leave: false,
    m_move: false,
    show_tip: false
  }
  this.empty = !!!menu
}
