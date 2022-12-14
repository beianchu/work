// mocks数据
import Mock from 'mockjs'
Mock.mock('/getServeData', 'get', function () {
    // 返回的数据
    const data = Mock.mock({
        'list|1-30': [{
            'id|+1': 1,
            'name': "@ctitle",
            "price|1-100": 100,
            'address': '@county(true)',
            'state|1-2':true,
            'create_time': '@datetime()',
        }]
    })
    return data
})
Mock.mock('/getlist', 'get', function () {
    // 返回的数据
    const data = Mock.mock({
        'list|1-10': [{
                "title": "【系统通知】 该系统将于今晚凌晨2点到5点进行升级维护",
                "create_time": "2018-04-19 20:00:00",
                "flag": false
            },
            {
                "title": "今晚12点整发大红包,先到先得",
                "create_time": "2018-12-11 13:00:00",
                "flag": false
            },
            {
                "title": "你在事业上碰到挫折，有打退堂鼓的动机时，你就应加以留意，这是最危险的时候! ————乔布斯",
                "create_time": "2020-11-29 20:00:00",
                "flag": false
            },
            {
                "title": "职场不是走秀场，而是斗兽场，比的谁不是谁更厉害，而是谁能生存下去，能活得久",
                "create_time": "2014-10-19 03:10:00",
                "flag": false
            },
            {
                "title": "如果事情结束了，那就是结束了别回头冲着你下一个目标去吧",
                "create_time": "2018-04-19 20:00:00",
                "flag": false
            },
            {
                "title": "生活的字典最重要的三个词，就是意志工作等待",
                "create_time": "2018-12-18 12:00:00",
                "flag": false
            },
            {
                "title": "琴玄松弛，弹不出动听的乐曲；生活散漫，点不燃性命的火焰",
                "create_time": "2018-08-12 14:21:00",
                "flag": false
            },
            {
                "title": "自卑是自己的影子，当我们头顶一轮自信的太阳，自卑就在我们的脚下荡然无存",
                "create_time": "2022-01-01 00:00:00",
                "flag": false
            }
]
    })
    return data
})
