<template>
  <div>

    <a-tabs defaultActiveKey="1">
      <a-tab-pane tab="Tab 1" key="1">
        <component-survey></component-survey>
      </a-tab-pane>
      <a-tab-pane tab="Tab 2" key="2">
        <component-team></component-team>
      </a-tab-pane>
      <a-tab-pane tab="Tab 3" key="3">
        <component-welfare></component-welfare>
      </a-tab-pane>
    </a-tabs>

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