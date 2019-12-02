<template>
  <div>
    <a-card style="width: 100%;margin-top:20px" :bordered=false>
      <a-row :gutter="16">
        <a-col :span="6">
          <a-card :hoverable=true>
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
            <p>广告策划、制作及发布</p>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card :hoverable=true>
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
            <p>影视制作</p>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card :hoverable=true>
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
            <p>编程及系统开发</p>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card :hoverable=true>
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
            <p>新媒体应用及营运</p>
          </a-card>
        </a-col>
      </a-row>
      <template class="ant-card-actions" slot="actions">
        <span>查看更多</span>
      </template>
      <template slot="title">
        <span>业务领域</span>
      </template>
    </a-card>

    <a-card style="width: 100%;margin-top:20px" :bordered=false>
      <template slot="title">
        <span>分支结构</span>
      </template>

      <a-row :gutter="16">
        <a-col :span="8">
          <a-card :hoverable=true>
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
            <p>广告策划、制作及发布</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card :hoverable=true>
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
            <p>影视制作</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card :hoverable=true>
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
            <p>编程及系统开发</p>
          </a-card>
        </a-col>
      </a-row>
    </a-card>

    <a-card style="width: 100%;margin-top:20px" :bordered=false>

      <template class="ant-card-actions" slot="actions">
        <span>查看更多</span>

      </template>
      <template slot="title">
        <span>公司动态</span>
      </template>
    </a-card>

  </div>
</template>

<script>
import infiniteScroll from "vue-infinite-scroll";

const newsList = [
  {
    title: "Ant Design Title 1"
  },
  {
    title: "Ant Design Title 2"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  },
  {
    title: "Ant Design Title 4"
  },
  {
    title: "Ant Design Title 4"
  },
  {
    title: "Ant Design Title 4"
  },
  {
    title: "Ant Design Title 4"
  },
  {
    title: "Ant Design Title 4"
  },
  {
    title: "Ant Design Title 4"
  }
];

export default {
  name: "Index",
  directives: { infiniteScroll },
  data() {
    return {
      newsList: newsList,
      loading: false,
      busy: false,
      listData: [
        {
          title: "无缝滚动第一行无缝滚动第一行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第二行无缝滚动第二行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第三行无缝滚动第三行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第四行无缝滚动第四行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第五行无缝滚动第五行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第六行无缝滚动第六行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第七行无缝滚动第七行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第八行无缝滚动第八行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        }
      ]
    };
  },
  created() {},
  methods: {
    handleInfiniteOnLoad() {
      const data = this.newsList;
      this.loading = true;
      //   if (data.length > 5) {
      //     this.$message.warning("Infinite List loaded all");
      //     this.loading = false;
      //     return;
      //   }
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.banner .ant-carousel >>> .slick-slide {
  text-align: center;
  height: 300px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.home_product {
  width: 100%;
  overflow: hidden;
  padding: 40px 0 60px;
  background-color: #f5f5f5;
  margin-top: 20px;
}

.home_product .ant-carousel >>> .slick-slide {
  width: 100%;
  overflow: hidden;
  padding: 40px 0 60px;
  background-color: #f5f5f5;
  margin-top: 20px;
}

.home-news {
  width: 100%;
  height: 200px;
  background-color: #f5f5f5;
  margin-top: 20px;
}

.live-video {
  width: 100%;
  overflow: hidden;
  background: #f5f5f5;
  margin-top: 20px;
}

/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 400px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
/* 无缝滚动 */
.seamless-warp {
  width: 200px;
  height: 150px;
  overflow: hidden;
}

.seamless-warp ul,
.seamless-warp li {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  list-style-type: none;
}

.seamless-warp li span {
  width: 100%;
  color: black;
}

.seamless-warp3 {
  overflow: hidden;
  height: 140px;
  width: 140px * 4;
  margin: 0 auto;
  .left-arrow,
  .right-arrow {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #00a0e9;
    cursor: pointer;
    &:hover {
      background-color: #0f39fa;
    }
    &::before {
      position: absolute;
      content: "";
      width: 16px;
      height: 16px;
      top: 12px;
      left: 15px;
      border: 2px solid #fff;
    }
  }
  .left-arrow::before {
    border-right: 0;
    border-bottom: 0;
    transform: rotate(-45deg);
  }
  .right-arrow::before {
    border-left: 0;
    border-top: 0;
    left: 9px;
    transform: rotate(-45deg);
  }
  ul.item {
    width: 140px * 8;
    li {
      float: left;
      width: 120px;
      height: 120px;
      margin: 10px;
      line-height: 120px;
      background-color: #999;
      color: #fff;
      text-align: center;
      font-size: 30px;
    }
  }
}

/* li滚动条 */
.demo-infinite-container {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: 300px;
}
.demo-loading-container {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
</style>


