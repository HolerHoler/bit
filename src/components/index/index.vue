<template>
  <div>

    <!-- 领域 -->
    <a-row type="flex" justify="center">
      <a-card style="width: 100%" :bordered="false" class="card1">

        <a-list :grid="{ gutter: 16, xs: 1, sm: 1,md:4}" :dataSource="domainList" v-if="domainList!=null">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-card :hoverable=true @click="jumpDomainDetail(item.id)">
              <img alt="example" :src="baseUrl+item.litpic" slot="cover" />
              <a-card-meta>
                <template slot="title">
                  <div style="text-align:center"> <span style="font-size:16px;font-weight:bold">{{item.title}}</span>
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-list-item>
        </a-list>


        <template class="ant-card-actions" slot="actions">
          <a-button type="primary" size="large" shape="round">
            <router-link :to="{path:'/domain'}">查看更多</router-link>
          </a-button>
        </template>
        <template slot="title">
          <div class="c-title">
            <span class="title-cn">业务领域</span><br />
            <span class="title-en">Business areas</span>
          </div>
        </template>

      </a-card>
    </a-row>

    <!-- 分支 -->
    <a-row type="flex" justify="center">
      <a-card style="width: 100%;margin-top:40px" :bordered=false class="card1">
        <a-list :grid="{ gutter: 16, xs: 1, sm: 1,md:3}" :dataSource="branchList">

          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-card :hoverable=true @click="jumpBranchDetail(item.id)">
              <img alt="example" :src="baseUrl+item.litpic" slot="cover" />
              <a-card-meta>
                <template slot="title">
                  <div style="text-align:center"> <span style="font-size:16px;font-weight:bold">{{item.title}}</span>
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-list-item>

        </a-list>
        <template slot="title">
          <div class="c-title">
            <span class="title-cn">分支结构</span><br />
            <span class="title-en">Branch</span>
          </div>
        </template>
      </a-card>
    </a-row>

    <!-- 动态 -->
    <a-row type="flex" justify="center">
      <a-card style="width: 100%;margin-top:40px;" :bordered=false class="card1">

        <a-list :grid="{ gutter: 16, xs: 1, sm: 1,lg:2}" :dataSource="dynamicList" class="dynamicList">
          <a-list-item slot="renderItem" slot-scope="item, index" key="item.title">
            <a-list-item-meta>
              <div slot="description">
                <p class="description">
                  {{item.description}}
                </p>
                <p>{{item.shorttitle}}</p>
              </div>
              <a slot="title">
                <router-link :to="{ name: 'hotArticle', params:{aid:item.id} }">{{item.title}}</router-link>
              </a>
              <a-avatar slot="avatar" :src="baseUrl+item.litpic" style="width:150px; height:120px" shape="square" />
            </a-list-item-meta>
          </a-list-item>
        </a-list>

        <template class="ant-card-actions" slot="actions">
          <a-button type="primary" size="large" shape="round">
            <router-link :to="{path:'/dynamic'}">查看更多</router-link>
          </a-button>
        </template>
        <template slot="title">
          <div class="c-title">
            <span class="title-cn">公司动态</span><br />
            <span class="title-en">Company dynamic</span>
          </div>
        </template>
      </a-card>
    </a-row>
  </div>

</template>

<script>
  import infiniteScroll from "vue-infinite-scroll";

  import http from "@/config/http.js";
  import baseInfo from "@/config/baseInfo.js";

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
        baseUrl: baseInfo.baseUrl,
        newsList: newsList,
        loading: false,
        busy: false,
        branchList: [],
        domainList: [],
        dynamicList: [],
      };
    },
    created() {},
    mounted() {console.log(1);
      this.getDomainList();
      this.getBranchList();
      this.getDynamicList();
    },
    methods: {
      handleInfiniteOnLoad() {
        const data = this.newsList;
        this.loading = true;
        //   if (data.length > 5) {
        //     this.$message.warning("Infinite List loaded all");
        //     this.loading = false;
        //     return;
        //   }

      },
      // 获取业务领域
      getDomainList() {
        // var params = {
        //   source: "archives",
        //   conditions: JSON.stringify([{
        //     fieldName: "typeid",
        //     operator: "EQ",
        //     value: 3
        //   }, {
        //     fieldName: "arcrank",
        //     operator: "EQ",
        //     value: -2
        //   }])
        // };
        var params = {
          action: 'search',
          source: 'archives',
          params: JSON.stringify(
            [{
              condition: 'and',
              data: [{
                condition: 'and',
                data: [{
                    field: 'typeid',
                    operator: 'EQ',
                    value: '3'
                  },
                  {
                    field: 'arcrank',
                    operator: 'EQ',
                    value: '-2'
                  }
                ]
              }]
            }]
          )
        }
        http.get("/doAction.php", params).then(res => {
          var domainList = res.data;
          this.domainList = domainList.slice(0, 4);
          // console.log(this.domainList);
        });
      },
      // 获取分支机构
      getBranchList() {
        // var params = {
        //   source: "archives",
        //   conditions: JSON.stringify([{
        //     fieldName: "typeid",
        //     operator: "EQ",
        //     value: 5
        //   }])
        // };
        var params = {
          action: 'search',
          source: 'archives',
          params: JSON.stringify(
            [{
              condition: 'and',
              data: [{
                condition: 'and',
                data: [{
                  field: 'typeid',
                  operator: 'EQ',
                  value: '5'
                }]
              }]
            }]
          )
        }
        http.get("/doAction.php", params).then(res => {
          this.branchList = res.data;
        })
      },
      // 获取公司动态
      getDynamicList() {
        var params = {
          action: 'dynamicList',
          data: JSON.stringify({
            typeId: 6
          }),
          page: 1,
          pageSize: 4,
        };
        http.get("/doAction.php", params).then(res => {
          var resData = res.data;
          // console.log(this.domainList);
          this.dynamicList = resData.data.slice(0, 4);
          // console.log(this.domainList);
          this.pagination = {
            page: resData.page,
            pageSize: resData.pageSize,
            total: resData.total,
          }
        });
      },
      // 分支跳转
      jumpBranchDetail(aid) {
        this.$router.push({
          name: 'branchDetail',
          params: {
            aid: aid
          }
        })
      },
      // 领域跳转
      jumpDomainDetail(aid) {
        this.$router.push({
          name: 'domainDetail',
          params: {
            aid: aid
          }
        })
      }
    },
    components: {}
  };
</script>

<style lang="scss" scoped>
  .dynamicList {
    width: 100%;

    .description {
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .ant-list-item .ant-list-item-meta-title {
      font-weight: bold;
      font-size: 16px;
      font-weight: 600;
    }

    .ant-list-item a {
      color: #000;
    }

    .ant-list-item a:hover {
      color: #fd7e14;
    }
  }

  .card1 {
    /deep/ .ant-card-head {
      border: none;
    }

    /deep/ .ant-card-actions {
      border: none;
      background: #ffffff;
    }

    .c-title {
      text-align: center;
      color: black;

      .title-cn {
        font-weight: bold;
        font-size: 35px;
      }

      .title-en {
        font-size: 20px;
      }
    }
  }
</style>