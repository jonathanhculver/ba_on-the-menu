var app = app || {};

(function(){
	app.RecipeView = Backbone.Viewmaster.extend({
		className: 'recipe',

		template: function(context) {
			var source = $('#recipe').html(),
				template = Handlebars.compile(source);
			console.log(this.model);
			return template(context);
		},
		// initialize: function() {
		// 	this.listenTo(this.model, "add", this.render);
		// },
	 	constructor: function(){
	    	Backbone.Viewmaster.prototype.constructor.apply(this, arguments);
	    	this.listenTo(this.model, "change", this.render);
	  	},
	});
})();