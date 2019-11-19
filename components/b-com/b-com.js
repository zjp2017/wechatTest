// components/b-com/b-com.js
var eventBus = getApp().eventBus;
import bus from 'iny-bus';
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    modify:function(){
      let obj=[66,77,88];
      eventBus.emit('events', obj);
    }
  }
})
