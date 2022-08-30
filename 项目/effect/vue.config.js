const { defineConfig } = require('@vue/cli-service')
let port =8888
// console.log(process);
console.log();
/**
 * 1,打印process 。env
 * 2查看NODE_ENV devolopent
 */
//3.在根目录下查找，对应的环境。env。xxx

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
	// 代理端口配置
	devServer:{
		// 代理的地址
		port,
		proxy:{
			[process.env.VUE_APP_BASE_API]: {
				target: process.env.VUE_APP_MOCK_ENABLE === 'true' ? `http://localhost:9999` : process.env.VUE_APP_CONSOLE_URL,
				changeOrigin:true,
				pathRewrite:{
					['^' + process.env.VUE_APP_BASE_API]: ''
				}
			}
		}
	}
})
// "nodemockserve": "nodemon ./mock/serve.js"