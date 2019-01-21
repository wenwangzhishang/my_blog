import Vue from 'vue'
import Component from './func.js';


const NotificationConstructor = Vue.extend(Component)
let seed = 1
let instance
let instances = []
const notify = (options) => {
  if (Vue.prototype.$isServer) return  //服务端环境不使用
    instance = new NotificationConstructor({
    propsData: options
  });

  const id = `notification_${seed++}`
  instance.id = id
  const  component = instance.$mount() //返回实例自身vm
  document.body.appendChild(component.$el) //如果没有提供参数，模板将被渲染为文档之外的的元素，必须使用原生 DOM API 把它插入文档中
  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  return component
}




export default notify
