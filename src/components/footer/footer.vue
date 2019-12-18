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
            <a-list-item>020-83869408</a-list-item>
            <a-list-item>emailcctv@163.com</a-list-item>
            <a-list-item>Guangdong guangzhou</a-list-item>
            <div slot="header">联系我们</div>
          </a-list>
        </a-col>
        <a-col :xs="24" :md="12">
          <a-list size="small" style="width:80%">
            <a-list-item>
              <a-icon type="phone" :size="small" />020-83869408</a-list-item>
            <a-list-item>
              <a-icon type="mail" :size="small" />emailcctv@163.com</a-list-item>
            <a-list-item>
              <a-icon type="environment" :size="small" />Guangdong guangzhou</a-list-item>
            <div slot="header">联系我们</div>
          </a-list>
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