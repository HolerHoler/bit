<template>
  <div>
    <a-card style="width: 100%;margin-top:20px;" :bordered=false>
      <a-row :gutter="16">
        <template v-for="(branch,index) in branchList">
          <a-col :span="8" :key="index">
            <a-card :hoverable=true>
              <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
              <p>{{branch.name}}</p>
            </a-card>
          </a-col>
        </template>
      </a-row>
    </a-card>
  </div>
</template>


<script>
export default {
  name: "index",
  data() {
    return {
      branchList: [
        {
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
  }
};
</script>

<style scoped>
</style>