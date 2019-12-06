<template>
  <div>
    <a-checkbox>Checkbox</a-checkbox>
  </div>
</template>


<script>
  export default {
    name: "article",
    components: {},
    mounted() {
      console.log(this.$router.params.aid);
    },
    data() {
      return {};
    }
  };
</script>

<style scoped>
</style>