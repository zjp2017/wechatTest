// components/a-com/a-com.js
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
    getFatherFn:function(){
      let obj={va:'123',list:[5,6]};
      let arr=[9,8,7];
      this.triggerEvent('addInfors', { "obj": obj, "arr": arr})
    }
  }
})
