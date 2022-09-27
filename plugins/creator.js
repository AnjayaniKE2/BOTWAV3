let handler = function (m) {
  // this.sendContact(m.chat, '6283877050507', 'Nurutomo', m)
  conn.sendContact(m.chat, '6283877050507', 'Arie Tube', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
