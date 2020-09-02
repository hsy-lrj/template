import request from '@/utils/request'
export default {
    //查询banner的数据
  getListBanner() {
    return request({
      url: `/cmsservice/bannerfront/getAllBanner`,
      method: 'get'
    })
  }

}