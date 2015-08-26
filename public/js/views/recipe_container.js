var app = app || {};

(function(){
	app.RecipeContainerView = Backbone.Viewmaster.extend({

		initialize: function(options) {
			this.options = options;
		},

		attributes: function() {
			return {
				'data-week': this.model.getWeek()
			}
		},

		template: function(context) {
			var source = $('#recipeContainer').html(),
				template = Handlebars.compile(source);
			return template(context);
		},

		constructor: function() {
			Backbone.Viewmaster.prototype.constructor.apply(this, arguments);

			for(var i = 0; i< 2; i++) {
				this.appendView(".recipeContainer", new app.RecipeRowView({
					collection: this.collection,
					index: i
				}));
			}

		}
	});
})();