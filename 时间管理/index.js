var now = document.querySelector(".now")
console.log(now);
// 当前的时间
setInterval(function () {
    now.innerHTML = `当前时间${this.getDateYear()}${this.getTimer()}`
}, 1000)
// 获取年月日
function getDateYear() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let dates = date.getDate()
    let dayArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    let day = date.getDay()
    return '今天是：' + year + '年' + month + '月' + dates + '日 ' + dayArr[day]
}

var b = document.querySelector('.after')
console.log(b);
console.log();

function getTimer() {
    let time = new Date()
    let h = time.getHours()
    h = h < 10 ? '0' + h : h
    let m = time.getMinutes()
    m = m < 10 ? '0' + m : m
    let s = time.getSeconds()
    s = s < 10 ? '0' + s : s
    return h + ':' + m + ':' + s
}

// time格式为yyyy-mm-dd hh:mm:ss 指定时间
function computTime(time) {
    // 当前时间的时间戳
    var nowTime = Date.parse(new Date());
    // 指定时间的时间戳
    var endTime = Date.parse(new Date(time));
    if (endTime < nowTime) {
        //  截止时间已过
        return false
    } else {
        // 计算相差天数
        var timeResult = endTime - nowTime;
        var days = Math.floor(timeResult / (24 * 3600 * 1000));
        // 计算出小时数
        var dayMS = timeResult % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
        var hours = Math.floor(dayMS / (3600 * 1000));
        // 计算相差分钟数
        var hoursMS = dayMS % (3600 * 1000); // 计算小时数后剩余的毫秒数
        var minutes = Math.floor(hoursMS / (60 * 1000));
        // 计算相差秒数 
        var minutesMS = hoursMS % (60 * 1000); // 计算分钟数后剩余的毫秒数
        var second = minutesMS / 1000;
        // return days + "天" + hours + "小时" + minutes + "分" + second + "秒";
        console.log(days + "天" + hours + "小时" + minutes + "分" + second + "秒");
        //    距离放学的的时间

        b.innerHTML = `距离放学还有：${hours}小时${minutes}分钟${second}`


        //   after.innerHTML = `距离上课还有：${hours}小时${minutes}分钟${second}`
        // 返回||打印的为距离当前时间的时间差
    }
}
//  放学的倒计时 and 下课倒计时
setInterval(function () {
    // 放学的倒计时
    if (Date.parse(new Date()) < Date.parse(new Date(`2022-8-${new Date().getDate()} 11:40:00`))) {
        this.computTime(`2022-8-${new Date().getDate()} 11:40:00`)
    } else {
        this.computTime(`2022-8-${new Date().getDate()} 22:00:00`)
    }
    // 下课倒计时
    if (Date.parse(new Date()) >= Date.parse(new Date(`2022-8-${new Date().getDate()} 8:30:00`)) && Date.parse(new Date()) < Date.parse(new Date(`2022-8-${new Date().getDate()} 9:15:00`))) {
        this.computTime2(`2022-8-${new Date().getDate()} 9:15:00`)
    } else if (Date.parse(new Date()) >= Date.parse(new Date(`2022-8-${new Date().getDate()} 9:25:00`)) && Date.parse(new Date()) < Date.parse(new Date(`2022-8-${new Date().getDate()} 10:10:00`))) {
        this.computTime2(`2022-8-${new Date().getDate()} 10:10:00`)
    } else if (Date.parse(new Date()) >= Date.parse(new Date(`2022-8-${new Date().getDate()} 10:20:00`)) && Date.parse(new Date()) < Date.parse(new Date(`2022-8-${new Date().getDate()} 11:05:00`))) {
        this.computTime2(`2022-8-${new Date().getDate()} 11:05:00`)
    } else if (Date.parse(new Date()) >= Date.parse(new Date(`2022-8-${new Date().getDate()} 11:15:00`)) && Date.parse(new Date()) < Date.parse(new Date(`2022-8-${new Date().getDate()} 11:40:00`))) {
        this.computTime2(`2022-8-${new Date().getDate()} 11:40:00`)
    } else if (Date.parse(new Date()) >= Date.parse(new Date(`2022-8-${new Date().getDate()} 13:50:00`)) && Date.parse(new Date()) < Date.parse(new Date(`2022-8-${new Date().getDate()} 13:35:00`))) {
        this.computTime2(`2022-8-${new Date().getDate()} 14:35:00`)
    } else if (Date.parse(new Date()) >= Date.parse(new Date(`2022-8-${new Date().getDate()} 14:45:00`)) && Date.parse(new Date()) < Date.parse(new Date(`2022-8-${new Date().getDate()} 15:30:00`))) {
        this.computTime2(`2022-8-${new Date().getDate()} 15:30:00`)
    } else if (Date.parse(new Date()) >= Date.parse(new Date(`2022-8-${new Date().getDate()} 15:40:00`)) && Date.parse(new Date()) < Date.parse(new Date(`2022-8-${new Date().getDate()} 16:25:00`))) {
        this.computTime2(`2022-8-${new Date().getDate()} 16:25:00`)
    } else
    if (Date.parse(new Date()) >= Date.parse(new Date(`2022-8-${new Date().getDate()} 16:35:00`)) && Date.parse(new Date()) < Date.parse(new Date(`2022-8-${new Date().getDate()} 17:20:00`))) {
        this.computTime2(`2022-8-${new Date().getDate()} 17:00:00`)
    } else
    if (Date.parse(new Date()) >= Date.parse(new Date(`2022-8-${new Date().getDate()} 18:00:00`)) && Date.parse(new Date()) < Date.parse(new Date(`2022-8-${new Date().getDate()} 19:15:00`))) {
        this.computTime2(`2022-8-${new Date().getDate()} 19:15:00`)
    } else if (Date.parse(new Date()) >= Date.parse(new Date(`2022-8-${new Date().getDate()} 19:25:00`)) && Date.parse(new Date()) < Date.parse(new Date(`2022-8-${new Date().getDate()} 20:20:00`))) {
        this.computTime2(`2022-8-${new Date().getDate()} 20:20:00`)
    } else if (Date.parse(new Date()) >= Date.parse(new Date(`2022-8-${new Date().getDate()} 20:30:00`)) && Date.parse(new Date()) < Date.parse(new Date(`2022-8-${new Date().getDate()} 22:00:00`))) {
        this.computTime2(`2022-8-${new Date().getDate()} 22:00:00`)
    }
}, 1000)
var xia = document.querySelector('.xia')
console.log(xia);
// time格式为yyyy-mm-dd hh:mm:ss 指定时间
function computTime2(time) {
    // 当前时间的时间戳
    var nowTime = Date.parse(new Date());
    // 指定时间的时间戳
    var endTime = Date.parse(new Date(time));
    if (endTime < nowTime) {
        //  截止时间已过
        return false
    } else {
        // 计算相差天数
        var timeResult = endTime - nowTime;
        var days = Math.floor(timeResult / (24 * 3600 * 1000));
        // 计算出小时数
        var dayMS = timeResult % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
        var hours = Math.floor(dayMS / (3600 * 1000));
        // 计算相差分钟数
        var hoursMS = dayMS % (3600 * 1000); // 计算小时数后剩余的毫秒数
        var minutes = Math.floor(hoursMS / (60 * 1000));
        // 计算相差秒数 
        var minutesMS = hoursMS % (60 * 1000); // 计算分钟数后剩余的毫秒数
        var second = minutesMS / 1000;
        // return days + "天" + hours + "小时" + minutes + "分" + second + "秒";
        console.log(days + "天" + hours + "小时" + minutes + "分" + second + "秒");
        //    距离放学的的时间
        // 返回||打印的为距离当前时间的时间差
        xia.innerHTML = `距离下课还有：${hours}小时${minutes}分钟${second}`

    }
}