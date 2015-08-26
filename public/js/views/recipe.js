var app = app || {};

(function(){
	app.RecipeView = Backbone.Viewmaster.extend({
		className: 'recipe col-md-4',

		template: function(context) {
			var source = $('#recipe').html(),
				template = Handlebars.compile(source);
			return template(context);
		}
	});
})();