<template>
    <div>

        <div class="branchDetail">

            <div v-html="branchDetail.body">{{branchDetail.body}}</div>
        </div>
        <div class="backButton">
            <a-button @click="goBackOne()" size="large">返回</a-button>
        </div>
    </div>

</template>


<script>
    import http from "@/config/http.js";

    export default {
        name: "branchDetail",
        components: {},
        data() {
            return {
                branchDetail: [],
            };
        },
        mounted() {
            let aid = this.$route.params.aid;
            // console.log(aid);
            this.getBranchDetail(aid);
        },
        methods: {
            getBranchDetail(aid) {
                // var params = {
                //     source: "article",
                //     conditions: JSON.stringify([{
                //         fieldName: "aid",
                //         operator: "EQ",
                //         value: aid
                //     }])
                // };
                var params = {
                    action: 'search',
                    source: 'addonarticle',
                    withCode: 'lj',
                    withData: JSON.stringify({
                        source: 'archives',
                        srcKey: 'aid',
                        key: 'id',
                        whereAlia: 'addonarticle'
                    }),
                    params: JSON.stringify(
                        [{
                            condition: 'and',
                            data: [{
                                condition: 'and',
                                data: [{
                                    field: 'aid',
                                    operator: 'EQ',
                                    value: aid
                                }]
                            }]
                        }]
                    ),
                    resultStatus: 1
                }
                http.get("/doAction.php", params).then(res => {
                    this.branchDetail = res.data;
                    // console.log(res);
                });

            },
            goBackOne() {
                this.$router.go(-1)
            }

        }
    };
</script>

<style scoped lang="scss">
    .branchDetail {
        // border: 1px solid rgb(192, 192, 192);
        padding: 10px;

        .info {
            text-align: center
        }

        .title {
            text-align: center
        }

    }

    .backButton {
        margin-top: 10px;
        text-align: center;

        button {

            width: 100px;

        }
    }
</style>