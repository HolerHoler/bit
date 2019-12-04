<template>
    <div>
        <a-list itemLayout="vertical" size="large" :dataSource="listData">
            <a-list-item slot="renderItem" slot-scope="item, index" key="item.title">
                <a-list-item-meta description="Ant Design, a design language for background applications, is refined by Ant UED Team">
                    <a slot="title" href="https://vue.ant.design/">{{item.title}}</a>
                    <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style="width:200px; height:100px" />
                </a-list-item-meta>
            </a-list-item>
        </a-list>
        <!-- <a-pagination size="small" showSizeChanger showQuickJumper :total="50" :showTotal="total=> `Total ${total} items`" /> -->
    </div>
</template>


<script>
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://vue.ant.design/",
    title: `ant design vue part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

export default {
  name: "index",
  data() {
    return {
      listData
    };
  }
};
</script>

<style scoped>
</style>

