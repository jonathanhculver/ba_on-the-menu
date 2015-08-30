var app = app || {};

(function(){
	app.FooterView = Backbone.Viewmaster.extend({

		initialize: function(options) {
			this.options = options;
		},

		template: function(context) {
			var source = $('#footer').html(),
				template = Handlebars.compile(source);
			return template(context);
		},

		constructor: function() {
			Backbone.Viewmaster.prototype.constructor.apply(this, arguments);
		}
	});
})();