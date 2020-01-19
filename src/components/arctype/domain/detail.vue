<template>
  <div>

    <a-row type="flex" justify="center" :gutter="48">
      <a-col :sm="24" :md="18">
        <!-- 
          <h2 style="text-aglin:center">{{domainDetail[0].}}</h2> -->
        <div class="hotArticle">
          <h1 class="title">{{domainDetail.title}}</h1>
          <a-divider type="horizontal" style="background:#10a1f5"> </a-divider>
          <div v-html="domainDetail.body">{{domainDetail.body}}</div>
        </div>
      </a-col>
      <!-- 分类列表 -->
      <a-col :sm="24" :md="6">
        <a-list bordered :dataSource="domainList" itemLayout="vertical" size="small">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <router-link :to="{ name: 'domainDetail', params:{aid:item.id} }">{{item.title}}</router-link>
          </a-list-item>
          <span slot="header">业务领域
          </span>
        </a-list>
      </a-col>
    </a-row>

  </div>
</template>


<script>
  import http from "@/config/http.js";

  export default {
    name: "index",
    components: {

    },
    data() {
      return {
        domainDetail: [],
        domainList: []
      };
    },
    watch: {
      '$route'(to, from) {
        var aid = to.params['aid'];
        this.getDomainDetail(aid);
      }
    },
    mounted() {
      let aid = this.$route.params.aid;
      // console.log(aid);
      this.getDomainDetail(aid);
      this.getDomainList();
    },
    methods: {
      getDomainDetail(aid) {
        // var params = {
        //   source: "article",
        //   conditions: JSON.stringify([{
        //     fieldName: "aid",
        //     operator: "EQ",
        //     value: aid
        //   }])
        // };
        var params = {
          action: 'search',
          source: 'addonarticle',
          withCode: 'lj',
          withData: JSON.stringify({
            source: 'archives',
            srcKey: 'aid',
            key: 'id',
            whereAlia: 'addonarticle'
          }),
          params: JSON.stringify(
            [{
              condition: 'and',
              data: [{
                condition: 'and',
                data: [{
                  field: 'aid',
                  operator: 'EQ',
                  value: aid
                }]
              }]
            }]
          ),
          resultStatus: 1
        }
        http.get("/doAction.php", params).then(res => {
          this.domainDetail = res.data;
          // console.log(this.domainDetail);
        });
      },
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
                    value: 3
                  },
                  {
                    field: 'arcrank',
                    operator: 'EQ',
                    value: -2
                  }
                ]
              }, ]
            }]
          )
        }
        http.get("/doAction.php", params).then(res => {
          var domainList = res.data;
          var newList = new Array();
          for (let i = 0; i < domainList.length; i++) {
            domainList[i].aid = domainList[i].id;
            newList.push(domainList[i]);
          }
          this.domainList = newList;
        });
      },
      jumpDomainDetail(aid) {
        // console.log(aid);
        this.$router.push({
          name: 'domainDetail',
          params: {
            aid: aid
          }
        })
      }

    }
  };
</script>

<style scoped lang="scss">
  .hotArticle {
    border: 1px solid rgb(192, 192, 192);
    padding: 10px;

    .info {
      text-align: center
    }

    .title {
      text-align: center
    }

  }

  .ant-list {
    width: 100%;


    /deep/ .ant-list-header {

      background-color: #10a1f5;

      span {
        background-color: #10a1f5;
        color: white;
        font-size: 16px;
        font-weight: bold
      }
    }

    .ant-list-item {
      justify-content: center;
      height: 40px;

      a {
        color: #808080;
        line-height: 20px;
        font-size: 12px;
      }

      a:hover {
        color: #fd7e14;
      }
    }
  }
</style>