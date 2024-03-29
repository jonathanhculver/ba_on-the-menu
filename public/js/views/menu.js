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
			'click .dropdown_row'			: 	'selectWeek',
			'click .plan_btn'				: 	'selectPlan'
		},

		constructor: function() {
			Backbone.Viewmaster.prototype.constructor.apply(this, arguments);
			//for functional scoping 
			var self = this;

			//defaults on load
			this.week = 0;
			this.plan = 'two_person_plan';

			// create collection of recipes, pulled from the api
			this.collection = new app.RecipeCollection();
			this.collection.fetch({
				success: function(response){
					self.renderViews(self.plan, self.week);
				}
			});

			this.setView(".header", new app.HeaderView());
		},

		renderViews: function(plan, index) {
			this.renderRecipes(plan, index);
			this.renderFilters(index);
			this.renderFooter();
			this.render();
			this.hideLoading();
		},

		renderRecipes: function(plan, index) {
			this.setView(".menuContainer", new app.RecipeContainerView({
				collection: this.collection.models[index].getRecipes(plan),
				model: this.collection.models[index]
			}));
		},

		renderFilters: function(index) {
			var weeks = this.collection.getWeeks(index, this.plan);
			this.setView(".filters", new app.FiltersView({
				collection: weeks,
				model: weeks.models[index]
			}));	
		},

		renderFooter: function() {
			this.setView(".footer", new app.FooterView());
		},

		nextWeek: function() {
			if(this.week < this.collection.length-1) {
				this.renderViews(this.plan, ++this.week);
			}	
		},

		previousWeek: function() {
			if(this.week > 0) {
				this.renderViews(this.plan, --this.week);
			}
		},

		showDropdown: function(e) {
			var dropdown = $('.dropdown ul');
			dropdown.slideToggle();
		},

		selectWeek: function(e) {
			var row = e.currentTarget,
				index = row.attributes['data-rowindex'].value;
			//update current week selected
			this.week = index;
			this.renderViews(this.plan, index);
		},

		selectPlan: function(e) {
			var button = e.currentTarget,
				plan = button.attributes['data-type'].value;

			$('.plan_btn').each(function(index, value){
				if(value.getAttribute('data-type') !== plan) {
					$(value).addClass('btn_grey');
				} else {
					$(value).removeClass('btn_grey');
				}
			});

			//update current plan selected
			this.plan = plan;
			this.renderViews(this.plan, this.week);
		},

		hideLoading: function() {
			$('#loading').hide();
		}
	});
})();