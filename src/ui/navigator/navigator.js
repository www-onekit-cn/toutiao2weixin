// onekit/ui/navigator/navigator.js
Component({
  options: {
    virtualHost: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
    onekitId:{type:String,value:""},
      url:{
      type:String,
      value:""
      },
      delta:{
      type:Number,
      value:0
      },
      openType:{
      type:String,
      value:"navigate"
      },
      hoverClass:{
      type:String,
      value:"navigator-hover"
      },
      hoverStartTime:{
      type:Number,
      value:50
      },
      hoverStayTime:{
      type:Number,
      value:400
      },
      hoverStopPropagation:{
      type:Boolean,
      value:false
      },

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

  }
})