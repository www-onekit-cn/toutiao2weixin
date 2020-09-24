/* eslint-disable camelcase */
// onekit/ui/radio-group/radio-group.js
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior],
  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
  properties: {

  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      // this.selectComponent('radio')
      // let child = this.selectComponent(".radio-child");
      // console.log("child",child);
    },
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  observers: {

  },
  /**
   * 组件的方法列表
   */
  methods: {

    radio_click() {
      // console.log(e)
      this.createSelectorQuery().in(this).selectAll('.radio-group').boundingClientRect(function () {
        // console.log('createSelectorQuery', e)
      })
        .exec()
    //  console.log("radios",radios);
      // this.triggerEvent("Change",{})
    },
    radio_groupBindchange() {
      this.triggerEvent('Change', {})
    }

  }
})
