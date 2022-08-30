let express = require('express') //引入express
let Mock = require('mockjs') //引入mock数据
let app = express() //实例化express
const loginData = require('../common/login.json')
const loginSearch = require('../common/loginRead.json')

/**登录接口 */
app.use('/user/login/', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '登录接口！',
			loginData
		})
	)
})
/**登录日志接口 */
app.use('/home/loginsearch/', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '登录接口！',
			loginSearch
		})
	)
})
/**监听端口 lisen */
app.listen(9999, () => {
	console.log('监听端口 9999');
})

