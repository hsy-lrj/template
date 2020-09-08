import request from '@/utils/request'

export default {
    //条件分页查询课程
    getFrontCoursePageList(page,limit,courseFrontVo) {   
    return request({
      url: `/eduservice/coursefront/getFrontCoursePageList/${page}/${limit}`,
      method: 'post',
      data: courseFrontVo,
    })
  },
  //查询所有分类
  getSubjectList(){
    return request({
        url: `/eduservice/subject/list`,
        method: 'get'
      })
  },
  //查询课程详情
  getFrontCourseInfo(courseId){
    return request({
      url: `/eduservice/coursefront/getFrontCourseInfo/${courseId}`,
      method: 'get'
    })
  }
}