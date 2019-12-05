<template>
  <div>

    <a-card style="width:80%;margin-top:20px" :tabList="tabList" :activeTabKey="activeTabKey"
      @tabChange="key => onTabChange(key, 'activeTabKey')">
      <div v-if="activeTabKey==='1'">
        <component-survey></component-survey>
      </div>
      <div v-else-if="activeTabKey==='2'">
        <component-team></component-team>
      </div>
      <div v-else-if="activeTabKey==='3'">
        <component-welfare></component-welfare>
      </div>
    </a-card>

  </div>
</template>


<script>
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
            key: "1",
            tab: "公司概况"
          },
          {
            key: "2",
            tab: "社会公益"
          },
          {
            key: "3",
            tab: "团队建设"
          }
        ]
      };
    },
    methods: {
      onTabChange(key, type) {
        console.log(key, type);
        this[type] = key;
      }
    }
  };
</script>

<style scoped>
</style>