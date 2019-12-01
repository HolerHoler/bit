import axios from "axios";
import Vue from "vue";
import qs from "qs";
export default {
    // lang:'English',
    // lang=Tradition

    get(url, params) {
        let local = window.localStorage;
        if (local.getItem("showType")) {
            params.lang = local.getItem("showType");
        }
        // params.lang = 'Tradition';
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url, data) {
        // data.lang = 'Tradition';
        let local = window.localStorage;
        if (local.getItem("showType")) {
            data.lang = local.getItem("showType")
        }
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(data)).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },

    postForm(url, data) {
        let config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
        let formData = new FormData();
        Object.keys(data).forEach(function (key) {
            formData.append(key, data[key]);
        });
        return new Promise((resolve, reject) => {
            axios.post(url, formData, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 获取页面列表数据
    async getPageListData(id, pageSize, Index = '', Size = '', OtherCategoryId) {
        let local = window.localStorage;
        if (local.getItem("showType")) {
            var language = local.getItem("showType");
        }
        let res = await this.post("/API/PC/Information/InfoArticle.ashx", {
            action: "list",
            CategoryId: id,
            top: pageSize,
            Index: Index,
            Size: Size,
            OtherCategoryId: OtherCategoryId,
            lang: language || ''
        });
        return res;
    },
    // 文章详情数据
    getDetailsData(id) {
        let local = window.localStorage;
        if (local.getItem("showType")) {
            var language = local.getItem("showType");
        }
        return new Promise((resolve, reject) => {
            let params = {
                action: "Details",
                Id: id,
                lang: language || ''
            };
            axios.get("/API/PC/Information/InfoArticle.ashx", {
                params: params
            }).then(res => {
                if (res.data.Result) {
                    res.data.Data.Contents = this.escape2Html(res.data.Data.Contents);
                    resolve(res.data.Data);
                }
            }).catch(err => {
                reject(err)
            })
        })
    },
    // html转义
    escape2Html(str) {
        let arrEntities = {
            'lt': '<',
            'gt': '>',
            'nbsp': ' ',
            'amp': '&',
            'quot': '"'
        };
        return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
            return arrEntities[t];
        });
    }

}