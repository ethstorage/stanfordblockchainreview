<template>
  <div class="home">
    <el-card class="post-card" v-for="blog in blogList" :key="blog.id" >
      <div class="post-preview" @click.stop="goBlog(blog.id)">
        <img :src="blog.cover" class="post-preview-image"/>
        <div class="post-preview-content">
          <div class="post-preview-title">
            {{ blog.title }}
          </div>
          <div class="post-preview-description">
            {{ blog.description }}
          </div>
          <div class="post-ufi">
            <div>
              {{ blog.user }}
            </div>
            <div class="post-date">
              {{ blog.publishTime }}
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>

import {getBlogList} from "@/utils/web3";

export default {
  name: 'Home',
  asyncComputed: {
    blogList: {
      async get() {
        return await getBlogList();
      },
      default: [],
    },
  },
  methods: {
    goBlog(id) {
      this.$router.push({path: "/blog/" + id});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 40px;
}

.post-card {
  margin: 10px;
  cursor: pointer;
}
.post-card:hover {
  background: rgba(0, 0, 0, 0.05);
}

.post-preview {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}
.post-preview-image {
  width: 168px;
  height: 121px;
}
.post-preview-content {
  height: 121px;
  width: 530px;
  margin-left: 25px;
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: start;
}
.post-preview-title {
  font-size: 18px;
  color: #404040;
  width: 100%;
  text-align: left;
  text-overflow:ellipsis;
  white-space: nowrap;
  overflow:hidden;
  font-family: AlibabaPuHuiTiM;
}
.post-preview-description {
  font-size: 16px;
  color: #8c8c8c;
  margin: 4px 0;
  width: 100%;
  text-align: left;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  font-family: AlibabaPuHuiTiR;
}
.post-ufi {
  font-size: 14px;
  color: #8c8c8c;
  display: flex;
  flex-flow: row;
  font-family: AlibabaPuHuiTiB;
}
.post-date {
  margin-left: 10px;
}
</style>
