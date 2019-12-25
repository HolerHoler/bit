<template>
  <div>
    <div style="width: 80%;padding-top:100px;padding-bottom:100px">
      <!-- 领域 -->
      <a-row type="flex" justify="center">
        <a-card style="width: 100%" :bordered="false">
          <a-row :gutter="16">
            <a-col :span="6" :xs="24">
              <a-card :hoverable=true>
                <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover" />
                <p>广告策划、制作及发布</p>
              </a-card>
            </a-col>
            <a-col :span="6" :xs="24">
              <a-card :hoverable=true>
                <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover" />
                <p>影视制作</p>
              </a-card>
            </a-col>
            <a-col :span="6" :xs="24">
              <a-card :hoverable=true>
                <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover" />
                <p>编程及系统开发</p>
              </a-card>
            </a-col>
            <a-col :span="6" :xs="24">
              <a-card :hoverable=true>
                <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover" />
                <p>新媒体应用及营运</p>
              </a-card>
            </a-col>
          </a-row>
          <template class="ant-card-actions" slot="actions">
            <span>查看更多</span>
          </template>
          <template slot="title">
            <div class="c-title">
              <span>业务领域</span><br />
              <span>Business areas</span>
            </div>
          </template>

        </a-card>
      </a-row>

      <!-- 分支 -->
      <a-row type="flex" justify="center">
        <a-card style="width: 100%;margin-top:40px" :bordered=false>
          <a-row :gutter="16">
            <a-col :span="8" :xs="24">
              <a-card :hoverable=true>
                <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover" />
                <p>广告策划、制作及发布</p>
              </a-card>
            </a-col>
            <a-col :span="8" :xs="24">
              <a-card :hoverable=true>
                <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover" />
                <p>影视制作</p>
              </a-card>
            </a-col>
            <a-col :span="8" :xs="24">
              <a-card :hoverable=true>
                <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover" />
                <p>编程及系统开发</p>
              </a-card>
            </a-col>
          </a-row>
          <template slot="title">
            <div class="c-title">
              <span>分支结构</span>
              <span>Branch</span>
            </div>
          </template>
        </a-card>
      </a-row>
      <!-- 动态 -->
      <a-row type="flex" justify="center">
        <a-card style="width: 100%;margin-top:40px;" :bordered=false>

          <a-list :grid="{ gutter: 16, xs: 1, sm: 1,lg:2}" :dataSource="newsList">
            <a-list-item slot="renderItem" slot-scope="item, index">
              <a-list-item-meta>
                <!-- <div slot="description">
                  <p class="description">
                    {{item.description}}
                  </p>
                  <p>{{item.shorttitle}}</p>
                </div> -->
                <a slot="title" @click="jumpArticle(item.id)">
                  <h3>{{item.title}}</h3>
                </a>
                <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  style="width:160px; height:120px" />
              </a-list-item-meta>
            </a-list-item>
          </a-list>

          <template class="ant-card-actions" slot="actions">
            <span>查看更多</span>
          </template>
          <template slot="title">
            <div class="c-title">
              <span>公司动态</span><br />
              <span>Company dynamic</span>
            </div>
          </template>
        </a-card>
      </a-row>
    </div>
  </div>

</template>

<script>
  import infiniteScroll from "vue-infinite-scroll";

  const newsList = [{
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
    directives: {
      infiniteScroll
    },
    data() {
      return {
        newsList: newsList,
        loading: false,
        busy: false,
        listData: [{
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
  .dynamicList {
    width: 80%;
    margin-top: 20px;

    .description {
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
</style>