import request from '@/utils/request'

export default {
  //根据手机号码发送短信
  sendMsm(phone) {
    return request({
      url: `/edumsm/msm/sendMsm/${phone}`,
      method: 'get'
    })
  },
  //用户注册
  registerUser(formItem) {
    return request({
      url: `/educenter/member/register`,
      method: 'post',
      data: formItem
    })
  }
}