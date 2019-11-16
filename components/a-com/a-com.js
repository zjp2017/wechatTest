// components/a-com/a-com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ref:{
      type:Number,
      value:1,
      observer:function(newVal,oldVal){
        // console.log(newVal);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    modify:function(){
      let n=this.data.num+1;
      this.setData({
        num:n
      })
    }
  },
  observers:{
    num:function(val){
      console.log(val);
    },
    ref: function (val){
      console.log(val);//监听传过来的值，只有newvlaue
    }
  }
})
