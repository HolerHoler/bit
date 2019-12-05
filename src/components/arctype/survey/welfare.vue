<template>
  <div>

    <a-form class="searchForm">
      <a-input-search placeholder="input search text" size="large" style="width:80%">
        <a-button slot="enterButton">搜索</a-button>
      </a-input-search>
    </a-form>
    <a-list itemLayout="vertical" size="large" :dataSource="listData" style="width:80%" :split=false
      class="dynamicList">
      <a-list-item slot="renderItem" slot-scope="item, index" key="item.title">
        <a-list-item-meta>
          <div slot="description">
            <p class="description">
              我我我我我我我我我我我我我我我我哦我我我我我我我我我我我我我我我我我我我我我我我我我我我我哦我我我我我我我我我我我我我我我我我我我我我我我我我我我我哦我我我我我我我我我我我我我我我我我我我我我我我我我我我我哦我我我我我我我我我我我我
            </p>
            <p>2019-10-12</p>
          </div>
          <a slot="title" href="https://vue.ant.design/">
            <h3>我我我我我我我我我我我我我我我我哦我我我我我我我我我我我我</h3>
          </a>
          <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            style="width:160px; height:120px" />
        </a-list-item-meta>
      </a-list-item>
    </a-list>

    <a-pagination size="small" showQuickJumper :total="50" :showTotal="total=> `Total ${total} items`" />



  </div>

</template>


<script>
  const listData = [];
  for (let i = 0; i < 8; i++) {
    listData.push({
      href: "https://vue.ant.design/",
      title: `ant design vue part ${i}`,
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      description: "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
    });
  }

  export default {
    name: "welfare",
    data() {
      return {
        listData
      };
    }
  };
</script>

<style scoped lang="scss">
  .searchForm {
    margin-top: 20px;
  }

  .dynamicList {
    width: 80%;
    margin-top: 20px;

    .description {
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
</style>