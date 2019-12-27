<template>
	<div>

		<div v-html="survey.content" v-if="survey!=null">{{survey.content}}</div>


	</div>

</template>


<script>
	import http from "@/config/http.js";
	export default {
		name: "survey",
		data() {
			return {
				survey: null,
			};
		},
		mounted() {
			this.getSurvey();
		},
		methods: {
			getSurvey() {
				var params = {
					source: "arctype",
					conditions: JSON.stringify([{
						fieldName: "id",
						operator: "EQ",
						value: 2
					}])
				};
				http.get("/test.php?action=survey", params).then(res => {
					this.survey = res.data;
					console.log(res.data);
				})
			}
		}
	};
</script>

<style scoped lang="scss">

</style>