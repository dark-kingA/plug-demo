<template>
  <div class="plug-content">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="项目介绍" name="one"></el-tab-pane>
      <el-tab-pane label="谷歌api" name="two"></el-tab-pane>
    </el-tabs>
    <!-- 项目介绍 -->
    <template v-if="activeName == 'one'">
      <div class="prject-info">
        本项目是一个插件项目，用于演示插件的使用方法 快速打造自己的谷歌插件
        该项目使用 vue2.0 + webpack4.0 + less + es6 + vue-router + vuex + axios + element-ui + chrome-plugin 等其他插件开发
        <br>
        原插件地址：https://github.com/dark-kingA/superSearchPlus
        <br>
        使用该脚手架快速开发自己自定义插件
        <br>
        该项目使用的组件库是https://element.eleme.cn/#/zh-CN 以下简单示范
        <br>
        初始化项目 npm install 本人node版本（v14.17.3）
        <br>
        打包项目 npm run build （编译后 出现dist目录 谷歌浏览器选择已解压的扩展程序 选择dist即可）
        <br>
      </div>
      <div class="demo-content">
        <div>

          <div class="title"> 输入框</div>
          <el-input v-model="input1" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <div class="title"> button</div>
          <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
          </el-row>
        </div>
        <div>
          <div class="title">简单发送请求</div>
          <el-input v-model="url" placeholder="请输入内容" size="mini"></el-input>
          <el-button @click="sendUrl">发送测试</el-button>
        </div>
        <div>
          <div class="title">对话框</div>
          <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

          <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
        <div>
          <div class="title">表格</div>
          <el-table :data="tableData" style="width: 100%" border size="mini">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
      </div>
    </template>
    <!-- 谷歌api -->
    <template v-if="activeName == 'two'">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="chrome.tabs.getSelected 获取当前tab信息" name="1">
          <div>
            <pre language="javascript" class="prism-content">
              chrome.tabs.getSelected(null, function (tab) {
              console.log(tab)
              var url = tab.url

              })
            </pre>
          </div>
        </el-collapse-item>
        <el-collapse-item title="chrome.storage.sync.set({ key: 你要保存的参数 }); 设置storage" name="2">
          <div>
            <pre language="javascript" class="prism-content">
              // 存储
              chrome.storage.sync.set({ key: 'test' });
              // 获取
              chrome.storage.sync.get('key', function (items) {
                  if (items.key) {
                      console.log(items)
                  }
              });
            </pre>
          </div>
        </el-collapse-item>
        <el-collapse-item title="chrome.cookies.getAll 获取某个域名下 在浏览器保存的cookie" name="3">
          <div>
            <pre language="javascript" class="prism-content">
              chrome.cookies.getAll({url: '域名'}, function (cookie) {
                console.log(cookie)
              });
            </pre>
          </div>
        </el-collapse-item>
        <el-collapse-item title="chrome.devtools.inspectedWindow.eval 执行js" name="4">
          <div>
            <pre language="javascript" class="prism-content">
              let code = 'const url = "' + encodeURIComponent(url) + '";'
              code += 'window.location.href = decodeURIComponent(url);'
              chrome.devtools.inspectedWindow.eval(
                code,
                function (result, isException) {
                  setTimeout(() => {}, 100)
                }
              )
            </pre>
          </div>
        </el-collapse-item>

        <el-collapse-item title="chrome.devtools.panels.openResource 跳转静态资源目录" name="5">
          <div>
            <pre language="javascript" class="prism-content">
              chrome.devtools.panels.openResource(_url)
            </pre>
          </div>
        </el-collapse-item>
        <el-collapse-item title="chrome.devtools.network.onRequestFinished.addListener 获取network面板" name="6">
          <div>
            <pre language="javascript" class="prism-content">
              chrome.devtools.network.onRequestFinished.addListener((request) => {
                console.log(request)
              })
            </pre>
          </div>
        </el-collapse-item>

      </el-collapse>
    </template>
  </div>
</template>
<script>
export default {
  name: 'plug-demo',
  components: {
  },
  data() {
    return {
      input1: '',
      url: 'https://site.ip138.com/360.com/',
      dialogVisible: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      activeName: 'one',
      activeNames: ['1', '2', '3', '4', '5', '6']
    }
  },
  created() {

  },
  comments() { },
  watch: {
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    sendUrl() {
      this.$http.get(this.url, {
      }).then(res => {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, res.bodyText),
          ])
        });
      }).catch(err => {
        console.log(err)
      })
    },
    handleClose(done) {
      done();
    },
    handleChange(val) {
      console.log(val);
    }
  },
}
</script>
<style lang="less" scoped>
.plug-content {
  padding: 10px;
}

.demo-content {
  padding-top: 20px;
}

.title {
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 5px;
  padding-top: 5px;
}

.prject-info {
  font-size: 14px;
  color: #1257ad;
}
</style>
