var app = app || {};

(function(){
	app.Recipe = Backbone.Model.extend({

		getRecipes: function(plan) {
			var recipes = this.attributes[plan].recipes;
			recipes = recipes.map(function(value){
				var obj = value.recipe;
				obj.plan = plan;
				obj.familyPlan = plan === 'family_plan' ? true : false;
				return obj;
			});
			return new app.RecipeCollection(recipes);
		},

		getWeek: function() {
			var week = this.attributes['two_person_plan'].delivery.date;
			week = week.substring(0, 10);
			return week;
		}
	});
})();