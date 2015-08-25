$(document).ready(function(){
	var menu = new app.MenuView();
	menu.render();
	$('body').append(menu.el);
});