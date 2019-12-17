<template>
	<div>


		<div v-html="survey[0].content">{{survey[0].content}}</div>


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
				http.get("/restController.php", params).then(res => {
					this.survey = res.data;
					console.log(res.data);
				})
			}
		}
	};
</script>

<style scoped lang="scss">

</style>