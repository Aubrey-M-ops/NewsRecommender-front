<template>
  <div class="container">
    <div class="header-container">
       <dv-decoration-12 style="position:absolute;width:150px;height:150px;display:inline-block;top: 30px;
    left: 30px;" />
      <dv-decoration-1 style="width:200px;height:50px;margin-left:50px;" class="top-dec" />
      <h1>News Recommender</h1>
      <dv-decoration-1 style="width:200px;height:50px;" class="top-dec"/>
    </div>

    <div class="userid">
      <div class="id">
        <h3 style="display:inline-block">userID:</h3>
      </div>
      <div class="input">
        <el-input
          type="text"
          placeholder="请输入用户ID"
          v-model="text"
          maxlength="10"
          show-word-limit
        >
        </el-input>
      </div>
      <div class="search">
        <el-button icon="el-icon-search" circle></el-button>
      </div>
      <div class="decoration-6-left">
        <dv-decoration-6 
        style="width:150px;height:30px;display:inline-block; margin-left: 360px;margin-top:0px;"/>
      </div>
      <div class="news">
        <h3>热点新闻</h3>
      </div>
      <div class="decoration-6-right">
        <dv-decoration-6 style="width:150px;height:30px;" />
      </div>
    </div>
    <div class="main">
      <div class="box-container">
        <div class="userbox">
          <dv-decoration-11 class="box-title">FOR USER</dv-decoration-11>
          <dv-border-box-1 class="scroll-container">
            <dv-scroll-board :config="userConfig" class="scroll-box" />
          </dv-border-box-1>
        </div>
        <div class="decoration">
          <dv-decoration-2 :reverse="true" style="width:5px;height:150px;" />
        </div>
        <div class="hotbox">
          <dv-decoration-11 class="box-title">HOT SPOT</dv-decoration-11>
          <dv-border-box-1 class="scroll-container">
            <dv-scroll-board :config="hotConfig" class="scroll-box" />
          </dv-border-box-1>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-dv8">
        <dv-decoration-8 style="width:300px;height:50px;" />
      </div>
      <div class="bottom-dv8-re">
        <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
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
      userConfig: {
        data: [
          ["1", "西飞集团收购奥地利FACC公司完成股权交割'"],
          ["2", "西飞集团收购奥地利FACC公司完成股权交割'"],
          ["1", "西飞集团收购奥地利FACC公司完成股权交割'"],
          ["2", "西飞集团收购奥地利FACC公司完成股权交割'"],
          ["1", "西飞集团收购奥地利FACC公司完成股权交割'"],
          ["2", "西飞集团收购奥地利FACC公司完成股权交割'"],
          ["1", "西飞集团收购奥地利FACC公司完成股权交割'"],
          ["2", "2"],
          ["1", "1"],
          ["2", "2"],
          ["1", "1"],
          ["2", "2"],
          ["1", "1"],
          ["2", "2"]
        ],
        rowNum: 8,
        hoverPause: true,
        headerBGC: "transparent",
        oddRowBGC: "transparent",
        evenRowBGC: "transparent",
        align: ["left"],
        columnWidth: [80]
      },
      hotConfig: {
        data: [
          ["1", "1"],
          ["2", "2"],
          ["1", "1"],
          ["2", "2"],
          ["1", "1"],
          ["2", "2"],
          ["1", "1"],
          ["2", "2"],
          ["1", "1"],
          ["2", "2"],
          ["1", "1"],
          ["2", "2"],
          ["1", "1"],
          ["2", "2"]
        ],
        rowNum: 7,
        hoverPause: true,
        headerBGC: "transparent",
        oddRowBGC: "transparent",
        evenRowBGC: "transparent",
        align: ["left"],
        columnWidth: [80]
      },
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
      // this.axios
      //   .get("/")
      //   .then(res => {
      //     console.log(res.data);
      //     this.test = res.data;
      //   })
      //   .catch(err => {
      //     console.error("err");
      //   });
    },
    getNews() {
      console.log("getnews");
      // this.axios
      //   .get("/111")
      //   .then(res => {
      //     console.log("connect");
      //     console.log(res.data);
      //     this.news = res.data;
      //   })
      //   .catch(err => {
      //     console.error("err");
      //   });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    text-align: center;
    color: white;
    display: inline-block;
    margin: 0 80px;
}
h3 {
  color: white;
  font-size: 24px;
}
.container {
  height: 100%;
  width: 100%;
  background-color: #282c34;
}
.header-container{
  display: flex;
  align-items: center;
  flex-direction: row;
    justify-content: center;
}
.userbox {
  height: 480px;
  width: 500px;
  display: inline-block;
  position: relative;
  /* margin-right: 280px; */
}
.decoration {
  width: 10px;
  height: 480px;
  display: inline-block;
  margin-left: 140px;
  margin-right: 140px;
}
.hotbox {
  height: 480px;
  width: 500px;
  display: inline-block;
  position: relative;
}
.userid {
  margin: 30px 100px 30px 160px;
}
.id{
  display: inline-block;
  /* align-self:flex-start; */
  margin-right: 10px;
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
.decoration-6-left{
  display: inline-block;
  margin-left: 40px;
}
.news {
  display: inline-block;
  /* margin-left: 420px; */
}
.decoration-6-right{
  display: inline-block;
  margin-top: 20px;
}
.scroll-box {
  position: absolute;
  left: 40px;
  top: 36px;
  height: 420px;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 480px;
}
/* .box-container{
  display: flex;
  justify-content:space-evenly;
} */
.bottom-dv8{
  /* display: inline-block; */
  margin-top: 20px;
  float: left;
}
.bottom-dv8-re{
  /* display: inline-block; */
  margin-top: 20px;
  float: right;
}
.top-dec{
  display: inline-block;
  margin-top:  20px;
}
.box-title{
  width:200px;
  height:60px;
  color: white;
  position: absolute;
  left: 30%;
}
.scroll-container{
  position: absolute;
  top: 18px;
}
.scroll-box .rows{
  height: 420px;
}
</style>
