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
                  style="width:160px; height:120px" />
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </a-col>
        <a-col>
          <a-pagination size="small" showQuickJumper :total="50" :showTotal="total=> `Total ${total} items`" />
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
      };
    },
    mounted() {
      this.getDynamicList();
    },
    methods: {
      getDynamicList() {
        var params = {
          source: "archives",
          conditions: JSON.stringify([{
            fieldName: "typeid",
            operator: "EQ",
            value: 6
          }])
        };
        http.get("/restController.php", params).then(res => {
          this.dynamicList = res.data;
          console.log(res.data);
        });
      },
      timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        console.log(date);
        return Y + M + D + h + m + s;
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