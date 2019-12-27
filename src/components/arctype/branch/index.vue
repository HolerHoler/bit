<template>
  <div>
    <div style="width: 80%;padding-top:100px;padding-bottom:100px">
      <a-list :grid="{ gutter: 16, xs: 1, sm: 1,md:3}" :dataSource="branchList">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-card :hoverable=true @click="jumpBranchDetail(item.id)">
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />

            <a-card-meta>
              <template slot="title">
                <div style="text-align:center"> <span style="font-size:14px">{{item.title}}</span></div>
              </template>
            </a-card-meta>
          </a-card>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>


<script>
  import http from "@/config/http.js";

  export default {
    name: "index",
    data() {
      return {
        branchList: null,
      };
    },
    mounted() {
      this.getBranchList();
    },
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
        http.get("/test.php?action=branchList", params).then(res => {
          this.branchList = res.data;
        })
      },
      jumpBranchDetail(aid) {
        this.$router.push({
          name: 'branchDetail',
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