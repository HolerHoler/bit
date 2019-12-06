<template>
    <div>
        <div style="padding:10px 0;height:100px;">
            <a-row type="flex">
                <a-col :span="12" :xs="24" :md="12">

                </a-col>
                <a-col :span="12" :xs="24" :md="12">
                    <a-menu mode="horizontal">
                        <a-menu-item v-for="menu in menuList " :key="menu.key">
                            <router-link :to="{path:menu.path}">{{menu.name}}</router-link>
                        </a-menu-item>
                        <!-- <a-menu-item>首页</a-menu-item>
                             <a-menu-item>公司概况 </a-menu-item>
                        <a-menu-item>业务领域</a-menu-item>
                        <a-menu-item>管理层信息</a-menu-item>
                        <a-menu-item>分支结构</a-menu-item>
                        <a-menu-item>公司动态</a-menu-item> -->
                    </a-menu>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
    const
        menuList = [{
            key: "1",
            name: "首页",
            path: "/index"
        }, {
            key: "2",
            name: "公司概况",
            path: "/survey"
        }, {
            key: "3",
            name: "业务领域",
            path: "/domain"
        }, {
            key: "4",
            name: "管理层信息",
            path: "/management"
        }, {
            key: "5",
            name: "分支结构",
            path: "/branch"
        }, {
            key: "6",
            name: "公司动态",
            path: "/dynamic"
        }];

    export default {
        name: "Index",
        components: {},
        data() {
            return {
                menuList,
            };
        },
        created() {},
        methods: {

        },

    };
</script>

<style>
</style>