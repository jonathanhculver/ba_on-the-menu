var app = app || {};

(function(){
	app.RecipeCollection = Backbone.Collection.extend({
		model: app.Recipe,
		url: '/api/menu'
	});
})();