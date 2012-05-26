jQuery.fn.reminders = function(options){

	var opts = $.extend({}, jQuery.fn.reminders.defaults, options);

	/* var opts = $.extend({
		frequency: 2500,
		transitionSpeed: 400
	}, options); */

	return this.each(function(){

		var me = $(this);

		me.children("li:first").addClass("active").fadeIn(opts.transitionSpeed);

		setTimeout(function(){
			fadeInOut(me, opts);
		}, opts.frequency);

	});

	function fadeInOut(ul, opts){

		var active = ul.children("li.active");
		var next = active.next();

		if(next.length == 0) {
			next = ul.children("li:first");
		}

		active.removeClass("active");

		active.fadeOut(opts.transitionSpeed, function(){
			next.fadeIn(opts.transitionSpeed).addClass("active");

			setTimeout(function(){
				fadeInOut(ul, opts);
			}, opts.frequency);
		});

	}

}

jQuery.fn.reminders.defaults = {
	frequency: 2500,
	transitionSpeed: 400
};