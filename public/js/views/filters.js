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

		}
	});
})();