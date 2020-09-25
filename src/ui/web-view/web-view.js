/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
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
    src: {
      type: String,
      value: 'N/A'
    },
    progressbarColor: {
      type: String,
      value: '#51a0d8'
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
    webView_message() {
      this.triggerEvent('Message')
    },
    webView_load() {
      this.triggerEvent('Load')
    },
    webView_error() {
      this.triggerEvent('Error')
    },

  }
})
