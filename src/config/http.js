import axios from "axios";
import qs from "qs";
import {
    timeout
} from "q";
import urls from './baseInfo';
// import urls from './baseInfo';
import message from 'ant-design-vue/es/message';

// const isDev = process.env.NODE_ENV === "development";
// let axiosBaseUrl = '';
// if (isDev) {
//     axiosBaseUrl = "http://localhost:81/php/bit";
// } else {
//     if (window.location.port === 81) {
//         axiosBaseUrl = "http://localhost:81/php/bit";
//     } else {
//         axiosBaseUrl = "http://www.bitzg.cn/php/bit";
//     }

// }
// console.log(urls.baseUrl);
const service = axios.create({
    baseURL: urls.baseUrl,
    timeout: 5000,
    crossDomain: true,
});

// service.interceptors.response.use((response) => {
//     var statusCode = response.status;
//     switch (statusCode) {
//         case 200:
//             return response.data;
//             break;
//         default:
//             break;
//     }
// }, err);

export default {
    // lang:'English',
    // lang=Tradition

    get(url, params) {
        // let local = window.localStorage;
        // if (local.getItem("showType")) {
        //     params.lang = local.getItem("showType");
        // }
        // params.lang = 'Tradition';
        return new Promise((resolve, reject) => {
            service.get(url, {
                params: params
            }).then(res => {
                if(res.data.code == 0){
                    // message.success(res.data.msg);
                    resolve(res.data);
                }else{
                    message.error(res.data.msg);
                }
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url, data) {
        // data.lang = 'Tradition';
        // let local = window.localStorage;
        // if (local.getItem("showType")) {
        //     data.lang = local.getItem("showType")
        // }
        return new Promise((resolve, reject) => {
            service.post(url, qs.stringify(data)).then(res => {
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