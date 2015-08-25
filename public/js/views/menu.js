var app = app || {};

(function(){
	app.MenuView = Backbone.Viewmaster.extend({

		className: 'menu',

		template: function(context) {
			var source = $('#menu').html(),
				template = Handlebars.compile(source);
			return template(context);
		},

		context: function() {
			return {
				count: this.collection.length
			};
		},

		initialize: function() { //should this be replaced with constructer?
			// create collection of recipes, pulled from the api
			this.collection = new app.RecipeCollection();
			// re render the view when models are added to the collection
			this.listenTo(this.collection, "add", this.render);
			this.collection.fetch();
		},

		constructor: function() {
			Backbone.Viewmaster.prototype.constructor.apply(this, arguments);

			this.listenTo(this.collection, "add", function(model){
				this.appendView(".container", new app.RecipeView({
					model: model
				}));
				this.refreshViews();
			});
		}
	});
})();