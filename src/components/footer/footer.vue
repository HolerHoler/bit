<template>
  <div>
    <div style="width: 80%;">
      <a-row :gutter="16" type="flex" justify="center">
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
        <a-col :xs="24" :md="12">
          <a-list size="small" style="width:80%">
            <a-list-item>无界限国际科技有限公司</a-list-item>
            <a-list-item>广州市名律会信息科技有限责任公司</a-list-item>
            <a-list-item>广州市法源法律咨询服务有限公司</a-list-item>
            <div slot="header">友情链接</div>
          </a-list>
        </a-col>
        <a-col :xs="24" :md="12">
          <a-list size="small" style="width:80%">
            <a-list-item>
              <span style="line-height:14px;">
                <a-icon type="phone" size="small" />020-83869408</span></a-list-item>
            <a-list-item>
              <span style="line-height:14px;">
                <a-icon type="mail" size="small" />emailcctv@163.com</span></a-list-item>
            <a-list-item>
              <span style="line-height:14px;">
                <a-icon type="environment" size="small" />Guangdong guangzhou</span></a-list-item>
            <div slot="header">联系我们</div>
          </a-list>
        </a-col>
        <a-col :xs="24" :md="24">
          <p style="margin-top:20px;color:rgba(0, 0, 0, 0.65);text-align:center;line-height:14px;">
            <a-icon type="copyright" size="small" />广州市无界限信息科技有限公司</p>
        </a-col>
      </a-row>
    </div>
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

<style>
</style>