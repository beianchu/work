<template>
	<div>
		<!-- 新增用户模态框 -->
		<el-dialog title="新增用户" :visible.sync="flag" width="450px" @closed="$emit('close')">
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
				<el-button @click="flag = false">取 消</el-button>
				<el-button type="primary" @click="flag = false">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'EfficientUser',
	props: ['dialogFormVisible'],

	data() {
		return {
			flag: false,
			formLabelWidth: '100px',
			form: {
				name: ''
			}
		}
	},
	watch: {
		dialogFormVisible: function (nav) {
			this.flag = nav
		}
	},

	mounted() {},

	methods: {}
}
</script>

<style lang="scss" scoped></style>
