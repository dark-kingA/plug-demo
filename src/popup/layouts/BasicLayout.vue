<template>
  <router-view />
</template>

<script>
import config from '@/manifest.json'
import logo from '@/assets/logo.png'
export default {
  name: 'BasicLayout',
  data () {
    return {
      config,
      logo
    }
  },
  methods: {
    close () {
      window.close()
    }
  }
}
</script>

<style lang="less">
body{
  width: 700px;
  height: 700px;
}
.layout.el-container {
  height: 100%;

  > .el-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E8E8E8;
  }

  > .el-footer {
    padding: 10px 20px;
    font-size: 13px;
    line-height: 2;
  }
}
.layout__title {
  font-size: 14px;
  font-weight: bold;
  opacity: 0.85;
}
.layout__version {
  float: left;
}
.layout__action {
  display: block;
  text-align: right;
  overflow: hidden;
}

// Modify Element Style
.el-dropdown-link {
  cursor: pointer;

  span {
    display: inline-block;
    max-width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
  }
}
</style>
