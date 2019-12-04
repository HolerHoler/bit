<template>
    <div>
        <a-card style="width: 100%;margin-top:20px" :bordered=false>
            <a-row :gutter="16">
                <template v-for="(domain,index) in domainList">
                    <a-col :span="8" :key="index">
                        <a-card :hoverable=true>
                            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
                            <p>{{domain.name}}</p>
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
      domainList: [
        {
          id: 1,
          name: "广告策划、制作及发布"
        },
        {
          id: 2,
          name: "影视制作"
        },
        {
          id: 3,
          name: "编程及系统开发"
        },
        {
          id: 4,
          name: "新媒体应用及营运"
        },
        {
          id: 5,
          name: "活动组织策划及执行"
        },
        {
          id: 6,
          name: "市场调研、能源及贸易咨询服务"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>

