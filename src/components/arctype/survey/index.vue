<template>
    <div>
        <a-card style="width:100%" :tabList="tabList">
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
      tabList: [
        {
          key: "1",
          name: "公司概况"
        },
        {
          key: "2",
          name: "社会公益"
        },
        {
          key: "3",
          name: "团队建设"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>

