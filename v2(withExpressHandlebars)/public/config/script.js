(function(){
	$("button").click(function(){
		$.get('/projects');
	}, 'json');
})();
