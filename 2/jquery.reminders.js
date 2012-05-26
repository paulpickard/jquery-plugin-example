jQuery.fn.reminders = function(){

	return this.each(function(){

		var me = $(this);

		me.children("li:first").addClass("active").fadeIn();

		setTimeout(function(){
			fadeInOut(me);
		}, 2500);

	});

	function fadeInOut(ul){

		var active = ul.children("li.active");
		var next = active.next();

		if(next.length == 0) {
			next = ul.children("li:first");
		}

		active.removeClass("active");

		active.fadeOut(function(){
			next.fadeIn().addClass("active");

			setTimeout(function(){
				fadeInOut(ul);
			}, 2500);
		});

	}

}