<template>
    <div>
        <div style="">
            <a-row>
                <a-col :xs="24" :md="10">
                    <a-row>
                        <a-col :xs="24" :lg="12">
                            <span>logo1</span>
                        </a-col>
                        <a-col :xs="22" :lg="12">
                            <span>logo2</span>
                        </a-col>
                        <a-col :xs="2" v-if="screenWidth<768">
                            <span>
                                <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
                                    <a-icon :type="'menu-fold'" />
                                </a-button>
                            </span>
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :xs="24" :md="14">

                    <div id="nav">
                        <a-menu :mode="mode" v-if="mode==='horizontal'||(collapsed&&mode==='vertical')">
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
                    </div>
                </a-col>
            </a-row>

        </div>
    </div>
</template>

<script>
    import http from "@/config/http.js";

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
                screenWidth: document.body.clientWidth,
                screenHeight: document.body.clientHeight,
                mode: "horizontal",
                collapsed: false,
            };
        },
        watch: {
            screenWidth(val) {
                // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
                if (!this.timer) {
                    // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
                    this.screenWidth = val;
                    this.timer = true;
                    let that = this;
                    setTimeout(function () {
                        // 打印screenWidth变化的值
                        console.log(that.screenWidth)
                        that.timer = false
                    }, 400)
                }
                if (this.screenWidth < 768) {
                    this.mode = "vertical";
                    this.collapsed = false;
                } else {
                    this.mode = "horizontal";
                }
            },
            screenHeight(val) {
                // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
                if (!this.timer) {
                    // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
                    this.screenHeight = val;
                    this.timer = true;
                    let that = this;
                    setTimeout(function () {
                        // 打印screenWidth变化的值
                        console.log(that.screenHeight)
                        that.timer = false
                    }, 400)
                }
            }
        },
        created() {},
        mounted() {
            const that = this;
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth;
                    that.screenWidth = window.screenWidth;
                    console.log(that.screenWidth);

                    window.screenHeight = document.body.clientHeight;
                    that.screenHeight = window.screenHeight;
                })()
            };
            if (this.screenWidth < 768) {
                this.mode = "vertical";
                this.collapsed = false;
            } else {
                this.mode = "horizontal";
            }
            this.getMenuList();
        },
        methods: {
            getMenuList() {
                var params = {
                    source: "arctype",
                    conditions: JSON.stringify([{
                        fieldName: "topid",
                        operator: "EQ",
                        value: 0
                    }])
                };
                http.get("/restController.php", params).then(res => {
                    console.log(res.data);
                })
            },
            toggleCollapsed() {

                this.collapsed = !this.collapsed;
                console.log(this.collapsed);
            },
        },

    };
</script>

<style>
    #nav {
        border: 0;
        float: right;

        width: 100%;

    }

    #nav .ant-menu-horizontal>.ant-menu-item {
        height: 100px;
        line-height: 100px;
        min-width: 10%;
        border-top: 2px solid transparent;
    }

    #nav>.ant-menu-item {
        text-align: center;
    }

    #nav .ant-menu-item a {
        font-weight: bold;
        font-size: 18px;
    }
</style>