<template>
	<div>
		<!-- 修改用户模态框 -->
		<el-dialog title="新增用户" :visible.sync="dialogFormVisible" width="450px">
			<el-form :model="form">
				<el-form-item label="用户名称" :label-width="formLabelWidth">
					<el-input v-model="form.name" autocomplete="off" style="width: 222px"></el-input>
				</el-form-item>
				<el-form-item label="账号" :label-width="formLabelWidth">
					<el-input v-model="form.name" autocomplete="off" style="width: 222px"></el-input>
				</el-form-item>
				<el-form-item label="手机号" :label-width="formLabelWidth">
					<el-input v-model="form.name" autocomplete="off" style="width: 222px"></el-input>
				</el-form-item>
				<el-form-item label="角色管理" :label-width="formLabelWidth">
					<el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属岗位" :label-width="formLabelWidth">
					<el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属职级" :label-width="formLabelWidth">
					<el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属部门" :label-width="formLabelWidth">
					<el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'EfficientUserxiu',
	data() {
		return {
			dialogFormVisible: false,
			formLabelWidth: '100px',
			form: {
				name: ''
			}
		}
	},

	mounted() {},

	methods: {
		clos(row) {
			this.dialogFormVisible = true
			this.form = row
		}
	}
}
</script>

<style lang="scss" scoped></style>
