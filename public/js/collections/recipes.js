var app = app || {};

(function(){
	app.RecipeCollection = Backbone.Collection.extend({
		model: app.Recipe,
		url: '/api/menu',
		parse: function(response) {
			var result = [];

			response.forEach(function(value, index){
				result[index] = {};
				result[index].plan = 'Two Person Plan';
				result[index].date = value.two_person_plan.delivery.date;
				result[index].recipes = value.two_person_plan.recipes;
			});

			return result;
		}
	});
})();