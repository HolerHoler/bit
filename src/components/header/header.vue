<template>
    <div id="index-header">
        <!-- <a-row :gutter="8" type="flex" justify="center">
            <a-col :xs="24" :md="12">
                <a-row :gutter="8">
                    <a-col :xs="24" :lg="10">
                        <img src="@/assets/images/bit/logo.jpg" width="100%" height="100%"
                            style="vertical-align: middle;" />
                    </a-col>
                    <a-col :xs="22" :lg="14">
                        <img src="@/assets/images/bit/wuxian.png" width="100%" height="100%"
                            style="vertical-align: middle;" />
                    </a-col>

                </a-row>
            </a-col>
            <a-col :xs="24" :md="12">

                <div id="nav">
                    <a-menu :mode="mode" v-if="mode==='horizontal'||(collapsed&&mode==='vertical')">
                        <a-menu-item v-for="menu in menuList " :key="menu.key">
                            <router-link :to="{path:menu.typedir}">{{menu.typename}}</router-link>
                        </a-menu-item>
                    </a-menu>
                </div>
            </a-col>
        </a-row> -->


        <a-row>
            <a-col :xs="24" :md="4">
                <img src="@/assets/images/bit/logo.jpg" style="vertical-align: middle;" />
                <!-- <a-col :xs="2" v-if="screenWidth<768">
                        <span>
                            <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
                                <a-icon :type="'menu-fold'" />
                            </a-button>
                        </span>
                    </a-col> -->
            </a-col>
            <a-col :xs="24" :md="6">
                <img src="@/assets/images/bit/wuxian.png" style="vertical-align: middle;" />
                <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed" v-if="screenWidth<768">
                    <a-icon :type="'menu-fold'" />
                </a-button>
            </a-col>
            <a-col :xs="24" :md="14">
                <div id="nav">
                    <a-menu :mode="mode" v-if="mode==='horizontal'||(collapsed&&mode==='vertical')">
                        <a-menu-item v-for="menu in menuList " :key="menu.key">
                            <router-link :to="{path:menu.typedir}">{{menu.typename}}</router-link>
                        </a-menu-item>
                    </a-menu>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import http from "@/config/http.js";

    const
        menuList = [{
            key: "1",
            typename: "首页",
            typedir: "/index"
        }, {
            key: "2",
            typename: "公司概况",
            typedir: "/survey"
        }, {
            key: "3",
            typename: "业务领域",
            typedir: "/domain"
        }, {
            key: "4",
            typename: "管理层信息",
            typedir: "/management"
        }, {
            key: "5",
            typename: "分支结构",
            typedir: "/branch"
        }, {
            key: "6",
            typename: "公司动态",
            typedir: "/dynamic"
        }];

    export default {
        name: "Index",
        components: {},
        data() {
            return {
                menuList: menuList,
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
            //  this.getMenuList();
        },
        methods: {
            getMenuList() {
                // var params = {
                //     source: "arctype",
                //     conditions: JSON.stringify([{
                //         fieldName: "topid",
                //         operator: "EQ",
                //         value: 0
                //     }])
                // };
                var params = {
                    action: 'search',
                    source: 'arctype',
                    params: JSON.stringify(
                        [{
                            condition: 'and',
                            data: [{
                                condition: 'and',
                                data: [{
                                    field: 'topid',
                                    operator: 'EQ',
                                    value: '0'
                                }]
                            }]
                        }]
                    )
                }
                http.get("/doAction.php", params).then(res => {

                    var typeList = res.data;

                    var newList = new Array();
                    newList.push({
                        key: "0",
                        typename: "首页",
                        typedir: "/index"
                    });
                    var j = 1;
                    for (let i = 0; i < typeList.length; i++) {

                        newList[i].key = j.toString();
                        newList.push(typeList[i]);
                        j++;
                    }
                    console.log(newList);
                    this.menuList = newList;


                })
            },
            toggleCollapsed() {

                this.collapsed = !this.collapsed;
                console.log(this.collapsed);
            },
        },

    };
</script>

<style lang="scss" scoped>
    #index-header {
        line-height: 100px;

        >img {
            display: flex;
            align-items: center
        }

        #nav {
            border: 0;
            width: 100%;

            .ant-menu-horizontal {
                background: #007bff;
                text-align: right !important;

                .ant-menu-item {
                    height: 100px;
                    line-height: 100px;
                    min-width: 10%;

                    /* border-top: 2px solid transparent; */
                    a {
                        font-size: 18px;
                        color: #FFF;
                    }

                    a:hover {
                        color: #FB8264;
                    }

                }
            }

            .ant-menu-vertical {
                background: #048a90;
                width: 100%;

                .ant-menu-item {
                    height: 45px;

                    a {
                        color: #FFF
                    }


                }


            }
        }
    }
</style>