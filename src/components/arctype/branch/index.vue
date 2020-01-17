<template>
  <div>
    <div style="width: 80%;padding-top:100px;padding-bottom:100px">
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
    </div>
  </div>
</template>


<script>
  import http from "@/config/http.js";
  import baseInfo from "@/config/baseInfo.js";

  export default {
    name: "index",
    data() {
      return {
        baseUrl: baseInfo.baseUrl,
        branchList: [],
      };
    },
    mounted() {
      this.getBranchList();
    },
    methods: {
      getBranchList: function () {
        // var params = {
        //   source: "archives",
        //   conditions: JSON.stringify([{
        //     fieldName: "typeid",
        //     operator: "EQ",
        //     value: 5
        //   }])
        // };
        var params = {
          action:'search',
          source:'archives',
          params:JSON.stringify(
              [{
              condition:'and',
              data:[
                  {
                  condition:'and',
                  data:[
                      {
                      field:'typeid',
                      operator:'EQ',
                      value:'5'
                      }
                  ]
                  }
              ]
              }]
          )
        }
        http.get("/doAction.php", params).then(res => {
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