<!-- 首页配置页面 -->
<template>
  <div>
    <div class="index-box">
      <!-- 待办事项 -->
      <div class="box-daiban">
        <el-card class="box-card">
          <div class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right" type="text">操作按钮</el-button>
          </div>
        </el-card>
        <el-card class="box-card">
          <div class="clearfix">
            <span class="bottom-txt" style="color: #c4c4c4">暂无待办事项</span>
          </div>
        </el-card>
      </div>
      <!-- 时间选择器 -->
      <div class="date-box">
        <el-card class="box-card">
          <div class="clearfix">
            <div class="block">
              <span class="demonstration">默认</span>
              <el-date-picker v-model="value1" size="large" type="date" placeholder="选择日期"> </el-date-picker>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <!-- 以上是待办事项 -->
    <!-- 以下是员工 数据表格 -->
    <div class="yuan-box">
      <div class="leftY-box">
        <p class="yuan-p">员工数据</p>
        <hr style="border: 1px solid #c4c4c4; background-color: #c4c4c4" />
        <div class="table-box">
          <div class="pseon-box" v-for="item in 6" :key="item" style="color: #c4c4c4">
            <span>员工总人数</span>
            <span>2000人</span>
          </div>
        </div>
      </div>
      <!-- 以下是扇形分布图 -->
      <div class="leftY-box" style="width: 50%">
        <p class="yuan-p">员工数据</p>
        <hr style="border: 1px solid #c4c4c4; background-color: #c4c4c4" />
        <div id="main" style="width: 100%; height: 100%; float: left"></div>
      </div>
    </div>
    <!-- 以下是条行统计图 -->
    <div class="leftY-box" style="width: 100%; height: 250px; border: 2px solid #c4c4c4; margin-top: 20px">
      <p class="yuan-p" style="font-size: 20px; margin: 10px">员工生日</p>
      <hr style="border: 1px solid #c4c4c4; background-color: #c4c4c4" />
      <div id="min" style="width: 100%; height: 100%; float: left"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: '',
  components: {},
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
		/**时间选择器 */
      value1: ''
    }
  },
  created() {},
  mounted() {
    // 条形统计图

    var chartDom = document.getElementById('min')
    var myChart = echarts.init(chartDom)
    var option

    option = {
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 100, 110, 100, 100, 100, 110, 110, 100, 130],
          type: 'bar',
          itemStyle: {
            color: '#b886f8'
          }
        }
      ]
    }

    option && myChart.setOption(option)

    //扇形统计图
    var chartDom = document.getElementById('main')
    var myChart = echarts.init(chartDom)
    var option

    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'right',
        padding: 50
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',

          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              left: 'left'
            }
          },
          center: ['25%', '50%']
        }
      ]
    }

    option && myChart.setOption(option)
  },
  methods: {}
}
</script>
<style scoped lang="scss">
.yuan-box .table-box .pseon-box:nth-child(3) {
  border: none;
}
.yuan-box .table-box .pseon-box:nth-child(6) {
  border: none;
}
.yuan-box {
  margin-top: 10px;
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: space-between;

  .table-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    .pseon-box {
      margin: 7px 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      width: 33%;
      height: 60px;
      border-right: 2px solid #c4c4c4;
      span {
        display: block;
        text-align: center;
        width: 100%;
      }
    }
  }

  .leftY-box {
    width: 47%;
    border: 2px solid#c4c4c4;

    .yuan-p {
      margin: 10px;
      font-size: 20px;
    }
  }
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.bottom-txt {
  display: block;
  text-align: center;
}
.index-box {
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: space-between;
  .box-daiban {
    width: 60%;
    .box-card {
      width: 100%;
    }
  }
  .date-box {
    width: 38%;
    height: 100%;
    .box-card {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
