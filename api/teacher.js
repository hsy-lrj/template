import request from '@/utils/request'

export default {
    //分页查询讲师
    getTeacherFrontListPage(page, limit) {   
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontListPage/${page}/${limit}`,
      method: 'post'
    })
  },
  //讲师详情功能
  getTeacherFrontInfo(teacherId){
    return request({
        url: `/eduservice/teacherfront/getTeacherFrontInfo/${teacherId}`,
        method: 'get'
      })
  }
}