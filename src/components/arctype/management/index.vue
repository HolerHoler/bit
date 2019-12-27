<template>
    <div>
        <div style="width: 80%;padding-top:100px;padding-bottom:100px">
            <a-list :grid="{ gutter: 16, xs: 1, sm: 2,md:4}" :dataSource="managementList">
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-card :hoverable=true>
                        <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            slot="cover" />
                        <a-card-meta>
                            <template slot="title">
                                <div style="text-align:center"> <span style="font-size:14px">{{item.title}}</span></div>
                            </template>
                            <template slot="description">
                                <div style="text-align:center"> <span style="font-size:14px">{{item.shorttitle}}</span>
                                </div>
                            </template>
                        </a-card-meta>
                    </a-card>
                </a-list-item>
            </a-list>
        </div>

    </div>
</template>


<script>
    import http from "@/config/http.js";


    export default {
        name: "index",
        data() {
            return {
                managementList: null,
            };
        },
        mounted() {
            this.getManagementList();
        },
        methods: {
            getManagementList() {
                var params = {
                    source: "archives",
                    conditions: JSON.stringify([{
                        fieldName: "typeid",
                        operator: "EQ",
                        value: 3
                    }, {
                        fieldName: "arcrank",
                        operator: "EQ",
                        value: -2
                    }])
                };
                http.get("/test.php?action=managementList", params).then(res => {
                    this.managementList = res.data;
                    console.log(res.data);
                });

            }
        }
    };
</script>

<style scoped>
</style>