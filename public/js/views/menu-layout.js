var app = app || {};

(function(){
	app.MenuLayout = Backbone.Viewmaster.extend({
		template: function(context) {
			var source = $('#layout').html(),
				template = Handlebars.compile(source);
			return template(context);
		},
		context: function() {
			return { 
				blah: 'test'
			};
		}
	});
})();