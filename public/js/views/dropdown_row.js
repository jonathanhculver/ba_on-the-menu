var app = app || {};

(function(){
	app.DropdownRowView = Backbone.Viewmaster.extend({

		initialize: function(options) {
			this.options = options;
		},

		template: function(context) {
			var source = $('#dropdownrow').html(),
				template = Handlebars.compile(source);
			return template(context);
		}
	});
})();