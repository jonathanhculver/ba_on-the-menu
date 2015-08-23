$(document).ready(function(){
	var recipes = new app.RecipeCollection();
	recipes.fetch();
	var layout = new app.MenuLayout({
		collection: recipes
	});
	layout.render();
	$('body').append(layout.el);
});