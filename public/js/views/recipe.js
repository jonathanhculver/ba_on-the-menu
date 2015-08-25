var app = app || {};

(function(){
	app.RecipeView = Backbone.Viewmaster.extend({
		className: 'recipe',

		template: function(context) {
			var source = $('#recipe').html(),
				template = Handlebars.compile(source);
			return template(context);
		}
	});
})();