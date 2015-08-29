var app = app || {};

(function(){
	app.MenuView = Backbone.Viewmaster.extend({

		className: 'menu',

		template: function(context) {
			var source = $('#menu').html(),
				template = Handlebars.compile(source);
			return template(context);
		},

		events: {
			'click .week_nav_right'			: 	'nextWeek',
			'click .week_nav_left' 			: 	'previousWeek',
			'click .planDateContainer'		: 	'showDropdown',
			'click .dropdown_row'			: 	'selectWeek'
		},

		constructor: function() {
			Backbone.Viewmaster.prototype.constructor.apply(this, arguments);
			var self = this;

			this.week = 0;
			this.plan = 'two_person_plan';

			// this.showLoading();
			// create collection of recipes, pulled from the api
			this.collection = new app.RecipeCollection();
			this.collection.fetch({
				success: function(response){
					self.renderRecipes(self.plan, self.week);
				}
			});

			this.setView(".header", new app.HeaderView());
		},

		renderRecipes: function(plan, index) {
			this.setView(".menuContainer", new app.RecipeContainerView({
				collection: this.collection.models[index].getRecipes(plan),
				model: this.collection.models[index]
			}));	
			this.renderFilters(index);
			this.render();
		},

		renderFilters: function(index) {
			var weeks = this.collection.getWeeks(index);
			this.setView(".filters", new app.FiltersView({
				collection: weeks,
				model: weeks.models[index]
			}));	
			this.render();
		},

		nextWeek: function() {
			if(this.week < this.collection.length-1) {
				this.renderRecipes(this.plan, ++this.week);
			}	
		},

		previousWeek: function() {
			if(this.week > 0) {
				this.renderRecipes(this.plan, --this.week);
			}
		},

		showDropdown: function(e) {
			var dropdown = $('.dropdown ul');
			dropdown.slideToggle();
		},

		selectWeek: function(e) {
			var row = e.currentTarget,
				index = row.attributes['data-rowindex'].value;
			this.week = index;
			this.renderRecipes(this.plan, index);
		}

		// showLoading: function() {
		// 	var loading = $('#loading').html();
		// 	this.$el.html('blah');
		// },

		// removeLoading: function() {
		// 	this.$el.removeClass('loading');
		// }
	});
})();