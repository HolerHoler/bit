<template>
  <div>
    <div style="width: 80%;padding-top:100px;padding-bottom:100px">
      <a-row :gutter="16" type="flex" justify="center">
        <template v-for="(branch,index) in branchList">
          <a-col :key="index" :xs=24 :md=8>
            <a-card :hoverable=true style="margin-bottom:20px;" v-on:click="jumpArticle(branch.aid)">
              <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                slot="cover" />
              <span style="text-align:center">{{branch.name}}</span>
            </a-card>
          </a-col>
        </template>
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
        branchList: [{
            id: 1,
            name: "无界国际科技有限公司",
            aid: 17
          },
          {
            id: 2,
            name: "广州市名律会信息科技有限责任公司",
            aid: 18
          },
          {
            id: 3,
            name: "广州市法源法律咨询服务有限公司",
            aid: 19
          }
        ]
      };
    },
    // mounted() {
    //   // this.getBranchList();
    // },
    methods: {
      getBranchList: function () {
        var params = {
          source: "archives",
          conditions: JSON.stringify([{
            fieldName: "typeid",
            operator: "EQ",
            value: 5
          }])
        };
        http.get("/restController.php", params).then(res => {
          console.log(res.data);
        })
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

<style scoped>
</style>