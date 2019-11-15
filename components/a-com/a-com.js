// components/a-com/a-com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Number,
      value:'默认的',
      observer: function(newVal,oldVal){ //监听传过来值得变化
        // this.setDataFn(); //调用自己的方法
        this.setData({  //将传过来的值设置成自己的值
          propsData: newVal
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    propsData:'213',
    vals:'aaa'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setDataFn(){
      console.log('ss');
    }
  },
  created:function(){
    console.log('created');
  },
  attached:function(){
   
    console.log('attached');
  },
  ready: function () {
    console.log('ready');
    console.log(this.properties);
  }
})
