const EventEmitter = require('events')

const event = new EventEmitter()


// 监听事件
function fn(...data){
  console.log('有人触发事件', ...data)
}
event.on('korea', fn)
event.on('korea1', fn)


// 发射事件
event.emit('korea', {
  name: 'korea',
  age: 24
}, 'korea')
event.emit('korea1', {
  name: 'korea',
  age: 24
})

// 获取到所有事件名
console.log(event.eventNames())
// 获取最大可发射的事件总数
console.log(event.getMaxListeners());
// 获取一个事件监听器的个数
console.log(event.listenerCount('korea'))
console.log(event.listeners('korea'))

// 取消监听
// event.off('korea', fn)
