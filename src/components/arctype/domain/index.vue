<template>
  <div>

    <a-list :grid="{ gutter: 16, xs: 1, sm: 1,md:3}" :dataSource="domainList">
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
        domainList: [],
      };
    },
    mounted() {
      this.getDomainList();
    },
    methods: {
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
          this.domainList = res.data;
          // console.log(res.data);
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