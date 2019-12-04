<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <!-- 头部 -->
      <a-layout-header>
        <index-header></index-header>
      </a-layout-header>
      <!-- 正文 -->
      <a-layout-content>
        <router-view> </router-view>
      </a-layout-content>
      <!-- 底部 -->
      <a-layout-footer>
        <index-footer></index-footer>
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
      "index-footer": footer,
      // "index-content": index
    },
    data() {
      return {};
    },
    created() {},
    methods: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #components-layout-demo-basic {
    text-align: center;
  }

  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    color: #fff;
  }

  #components-layout-demo-basic .ant-layout-footer {
    line-height: 1.5;
  }

  #components-layout-demo-basic .ant-layout-sider {
    background: #3ba0e9;
    color: #fff;
    line-height: 120px;
  }

  #components-layout-demo-basic .ant-layout-content {
    /* background: rgba(16, 142, 233, 1);*/
    /* color: #fff;  */
    min-height: 600px;
    line-height: 600px;
  }

  #components-layout-demo-basic>.ant-layout {
    margin-bottom: 48px;
  }

  #components-layout-demo-basic>.ant-layout:last-child {
    margin: 0;
  }
</style>



// WEBPACK FOOTER //
// src/views/About/index.vue