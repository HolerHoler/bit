<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-back-top style="right:100px;" />
      <!-- 头部 -->
      <a-layout-header>
        <index-header style="padding:0 10%"></index-header>
      </a-layout-header>
      <!-- 正文 -->
      <a-layout-content>
        <router-view style="padding:100px 10%"> </router-view>
      </a-layout-content>
      <!-- 底部 -->
      <a-layout-footer>
        <index-footer style="padding:0 10%"></index-footer>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
  import header from "@/components/header/header.vue";
  import footer from "@/components/footer/footer.vue";
  // import index from "@/components/index/index.vue";
  //import SubMenu from "@/views/index/SubMenu";

  export default {
    name: "Index",
    components: {
      // "sub-menu": SubMenu
      "index-header": header,
      "index-footer": footer
      // "index-content": index
    },
    data() {
      return {

      };
    },
    created() {},
    methods: {},
    mounted(){console.log(1);}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #components-layout-demo-basic {
    /* text-align: center; */

  }

  /* #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    color: #fff;
  } */

  #components-layout-demo-basic .ant-layout-header {
    /* min-height: 150px; */
    /* height: 100px; */
    width: 100%;
    background: #007bff;
    height: auto;
    min-height: 100px;

  }

  #components-layout-demo-basic .ant-layout-footer {
    width: 100%;
    background: #474f5c;
    line-height: 1.5;
  }

  #components-layout-demo-basic .ant-layout-sider {
    background: #3ba0e9;
    color: #fff;
    line-height: 1.5;

  }

  #components-layout-demo-basic .ant-layout-content {
    background: rgb(255, 255, 255);
    /* color: #fff;  */
    min-height: 600px;
    line-height: 1.5;
    width: 100%;
  }

  /* #components-layout-demo-basic>.ant-layout {
    margin-bottom: 48px;
  }

  #components-layout-demo-basic>.ant-layout:last-child {
    margin: 0;
  } */
</style>



// WEBPACK FOOTER //
// src/views/About/index.vue