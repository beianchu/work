// tab选项卡vuex 模块
export default {
    namespaced: true,
    state: {
        tablist: [],
        list: [],
        delList: []
    },
    getters: {

    },
    mutations: {
        // 点击改变状态已读
        changeFlag(state, val) {
            console.log(1);
            const cItem = state.list.find(item => item.title == val.title)
            if (cItem) return alert('已添加')
            state.list.push(val)
            val.flag = true
            state.tablist = state.tablist.filter(item => !item.flag)

        },
        // 点击全部已经阅读
        changeDone(state) {
            console.log(1);
            state.tablist.forEach((item) => {
                state.list.push(item)
            })
            state.tablist = []
        },
        // 点击到回收站
        changeDel(state, val) {
            const cItem = state.delList.find(item => item.title == val.title)
            if (cItem) return alert('已移除')
            state.delList.push(val)
            val.flag = false
            state.list = state.list.filter(item => item.flag)
        },
        changDel(state, val) {

        },
        // 点击还原到未有阅读
        back(state, val) {
            let a = state.list.find((item) => item.title == val.name)
            state.tablist.push(val)
            state.list.splice(a, 1)
        }
    },
    actions: {},


}