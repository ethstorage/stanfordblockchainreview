<template>
  <div class="home">
    <div class="post-preview">
      <img src="https://substackcdn.com/image/fetch/w_336,h_255,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F32081740-22fb-40ff-b3fd-24c273f2ebda_1200x630.png"
           class="post-preview-image"/>
      <div class="post-preview-content">
        <div class="post-preview-title">
          Nexus: Enabling General Purpose Verifiable Cloud Computing
        </div>
        <div class="post-preview-description">
          Providing Scalability Through Verifiability. Volume 1, Article No. 4.
        </div>
        <div class="post-ufi">
          <div>
            Stanford Blockchain Review
          </div>
          <div class="post-date">
            Mar 1
          </div>
        </div>
      </div>
    </div>
    <div class="post-preview">
      <img src="https://substackcdn.com/image/fetch/w_336,h_255,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F32081740-22fb-40ff-b3fd-24c273f2ebda_1200x630.png"
           class="post-preview-image"/>
      <div class="post-preview-content">
        <div class="post-preview-title">
          Nexus: Enabling General Purpose Verifiable Cloud Computing
        </div>
        <div class="post-preview-description">
          Providing Scalability Through Verifiability. Volume 1, Article No. 4.
        </div>
        <div class="post-ufi">
          <div>
            Stanford Blockchain Review
          </div>
          <div class="post-date">
            Mar 1
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
}

.post-preview {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
}
.post-preview:hover {
  background: rgba(0, 0, 0, 0.1);
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
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  font-family: AlibabaPuHuiTiB;
}
.post-preview-description {
  font-size: 16px;
  color: #8c8c8c;
  margin: 4px 0;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.post-ufi {
  font-size: 12px;
  color: #8c8c8c;
  display: flex;
  flex-flow: row;
}
.post-date {
  margin-left: 10px;
}
</style>
