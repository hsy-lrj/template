import request from '@/utils/request'

export default {

  /**
   * 生成订单
   */
  createOrder(courseId) {
    return request({
      url: `/eduorder/order/createOrder/${courseId}`,
      method: 'post'
    })
  },

  /**
   * 根据订单id查询订单
   */
  getOrderInfo(orderId) {
    return request({
      url: `/eduorder/order/getOrderInfo/${orderId}`,
      method: 'get'
    })
  },

  /**
   * 生成微信支付二维码
   */
  createNative(orderNo) {
    return request({
      url: `/eduorder/paylog/createNative/${orderNo}`,
      method: 'get'
    })
  },

  /**
   * 查询订单状态
   */
  queryPayStatus(orderNo) {
    return request({
      url: `/eduorder/paylog/queryPayStatus/${orderNo}`,
      method: 'get'
    })
  },


}