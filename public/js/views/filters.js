var app = app || {};

(function(){
	app.FiltersView = Backbone.Viewmaster.extend({

		initialize: function(options) {
			this.options = options;
		},

		template: function(context) {
			var source = $('#filters').html(),
				template = Handlebars.compile(source);
			return template(context);
		},

		constructor: function() {
			Backbone.Viewmaster.prototype.constructor.apply(this, arguments);

			this.model.attributes.title = 'What we\'re cooking the week of';

			this.setView('.dropdown', new app.DropdownView({
				collection: this.collection
			}));
		}
	});
})();