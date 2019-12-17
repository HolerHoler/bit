<template>
  <div>
    <div style="width: 80%;padding-top:100px;padding-bottom:100px">
      <a-row :gutter="16" type="flex" justify="center">
        <template v-for="(domain,index) in domainList">
          <a-col :key="index" :xs="24" :md="8">
            <a-card :hoverable=true style="margin-bottom:20px;" @click="jumpDomainDetail(domain.aid)">
              <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                slot="cover" />
              <span style="text-align:center">
                {{domain.name}}
              </span>
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
        domainList: [{
            id: 1,
            name: "广告策划、制作及发布",
            aid: 1
          },
          {
            id: 2,
            name: "影视制作",
            aid: 2
          },
          {
            id: 3,
            name: "编程及系统开发",
            aid: 3
          },
          {
            id: 4,
            name: "新媒体应用及营运",
            aid: 4
          },
          {
            id: 5,
            name: "活动组织策划及执行",
            aid: 5
          },
          {
            id: 6,
            name: "市场调研、能源及贸易咨询服务",
            aid: 6
          }
        ]
      };
    },
    mounted() {
      this.getDomainList();
    },
    methods: {
      getDomainList() {
        var params = {
          source: "archives",
          conditions: JSON.stringify([{
            fieldName: "typeid",
            operator: "EQ",
            value: 3
          }, {
            fieldName: "arcrank",
            operator: "EQ",
            value: -2
          }])
        };
        http.get("/restController.php", params).then(res => {

          console.log(res.data);

        });

      },
      jumpDomainDetail(aid) {
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

<style scoped>
</style>