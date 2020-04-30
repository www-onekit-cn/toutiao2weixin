import tt from "../../../../onekit/tt"
const app = getApp()
const util = require('../../../../util/util.js')
const backgroundAudioManager = wx.getBackgroundAudioManager()
Page({
  onShareAppMessage() {
    return {
      title: '背景音乐',
      path: 'page/API/pages/background-audio/background-audio'
    }
  },

  onMusicTap:function(){
    console.log(1);
      backgroundAudioManager.title = '此时此刻';
      backgroundAudioManager.epname = '此时此刻';
      backgroundAudioManager.singer = '许巍';
      backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000';
      // 设置了 src 之后会自动播放
      backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
      backgroundAudioManager.play();
      backgroundAudioManager.onPlay(() => {
            console.log("音乐播放开始");
        })
      backgroundAudioManager.onEnded(() => {
            console.log("音乐播放结束");
        })
    }
})
