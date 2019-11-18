import request from '../api/request'

export function sendCodePublic(that, statu) {
    var mobile = that.tel;
    if (mobile) {
        var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
        // 正则匹配，判断手机号格式是否正确
        if (!reg.test(mobile)) {
            that.$toast('手机号格式不正确');
        } else {
            if (that.flag) {
                request('post', '/user/send_sms', {
                    action: statu,
                    mobile: mobile
                }).then(res => {
                    that.flag = false;
                    that.isClick = true;
                    var time = 60;
                    var timer = null;
                    clearInterval(timer);
                    timer = setInterval(() => {
                        time--;
                        if (time <= 0) {
                            clearInterval(timer);
                            time = 60;
                            that.isClick = false;
                            that.flag = true;
                            that.num = time;
                            return;
                        }
                        that.num = time;
                    }, 1000);
                })
            }
        }
    } else {
        that.$toast('请输入手机号');
    }
}