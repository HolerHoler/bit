<template>
  <div>
    <div style="width: 80%;padding-top:100px;padding-bottom:100px">
      <a-tabs defaultActiveKey="0" type="card" :size="'large'">
        <template v-for="tab in tabList">
          <a-tab-pane :tab="tab.typename" :key="tab.key">
            <component-survey v-if="tab.key==='0'"></component-survey>
            <component-team v-if="tab.key==='1'"></component-team>
            <component-welfare v-if="tab.key==='2'"></component-welfare>
          </a-tab-pane>
          <!-- <a-tab-pane tab="Tab 2" key="2">
            <component-team></component-team>
          </a-tab-pane>
          <a-tab-pane tab="Tab 3" key="3">
            <component-welfare></component-welfare>
          </a-tab-pane> -->
        </template>
      </a-tabs>
    </div>
  </div>
</template>


<script>
  import http from "@/config/http.js";

  import survey from "./survey";
  import team from "./team";
  import welfare from "./welfare";

  export default {
    name: "index",
    components: {
      "component-survey": survey,
      "component-team": team,
      "component-welfare": welfare,
    },
    data() {
      return {
        activeTabKey: "1",
        tabList: [{
            key: "0",
            typename: "公司概况"
          },
          {
            key: "1",
            typename: "社会公益"
          }, {
            key: "2",
            typename: "团队建设"
          }
        ],
      };
    },
    mounted() {
      this.getSurveyList();
    },
    methods: {
      onTabChange(key, type) {
        // console.log(key, type);
        this[type] = key;
      },
      getSurveyList() {
        // var params = {
        //   source: "arctype",
        //   conditions: JSON.stringify([{
        //     fieldName: "topid",
        //     operator: "EQ",
        //     value: 2
        //   }, {
        //     fieldName: "id",
        //     operator: "EQ",
        //     value: 2
        //   }])
        // };
        var params = {
          action:'search',
          source:'arctype',
          params:JSON.stringify(
              [{
              condition:'and',
              data:[
                  {
                  condition:'or',
                  data:[
                      {
                      field:'topid',
                      operator:'EQ',
                      value:'2'
                      },
                      {
                      field:'id',
                      operator:'EQ',
                      value:'2'
                      }
                  ]
                  }
              ]
              }]
          )
        }
        http.get("/doAction.php", params).then(res => {
          var tabList = res.data;
          //  console.log(tabList);
          var newTabList = new Array();
          for (let i = 0; i < tabList.length; i++) {
            tabList[i].key = i.toString();
            newTabList.push(tabList[i]);
          }
          this.tabList = newTabList;
        })
      }
    }
  };
</script>

<style scoped>
</style>