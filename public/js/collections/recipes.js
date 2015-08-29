var app = app || {};

(function(){
	app.RecipeCollection = Backbone.Collection.extend({
		model: app.Recipe,
		url: '/api/menu',

		getWeeks: function(i) {
			var self = this;

			var result = this.models.map(function(value, index){
				var date = value.get('family_plan').delivery.date,
					dateObj = new Date(date),
					monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				return {'date': date, 'dateFormatted': monthNames[dateObj.getMonth()]+' '+app.helper.ordinalSuffix(dateObj.getDate()+1), 'index': index, selected: i === index ? true : false, firstWeek: index === 0 ? true : false, lastWeek: index === self.models.length-1  ? true : false}
			});

			return new app.DateCollection(result);
		}
	});
})();