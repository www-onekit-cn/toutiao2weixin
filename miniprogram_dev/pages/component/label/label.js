import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    data:{
        checkboxItems:[
            {
                name:'tt',
                value:'头条'
            },
            {
                name:'xigua',
                value:'西瓜视频',
                checked:'true'
            }
        ],
        radioItems:[
            {
                name:'Toutiao',
                value:'头条'
            },
            {
                name:'Xigua',
                value:'西瓜视频',
                checked:'true'
            }
        ],
        hidden:false
    },
    checkboxChange:function(e){
        var checked = e.detail.value;
        var changed = {};
        for(var i = 0;(i < this.data.checkboxItems.length);i++){
        if((checked.indexOf(this.data.checkboxItems[i].name) !== -1)){
            changed[((('checkboxItems[' + i)) + '].checked')] = true;
        } else {
            changed[((('checkboxItems[' + i)) + '].checked')] = false;
        }
    };
        this.setData(changed);
    },
    radioChange:function(e){
        var checked = e.detail.value;
        var changed = {};
        for(var i = 0;(i < this.data.radioItems.length);i++){
        if((checked.indexOf(this.data.radioItems[i].name) !== -1)){
            changed[((('radioItems[' + i)) + '].checked')] = true;
        } else {
            changed[((('radioItems[' + i)) + '].checked')] = false;
        }
    };
        this.setData(changed);
    },
    tapEvent:function(e){
        console.log('按钮被点击');
    }
});
