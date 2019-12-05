<template>
    <div>
        <a-row type="flex">
            <a-col :span="12" :xs="24" :md="12">

            </a-col>
            <a-col :span="12" :xs="24" :md="12">
                <a-menu mode="horizontal" style="width:100%;height:100%;">
                    <a-menu-item>首页</a-menu-item>
                    <a-menu-item>公司概况 </a-menu-item>
                    <a-menu-item>业务领域</a-menu-item>
                    <a-menu-item>管理层信息</a-menu-item>
                    <a-menu-item>分支结构</a-menu-item>
                    <a-menu-item>公司动态</a-menu-item>
                </a-menu>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {};
        },
        created() {},
        methods: {},
        components: {}
    };
</script>

<style>
</style>