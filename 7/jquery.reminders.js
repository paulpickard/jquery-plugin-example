;(function($){

	$.fn.reminders = function(method){

		if(methods[method]){

			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));

		}
		else if( typeof method === 'object' || ! method ){

			return methods.init.apply( this, arguments );

		}
		else{

			$.error( 'Method ' +  method + ' does not exist on jQuery.reminders' );

		}

	}

	function fadeInOut(ul, opts){

			var active = ul.children("li.active");
			var next = active.next();

			if(next.length == 0) {
				next = ul.children("li:first");
			}

			active.removeClass("active");

			active.fadeOut(opts.transitionSpeed, function(){
				next.fadeIn(opts.transitionSpeed).addClass("active");

				var timeout = setTimeout(function(){
					fadeInOut(ul, opts);
				}, opts.frequency);

				var data = ul.data("reminders");

				data.timeout = timeout;

				ul.data("reminders", data);
			});

		}

	var methods = {

		next: function(){

			return this.each(function(){

				var ul = $(this);

				var data = ul.data("reminders");

				// clear the timeout
				clearTimeout(data.timeout);

				fadeInOut(ul, data.opts);

			});

		},

		restart: function(){

			return this.each(function(){

				var ul = $(this);

				var data = ul.data("reminders");

				// clear the timeout
				clearTimeout(data.timeout);

				// remove the active class
				ul.children().hide().removeClass("active");

				// start over
				methods.init.call(ul, data.opts);

			});

		},

		init: function(options){

			var opts = $.extend({}, $.fn.reminders.defaults, options);

			return this.each(function(){

				var me = $(this);

				me.children("li:first").addClass("active").fadeIn(opts.transitionSpeed);

				var timeout = setTimeout(function(){
					fadeInOut(me, opts);
				}, opts.frequency);

				var data = {
					opts: opts,
					timeout: timeout
				};

				me.data("reminders", data);

			});

		}

	};

	$.reminders = {};

	$.reminders.fadeInOut = function(ul, opts){
		$(ul).reminders(opts);
	};

	$.fn.reminders.defaults = {
		frequency: 2500,
		transitionSpeed: 400,
		method: ""
	};

})(jQuery);