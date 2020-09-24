/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = Behavior({

  properties: {

  },
  methods: {
    ui_tap(tt_e) {
      console.log('ui_tap')
      this.triggerEvent('tap', tt_e)
    },
    ui_touchstart(tt_e) {
      console.log('ui_touchstart')
      this.triggerEvent('touchstart', tt_e)
    },
    ui_touchmove(tt_e) {
      console.log('ui_touchmove')
      this.triggerEvent('touchmove', tt_e)
    },
    ui_touchcancel(tt_e) {
      console.log('ui_touchcancel')
      this.triggerEvent('touchcancel', tt_e)
    },
    ui_touchend(tt_e) {
      console.log('ui_touchend')
      this.triggerEvent('touchend', tt_e)
    },
    ui_longpress(tt_e) {
      console.log('ui_longpress')
      this.triggerEvent('longpress', tt_e)
    },
    ui_longtap(tt_e) {
      console.log('ui_longtap')
      this.triggerEvent('longtap', tt_e)
    },
    ui_transitionend(tt_e) {
      console.log('ui_transitionend')
      this.triggerEvent('transitionend', tt_e)
    },
    ui_animationstart(tt_e) {
      console.log('ui_animationstart')
      this.triggerEvent('animationstart', tt_e)
    },
    ui_animationiteration(tt_e) {
      console.log('ui_animationiteration')
      this.triggerEvent('animationiteration', tt_e)
    },
    ui_animationend(tt_e) {
      console.log('ui_animationend')
      this.triggerEvent('animationend', tt_e)
    },
    ui_touchforcechange(tt_e) {
      console.log('ui_touchforcechange')
      this.triggerEvent('touchforcechange', tt_e)
    },
  },
})