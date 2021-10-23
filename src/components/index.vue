<template>
  <div class="container">
    <div class="header-container">
      <dv-decoration-12
        style="position:absolute;width:150px;height:150px;display:inline-block;top: 50px;
    left: 150px;"
      />
      <dv-decoration-1 style="width:200px;height:50px;" class="top-dec" />
      <h1>News Recommender</h1>
      <dv-decoration-1 style="width:200px;height:50px;" class="top-dec" />
    </div>

    <div class="userid">
      <div class="id">
        <h3 style="display:inline-block">userID:</h3>
        <div class="input">
          <el-input type="text" placeholder="请输入用户ID" v-model="userId">
            <i
              slot="suffix"
              @click="getUserNews"
              @Enter="getUserNews"
              class="el-input__icon el-icon-search"
            >
            </i>
          </el-input>
        </div>
      </div>
      <div class="decoration-6-left">
        <dv-decoration-6
          style="width:150px;height:30px;display:inline-block; margin-left: 309px;margin-top:0px;"
        />
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
  name: "index",
  data() {
    return {
      test: "",
      userId: "",
      hotNews: [],
      userNews: [],
      userConfig: {
        data: [],
        rowNum: 8,
        hoverPause: true,
        headerBGC: "transparent",
        oddRowBGC: "transparent",
        evenRowBGC: "transparent",
        align: ["left"],
        columnWidth: [120]
      },
      hotConfig: {
        data: [],
        rowNum: 7,
        hoverPause: true,
        headerBGC: "transparent",
        oddRowBGC: "transparent",
        evenRowBGC: "transparent",
        align: ["left"],
        columnWidth: [120]
      }
    };
  },
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#282C34");
  },
  watch: {
    userNews(val) {
      let arr = val;
      console.log("userwatch", val);
      let nowData = this.userConfig;
      nowData.data = arr;
      this.userConfig = { ...nowData };
      console.log("nowdata", nowData);
    },
    hotNews(val) {
      let arr = val;
      console.log("hotwatch", val);
      let nowData = this.hotConfig;
      nowData.data = arr;
      this.hotConfig = { ...nowData };
      console.log("nowdata", nowData);
    }
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
    getUserNews() {
      //user
      console.log("getUSERnews");
      this.axios
        .get("/" + this.userId)
        .then(res => {
          console.log("connect");
          const news = res.data;
          console.log("user", news);
          for (let i = 0; i < news.length; i++) {
            this.userNews.push([news[i].postTime.slice(0, 10), news[i].title]);
          }
        })
        .catch(err => {
          console.error("err");
        });
      //hot
      console.log("getHOTnews");
      this.axios
        .get("/hot" + this.userId)
        .then(res => {
          console.log("connect");
          const news = res.data;
          console.log("hot", news);
          for (let i = 0; i < news.length; i++) {
            this.hotNews.push([news[i].postTime.slice(0, 10), news[i].title]);
          }
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
.header-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 48px;
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
  margin: 0 80px;
}
.hotbox {
  height: 480px;
  width: 500px;
  display: inline-block;
  position: relative;
}
.userid {
  position: relative;
  margin: 60px 100px 0px 400px;
}
.id {
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
.decoration-6-left {
  position: relative;
  display: inline-block;
  margin-left: 40px;
  top: 12px;
}
.news {
  display: inline-block;
  /* margin-left: 420px; */
}
.decoration-6-right {
  position: relative;
  display: inline-block;
  margin-top: 20px;
  top: 12px;
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
.bottom-dv8 {
  /* display: inline-block; */
  margin-top: 40px;
}
.bottom-dv8-re {
  /* display: inline-block; */
  margin-top: 40px;
}
.top-dec {
  display: inline-block;
  margin-top: 20px;
}
.box-title {
  width: 200px;
  height: 60px;
  color: white;
  position: absolute;
  left: 30%;
}
.scroll-container {
  position: absolute;
  top: 18px;
}
.scroll-box .rows {
  height: 420px;
}
.el-input__icon:hover {
  cursor: pointer;
}
.bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: auto;
}
</style>
