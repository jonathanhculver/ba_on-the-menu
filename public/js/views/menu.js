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
			var self = this;

			// create collection of recipes, pulled from the api
			this.collection = new app.RecipeCollection();
			this.collection.fetch({
				success: function(){
					self.renderRecipes('two_person_plan', 0);
				}
			});

			//reset collection to the default recipes on load
			this.listenTo(this.collection, "add", function(model, collection, options){
				//append dropdown view
				this.render();
			});

			this.setView(".header", new app.HeaderView());
		},

		renderRecipes: function(plan, index) {
			this.setView(".menuContainer", new app.RecipeContainerView({
				collection: this.collection.models[index].getRecipes(plan),
				model: this.collection.models[index]
			}));	
			this.render();
		}
	});
})();