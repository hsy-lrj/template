<template>
  <div>
    <!-- 幻灯片 开始 -->
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="banner in bannerList"
          :key="banner.id"
          class="swiper-slide"
          style="background: #040B1B;"
        >
          <a target="_blank" :href="banner.linkUrl">
            <img :src="banner.imageUrl" :alt="banner.title" />
          </a>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </div>
    <!-- 幻灯片 结束 -->

    <div id="aCoursesList">
      <!-- 网校课程 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">热门课程</span>
            </h2>
          </header>
          <div>
            <article class="comm-course-list">
              <ul class="of" id="bna">
                <li v-for="edu in eduList" :key="edu.id">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img :src="edu.cover" class="img-responsive" :alt="edu.title" />
                      <div class="cc-mask">
                        <a href="#" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <a
                        href="#"
                        :title="edu.title"
                        class="course-title fsize18 c-333"
                      >{{edu.title}}</a>
                    </h3>
                    <section class="mt10 hLh20 of">
                      <span class="fr jgTag bg-green" v-if="Number(edu.price)===0">
                        <i class="c-fff fsize12 f-fA">免费</i>
                      </span>
                      <span class="fr jgTag bg-green" v-else>
                        <i class="c-fff fsize12 f-fA">￥{{edu.price}}</i>
                      </span>
                      <span class="fl jgAttr c-ccc f-fA">
                        <i class="c-999 f-fA">{{edu.buyCount}} 人学习</i>
                        |
                        <i class="c-999 f-fA">{{edu.viewCount}} 人浏览</i>
                      </span>
                    </section>
                  </div>
                </li>
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="#" title="全部课程" class="comm-btn c-btn-2">全部课程</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校课程 结束 -->
      <!-- 网校名师 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">名师大咖</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="teacher in teacherList" :key="teacher.id">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                        <a :href='"/teacher/"+teacher.id' :title="teacher.name">
                        <img :alt="teacher.name" :src="teacher.avatar" />
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                       <a :href='"/teacher/"+teacher.id' :title="teacher.name" class="fsize18 c-666">{{teacher.name}}</a>
                    </div>
                    <div class="hLh30 txtOf tac">
                      <span class="fsize14 c-999">{{teacher.intro}}</span>
                    </div>
                    <div class="mt15 i-q-txt">
                      <p class="c-999 f-fA">{{teacher.career}}</p>
                    </div>
                  </section>
                </li>
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="#" title="全部讲师" class="comm-btn c-btn-2">全部讲师</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校名师 结束 -->
    </div>
  </div>
</template>

<script>
import banner from "@/api/banner";
import index from "@/api/index";
export default {
  data() {
    return {
      swiperOption: {
        //配置分页
        pagination: {
          el: ".swiper-pagination", //分页的dom节点
        },
        //配置导航
        navigation: {
          nextEl: ".swiper-button-next", //下一页dom节点
          prevEl: ".swiper-button-prev", //前一页dom节点
        },
      },
      //banner数组
      bannerList: [],
      eduList: [],
      teacherList: [],
    };
  },

  created() {
    //调用查询banner的方法
    this.getListBanner();
    //调用查询名师和热门课程
    this.getEduAndTeacher();
  },

  methods: {
    /**
     * banner方法
     */
    getListBanner() {
      banner.getListBanner().then((response) => {
        this.bannerList = response.data.data.list;
      });
    },
    /**
     * 获取名师和热门课程方法
     */
    getEduAndTeacher() {
      index.getEduAndTeacher().then((response) => {
        this.eduList = response.data.data.eduCourseList;
        this.teacherList = response.data.data.eduTeacherList;
      });
    },
  },
};
</script>