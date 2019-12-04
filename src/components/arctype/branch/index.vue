<template>
  <div>
    <a-card style="width: 100%;margin-top:20px;" :bordered=false>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card :hoverable=true>
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
            <p>广告策划、制作及发布</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card :hoverable=true>
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
            <p>影视制作</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card :hoverable=true>
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
            <p>编程及系统开发</p>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>


<script>
  export default {
    name: "index",
    data() {
      return {
        tabList: [{
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