import request from '@/utils/request'
export default {
    //查询名师和热门课程
    getEduAndTeacher() {
    return request({
      url: `/eduservice/indexfront/index`,
      method: 'get'
    })
  }

}