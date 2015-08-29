var app = app || {};

(function(){
	app.DropdownView = Backbone.Viewmaster.extend({

		initialize: function(options) {
			this.options = options;
		},

		template: function(context) {
			var source = $('#dropdown').html(),
				template = Handlebars.compile(source);
			return template(context);
		},

		constructor: function() {
			Backbone.Viewmaster.prototype.constructor.apply(this, arguments);
			var self = this;

			this.collection.models.forEach(function(value){
				self.appendView('.dropdown_container', new app.DropdownRowView({
					model: value
				}));
			});
		}
	});
})();