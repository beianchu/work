<template>
	<div>
		<!--  系统管理-----》 用户管理 -->
		<div class="header">
			<div class="head">
				姓名:
				<el-input placeholder="请输入姓名"></el-input>
			</div>
			<div class="head">
				所属部门:
				<el-input placeholder="请输入部门"></el-input>
			</div>
			<div class="head">
				手机号:
				<el-input placeholder="请输入手机号"></el-input>
			</div>
		</div>
		<div class="nav">
			<div>
				<el-button icon="el-icon-search">查询</el-button>
				<el-button icon="el-icon-refresh-right">重置</el-button>
			</div>
			<div class="navtwo">
				<el-button type="primary" icon="el-icon-circle-plus-outline" class="userAdd" @click="flag = true"
					>新增用户</el-button
				>
			</div>
		</div>
		<div class="aside">
			<template>
				<el-table :data="tableData" stripe style="width: 100%">
					<el-table-column type="index" label="id"> </el-table-column>
					<el-table-column prop="name" label="用户名称"> </el-table-column>
					<el-table-column prop="name" label="账号"> </el-table-column>
					<el-table-column prop="name" label="手机号"> </el-table-column>
					<el-table-column prop="name" label="所属角色"> </el-table-column>
					<el-table-column prop="name" label="所属职级"> </el-table-column>
					<el-table-column prop="name" label="所属部门"> </el-table-column>
					<el-table-column prop="name" label="操作" width="300px">
						<template slot-scope="scope">
							<el-button size="mini" icon="el-icon-edit" type="success" @click="xiugai(scope.row)">修改</el-button>
							<el-button size="mini" icon="el-icon-delete-solid" type="danger">删除</el-button>
							<el-button size="mini" icon="el-icon-document-copy" type="primary">详情</el-button>
						</template>
					</el-table-column>
				</el-table>
			</template>
		</div>
		<!-- 组件 -->
		<users :dialogFormVisible="flag" @close="flag = false"></users>
		<!-- 修改框的组件 -->
		<usersxiu ref="dialogForm" v-if="dialogFormVisible"></usersxiu>
	</div>
</template>

<script>
import users from './user.vue'
import usersxiu from './userxiu.vue'
export default {
	components: {
		users,
		usersxiu
	},
	data() {
		return {
			dialogFormVisible: false,
			flag: false,

			tableData: [
				{
					name: '123123'
				}
			]
		}
	},

	mounted() {},

	methods: {
		xiugai(row) {
			this.dialogFormVisible = true
			this.$nextTick(() => {
				this.$refs.dialogForm.clos(row)
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;

	.head {
		width: 100%;
		// background-color: red;
		display: flex;
		line-height: 40px;
		font-size: 18px;

		.el-input {
			width: 70%;
			margin-left: 10px;
		}
	}
}

.nav {
	display: flex;
	justify-content: space-between;
	margin-top: 20px;

	.userAdd {
		margin-right: 50px;
	}
}
</style>
