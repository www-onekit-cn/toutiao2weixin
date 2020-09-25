/* eslint-disable camelcase */
// onekit/ui/picker/picker.js
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
    disabled: {type: Boolean, value: false},
    mode: {type: String, value: 'selector'},
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
    picker_cancel() {
      this.triggerEvent('Cancel')
    }
  }
})
