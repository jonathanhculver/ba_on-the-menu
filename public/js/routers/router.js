var app = app || {};

(function(){
	app.Router = Backbone.Router.extend({
		routes: {
			'': 			'couplePlan',
			'/familyplan':  'familyPlan',
			'/couplePlan': 	'couplePlan'
		},

		initialize: function() {

		},

		couplePlan: function() {
			console.log('here');
		},

		familyPlan: function() {
			console.log('family');
		}

	});
})();