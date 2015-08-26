var app = app || {};

(function(){
	app.HeaderView = Backbone.Viewmaster.extend({
		template: function(context) {
			var source = $('#header').html(),
				template = Handlebars.compile(source);
			return template(context);
		}
	});
})();