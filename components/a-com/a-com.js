// components/a-com/a-com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   ref:{
     type:Number,
     value:0,
     observer:function(newVal,oldVal){
       console.log(newVal);
     }
   }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tag:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    modify:function(){
      console.log(this.data.tag);
      if (this.data.tag==1){
        let msg='第一处返回的值'
        this.triggerEvent('handleFn1', msg);
      }else{
        let msg = '第二处返回的值'
        this.triggerEvent('handleFn2', msg);
      }
    }
  },
  ready(){
    console.log(this.properties.ref);
    this.data.tag = this.properties.ref;
  }
})
