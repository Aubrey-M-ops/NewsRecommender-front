<template>
  <div>
    <div>
      {{ test }}
    </div>
    <div>
      {{ news }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      test: "",
      news: []
    };
  },
  created() {
    this.getTest();
    this.getNews();
  },
  methods: {
    getTest() {
      this.axios
        .get("/")
        .then(res => {
          console.log(res.data);
          this.test = res.data;
        })
        .catch(err => {
          console.error("err");
        });
    },
    getNews() {
      console.log("getnews");
      this.axios
        .get("/111")
        .then((res) => {
          console.log("connect");
          console.log(res.data);
          this.news = res.data;
        })
        .catch(err => {
          console.error("err");
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
