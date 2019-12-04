<template>
  <div>
    <a-card style="width:100%" :tabList="tabList" :activeTabKey="activeTabKey" @tabChange="key => onTabChange(key, 'key')">
      <p>article content</p>
      <p>app content</p>
      <p>project content</p>
    </a-card>

  </div>
</template>


<script>
export default {
  name: "index",
  data() {
    return {
      activeTabKey: "1",
      tabList: [
        {
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