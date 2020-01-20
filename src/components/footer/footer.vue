<template>

  <div style="width:100%">
    <a-row :gutter="24" type="flex" justify="center">
      <!-- <a-col :xs=24 :md="8">
          <a-list size="small" bordered :dataSource="data">
            <a-list-item slot="renderItem" slot-scope="item, index">{{item}}</a-list-item>
            <div slot="header">Header</div>
            <div slot="footer">Footer</div>
          </a-list>
        </a-col> -->
      <!-- <a-col :xs=24 :md="12">
          <a-list size="small" bordered :dataSource="data">

            <div slot="header">Header</div>

          </a-list>
        </a-col> -->
      <a-col :xs="24" :md="8">
        <a-list size="small" class="footer-list">
          <a-list-item><span>无界限国际科技有限公司</span></a-list-item>
          <a-list-item><span><a href="http://www.minglvhui.com" target="view_window">广州市名律会信息科技有限责任公司</a></span>
          </a-list-item>
          <a-list-item><span>广州市法源法律咨询服务有限公司</span></a-list-item>
          <div slot="header">
            <span style="font-size:18px;font-weight: bold;">友情链接</span>
          </div>
        </a-list>
      </a-col>
      <a-col :xs="24" :md="8">
        <a-list size="small" class="footer-list">
          <a-list-item>
            <span>
              <a-icon type="phone" size="small" style="margin-right:5px" />020-83869408</span></a-list-item>
          <a-list-item>
            <span>
              <a-icon type="mail" size="small" style="margin-right:5px" />emailcctv@163.com</span></a-list-item>
          <a-list-item>
            <span>
              <a-icon type="environment" size="small" style="margin-right:5px" />Guangdong guangzhou</span>
          </a-list-item>
          <div slot="header">
            <span style="font-size:18px;font-weight: bold;">联系我们</span></div>
        </a-list>
      </a-col>
      <a-col :xs="24" :md="8">
        <a-list size="small" class="footer-list">
          <a-list-item>
            <span>
              <a-icon type="copyright" size="small" style="margin-right:5px" />广州市无界限信息科技有限公司</span></a-list-item>
          <div slot="header">
            <span style="font-size:18px;font-weight: bold;">其他信息</span></div>
        </a-list>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {};
    },
    created() {},
    methods: {},
    components: {}
  };
</script>

<style lang="scss">
  .footer-list {
    color: #FFF;
    width: 100%;
    font-size: 14px;

    span {
      line-height: 14px;

      a {
        color: #FFF;
      }
      a:hover{
        color:dodgerblue;
      }
    }
  }
</style>