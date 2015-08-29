var app = app || {};

(function(){
	app.DateCollection = Backbone.Collection.extend({
		model: app.Date,
	});
})();