var app = app || {};

(function(){
	app.RecipeRowView = Backbone.Viewmaster.extend({

		className: 'recipeRow',

		template: function(context) {
			var source = $('#row').html(),
				template = Handlebars.compile(source);
			return template(context);
		},

		initialize: function(options) {
			this.options = options;
		},

		constructor: function() {
			Backbone.Viewmaster.prototype.constructor.apply(this, arguments);
			var start = this.options.index * 3;

			for(var i = start; i< start+3; i++) {
				this.appendView(".row", new app.RecipeView({
					model: this.collection.models[i]
				}));
			}
		}
	});
})();