var app = app || {};

(function(){
	app.RecipeCollection = Backbone.Collection.extend({
		model: app.Recipe,
		url: '/api/menu',

		getWeeks: function() {
			var result = [];

			this.models.forEach(function(value){
				var date = value.get('family_plan').delivery.date;
				result.push({'date': date});
			});

			return new app.RecipeCollection(result);
		}
	});
})();