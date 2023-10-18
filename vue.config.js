const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const pagesObj = {
	devcreate: { entry: 'src/devtools/index.js', filename: 'devcreate.html' },
}
const chromeName = ['popup', 'devtools']
// 打包映射
const plugins = [
	{
		from: path.resolve('src/manifest.json'),
		to: `${path.resolve('dist')}/manifest.json`,
	},
	{
		from: path.resolve('src/assets/logo.png'),
		to: `${path.resolve('dist')}/img/logo.png`,
	},
	{
		from: path.resolve('src/content/tools.json'),
		to: `${path.resolve('dist')}/js/tools.json`,
	},
]

chromeName.forEach((name) => {
	pagesObj[name] = {
		css: {
			loaderOptions: {
				less: {
					modifyVars: {},
					javascriptEnabled: true,
				},
			},
		},
		entry: `src/${name}/main.js`,
		filename: `${name}.html`,
	}
})
const vueConfig = {
	pages: pagesObj,
	configureWebpack: {
		entry: {
			background: './src/background/background.js',
			content: './src/content/content.js',
		},
		output: {
			filename: 'js/[name].js',
		},
		plugins: [new CopyWebpackPlugin(plugins)],
	},
	filenameHashing: false,
	productionSourceMap: false,
}
module.exports = vueConfig
