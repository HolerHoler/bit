<template>
    <div>
        <div style="width:80%">
            <a-row type="flex" justify="center" :gutter="16" itemLayout="vertical" size="large">
                <a-col :sm="24" :md="12">

                </a-col>
                <a-col :sm="24" :md="12">
                    <a-list bordered :dataSource="data">
                        <a-list-item slot="renderItem" slot-scope="item, index">{{item}}
                        </a-list-item>
                        <div slot="header">业务领域</div>
                    </a-list>
                </a-col>
            </a-row>
        </div>
    </div>
</template>


<script>
import article from "@/components/arctype/article.vue";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];

export default {
  name: "index",
  data() {
    return { data };
  }
};
</script>

<style scoped>
</style>