<template>
  <div>
    <div style="width: 80%;padding-top:100px;padding-bottom:100px">
      <div v-html="hotArticle[0].body">{{hotArticle[0].body}}</div>
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
        hotArticle: null,
      };
    },
    mounted() {
      let aid = this.$route.params.aid;
      console.log(aid);
      this.getHotArticle(aid);
    },
    methods: {
      getHotArticle(aid) {
        var params = {
          source: "article",
          conditions: JSON.stringify([{
            fieldName: "aid",
            operator: "EQ",
            value: aid
          }])
        };
        http.get("/restController.php", params).then(res => {
          this.hotArticle = res.data;
        });

      }
    }
  };
</script>

<style scoped>
</style>