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

		constructor: function() {
			Backbone.Viewmaster.prototype.constructor.apply(this, arguments);

			// create collection of recipes, pulled from the api
			this.collection = new app.RecipeCollection();
			this.collection.fetch();

			//reset collection to the default recipes on load
			this.listenTo(this.collection, "add", function(){
				this.filterCouplePlan();
				this.render();
			});
			//render the recipe views
			this.listenTo(this.collection, "reset", function(collection){
				/*for(var i=0; i<collection.models.length; i++){
					this.appendView(".container", new app.RecipeView({
						model: collection.models[i]
					}));
				}*/
				for(var i = 0; i< 2; i++) {
					this.appendView(".container", new app.RecipeRowView({
						collection: collection,
						index: i
					}));
				}
			});
		},

		filterFamilyPlan: function() {
			this.collection.reset(this.collection.familyPlan());
		},

		filterCouplePlan: function(cb) {
			this.collection.reset(this.collection.couplePlan());
		}
	});
})();