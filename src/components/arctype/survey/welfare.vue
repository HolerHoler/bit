<template>
  <div>
    <!-- <a-row type="flex" justify="center">
      <a-col :span="12">
        <a-form class="searchForm">
          <a-input-search placeholder="input search text" size="large" style="width:100%">
            <a-button slot="enterButton">搜索</a-button>
          </a-input-search>
        </a-form>
      </a-col>
    </a-row> -->
    <a-row type="flex" justify="center">
      <a-col :span="24">
        <a-list itemLayout="vertical" size="large" :dataSource="dynamicList" style="width:100%" :split=false
          class="dynamicList">
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
      </a-col>
      <a-col>
        <!-- <a-pagination size="large" showQuickJumper :total="50" :showTotal="total=> `Total ${total} items`" /> -->
        <a-pagination size="large" @change="onPageChange" :current="pagination.page" :pageSize="pagination.pageSize"
          :total="pagination.total" />
      </a-col>
    </a-row>

  </div>

</template>


<script>
  import http from "@/config/http.js";
  import baseInfo from "@/config/baseInfo.js";

  export default {
    name: "team",
    data() {
      return {
        baseUrl: baseInfo.baseUrl,
        dynamicList: null,
        pagination: {
          page: 1,
          pageSize: 8,
          total: 50
        }
      };
    },
    mounted() {
      this.getDynamicList(this.pagination.page, this.pagination.pageSize);
    },
    methods: {
      getDynamicList(page, pageSize) {
        var params = {
          source: "welfare",
          conditions: JSON.stringify([{
            fieldName: "typeid",
            operator: "EQ",
            value: 6
          }]),
          page: page,
          pageSize: pageSize,
        };
        http.get("/test.php?action=dynamicList&typeid=10", params).then(res => {
          var resData = res.data;
          console.log(resData);
          this.dynamicList = resData.data;

          this.pagination = {
            page: resData.page,
            pageSize: resData.pageSize,
            total: resData.total,
          }
        });
      },
      onPageChange(page, pageSize) {
        console.log(page, pageSize);
        this.getDynamicList(page, pageSize);
      },

      jumpArticle(aid) {
        this.$router.push({
          name: 'hotArticle',
          params: {
            aid: aid
          }
        })
      }
    }
  };
</script>

<style scoped lang="scss">
  .searchForm {
    margin-top: 20px;
  }

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
      font-size: 22px;
      font-weight: 600;
    }

    .ant-list-item a {
      color: #000;
    }

    .ant-list-item a:hover {
      color: #fd7e14;
    }
  }
</style>