<template>
  <div>
    <div style="width: 80%;margin-top:20px;">
      <a-row :gutter="16" type="flex" justify="center">
        <template v-for="(branch,index) in branchList">
          <a-col :key="index" :xs=24 :md=8>
            <a-card :hoverable=true style="margin-bottom:20px;">
              <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                slot="cover" />
              <p>{{branch.name}}</p>
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
            name: "无界国际科技有限公司"
          },
          {
            id: 2,
            name: "广州市名律会信息科技有限责任公司"
          },
          {
            id: 3,
            name: "广州市法源法律咨询服务有限公司"
          }
        ]
      };
    },
    mounted() {
      this.getBranchList();
    },
    methods: {
      getBranchList() {
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
      }
    }
  };
</script>

<style scoped>
</style>