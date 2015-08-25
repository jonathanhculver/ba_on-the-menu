var app = app || {};

(function(){
	app.RecipeCollection = Backbone.Collection.extend({
		model: app.Recipe,
		url: '/api/menu',
		// parse: function(response) {

		// },

		familyPlan: function() {
			var result = [];

			this.models.forEach(function(value){
				value.get('family_plan').recipes.forEach(function(recipe){
					result.push(recipe.recipe);
				});
			});

			return result;
		},

		couplePlan: function() {
			var result = [];

			this.models.forEach(function(value){
				value.get('two_person_plan').recipes.forEach(function(recipe){
					result.push(recipe.recipe);
				});
			});

			return result;
		},

		getWeeks: function() {
			var result = [];

			this.models.forEach(function(value){
				var date = value.get('family_plan').delivery.date;
				result.push(date);
			});

			return result;
		}
	});
})();