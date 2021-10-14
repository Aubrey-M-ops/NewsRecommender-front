<template>
  <div class="hello">
    {{ news }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      news: []
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    getNews() {
      this.axios
        .get('/')
        .then(res => {
          console.log("connect");
          console.log(res.data);
          this.news = res.data;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
