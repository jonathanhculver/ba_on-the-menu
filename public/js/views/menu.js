var app = app || {};

(function(){
	app.MenuView = Backbone.Viewmaster.extend({

		className: 'menu',

		template: function(context) {
			var source = $('#menu').html(),
				template = Handlebars.compile(source);
			return template(context);
		},

		constructor: function() {
			Backbone.Viewmaster.prototype.constructor.apply(this, arguments);

			// create collection of recipes, pulled from the api
			this.collection = new app.RecipeCollection();
			this.collection.fetch();

			//reset collection to the default recipes on load
			this.listenTo(this.collection, "add", function(model){
				this.appendView(".menuContainer", new app.RecipeContainerView({
					collection: model.getRecipes('two_person_plan'),
					model: model
				}));
				this.render();
			});
			//render the recipe views
			// this.listenTo(this.collection, "reset", function(collection){
			// 	for(var i = 0; i< 2; i++) {
			// 		this.appendView(".menuContainer", new app.RecipeRowView({
			// 			collection: collection,
			// 			index: i
			// 		}));
			// 	}
			// });

			this.setView(".header", new app.HeaderView());
		}
	});
})();