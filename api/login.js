import request from '@/utils/request'
export default {
  //登录
  submitLogin(ucenterMember) {
    return request({
      url: `/educenter/member/login`,
      method: 'post',
      data: ucenterMember
    })
  },
  //根据token获取用户信息
  getLoginInfo() {
    return request({
      url: `/educenter/member/getMemberInfo`,
      method: 'get',
    })
  }
}