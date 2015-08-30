var app = app || {};

(function(){
	app.RecipeRowView = Backbone.Viewmaster.extend({

		className: 'recipeRow',

		template: function(context) {
			var source = $('#row').html(),
				template = Handlebars.compile(source);
			return template(context);
		},

		context: function() {
			return {
				familyPlan: this.collection.models[0].get('familyPlan')
			}
		},

		initialize: function(options) {
			this.options = options;
		},

		constructor: function() {
			Backbone.Viewmaster.prototype.constructor.apply(this, arguments);
			var cols = this.collection.models.length/2,
				start = this.options.index * cols;

			for(var i = start; i< start+cols; i++) {
				this.appendView(".row", new app.RecipeView({
					model: this.collection.models[i]
				}));
			}
		}
	});
})();