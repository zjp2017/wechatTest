// components/a-com/a-com.js
var eventBus = getApp().eventBus;
console.log(eventBus);
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    arr:[12,65,98],
    user:'ss'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes:{
    created:function(){
      eventBus.on('events',(res)=>{
        console.log(res);
        this.setData({
          arr: res
        })
      });
    },
    ready:function(){
      eventBus.on('events', (res) => {
        console.log(res);
      });
    }
  },
  pageLifetimes:{
    show(){
      eventBus.on('events', (res) => {
        console.log(res);
      });
    }
  }
})
