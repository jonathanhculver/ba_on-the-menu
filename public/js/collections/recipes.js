var app = app || {};

(function(){
	app.RecipeCollection = Backbone.Collection.extend({
		model: app.Recipe,
		url: '/api/menu',
		parse: function(response) {
			var result = [];

			response.forEach(function(value){
				value.two_person_plan.recipes.forEach(function(recipe){
					result.push(recipe.recipe);
				});
			});

			return result;
		}
	});
})();