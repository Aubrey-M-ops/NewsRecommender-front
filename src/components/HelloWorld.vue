<template>
  <div class="container">
    <!-- <div>
      {{ test }}
    </div>
    <div>
      {{ news }}
    </div> -->
    <h1>新闻推荐系统</h1>
    <div class="userid">
      <h3 style="display:inline-block">userID:</h3>
      <div class="input">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="text"
          maxlength="10"
          show-word-limit
        >
        </el-input>
      </div>
      <div class="search">
        <el-button icon="el-icon-search" circle></el-button>
      </div>
      <div class="news">
        <h3>热点新闻</h3>
      </div>
    </div>
    <div class="main">
      <div class="box-container">
        <div class="userbox">
          <dv-border-box-1>
            <dv-scroll-board :config="config" class="scroll-box" />
          </dv-border-box-1>
        </div>
        <div class="decoration">
          <dv-decoration-2 :reverse="true" style="width:5px;height:150px;" />
        </div>
        <div class="hotbox">
          <dv-border-box-1>
            <dv-scroll-board :config="config" class="scroll-box" />
          </dv-border-box-1>
        </div>
      </div>
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
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#282C34");
  },
  created() {
    console.log("我是wr");
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
        .then(res => {
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
h1 {
  text-align: center;
  color: white;
}
h2 {
  font-weight: normal;
}
h3 {
  color: white;
  font-size: 24px;
}
.container {
  height: 100%;
  width: 100%;
}
.userbox {
  height: 480px;
  width: 360px;
  display: inline-block;
  /* margin-right: 280px; */
}
.decoration{
  width: 10px;
  height: 480px;
  display: inline-block;
  margin-left: 140px;
  margin-right: 140px;
}
.hotbox {
  height: 480px;
  width: 360px;
  display: inline-block;
}
.userid {
  width: 1000px;
  margin-left: 270px;
}
.input {
  display: inline-block;
  align-self: baseline;
  margin-bottom: 30px;
  margin-left: 10px;
}
.search {
  display: inline-block;
  margin-left: 10px;
}
.news{
  display: inline-block;
  margin-left: 390px;
}
.scroll-box {
  width: 100%;
  height: 100%;
}
.main {
  display: flex;
  flex-direction: column;
  align-items:center;
  height: 600px;
}
/* .box-container{
  display: flex;
  justify-content:space-evenly;
} */
</style>
