<template>
  <div>
    <div style="width: 80%;padding-top:100px;padding-bottom:100px">
      <div class="hotArticle">
        <h1 class="title">{{hotArticle.title}}</h1>
        <div class="info">
          <span>发布日期：{{hotArticle.shorttitle}}</span><span style="margin-left:20px">作者：{{hotArticle.writer}}</span>
        </div>

        <a-divider type="horizontal"> </a-divider>

        <!-- <div class="description">
          <p><span style="">{{hotArticle.description}}</span></p>
        </div> -->

        <div v-html="hotArticle.body">{{hotArticle.body}}</div>
      </div>
      <div class="backButton">
        <a-button @click="goBackOne()" size="large">返回</a-button>
      </div>
    </div>
  </div>
</template>


<script>
  import http from "@/config/http.js";

  export default {
    name: "hotArticle",
    components: {},
    data() {
      return {
        hotArticle: {
          title:'',
          shorttitle:'',
          writer:'',
          body:''
        },
      };
    },
    mounted() {
      let aid = this.$route.params.aid;
      // console.log(aid);
      this.getHotArticle(aid);
    },
    methods: {
      getHotArticle(aid) {
        // var params = {
        //   source: "article",
        //   conditions: JSON.stringify([{
        //     fieldName: "aid",
        //     operator: "EQ",
        //     value: aid
        //   }])
        // };
        var params = {
          action:'search',
          source:'addonarticle',
          withCode:'lj',
          withData:JSON.stringify({
            source:'archives',
            srcKey:'aid',
            key:'id',
            whereAlia:'addonarticle'
          }),
          params:JSON.stringify(
              [{
              condition:'and',
              data:[
                  {
                  condition:'and',
                  data:[
                      {
                      field:'aid',
                      operator:'EQ',
                      value:aid
                      }
                  ]
                  }
              ]
              }]
          ),
          resultStatus:1
        }
        http.get("/doAction.php", params).then(res => {
          this.hotArticle = res.data;
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
  .hotArticle {
    border: 1px solid rgb(192, 192, 192);
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