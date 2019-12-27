<template>
  <div>
    <div style="width: 80%;padding-top:100px;padding-bottom:100px">
      <a-row type="flex" justify="center">
        <a-col :span="12">
          <a-form class="searchForm">
            <a-input-search placeholder="input search text" size="large" style="width:100%">
              <a-button slot="enterButton">搜索</a-button>
            </a-input-search>
          </a-form>
        </a-col>
      </a-row>
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
                <a slot="title" @click="jumpArticle(item.id)">
                  <h3>{{item.title}}</h3>
                </a>
                <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  style="width:150px; height:120px" />
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
  </div>

</template>


<script>
  import http from "@/config/http.js";

  export default {
    name: "index",
    data() {
      return {
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
          source: "archives",
          conditions: JSON.stringify([{
            fieldName: "typeid",
            operator: "EQ",
            value: 6
          }]),
          page: page,
          pageSize: pageSize,
        };
        http.get("/test.php?action=dynamicList&typeid=6", params).then(res => {
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
  }
</style>