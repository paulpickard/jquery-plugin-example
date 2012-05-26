jQuery Plugin Example
=======

Here is an example jQuery plugin I put together to help give a "Write Your First jQuery Plugin" presentation to some co-workers.  The
plugin itself is rather trivial -- it takes a ul and cycles through the li's it contains.  I've found the example to be a good reference, so
I figured I would post it here so I can't loose it (and of course to share with others).

Examples
------------

The project is actually split into 9 different examples that build on each other:

1. Common example of functionality written inline on the page.
2. Basic jQuery method.
3. Passing in options.
4. Using the $ symbol in the plugin.
5. Private functions.
6. Static functions.
7. Public functions / using $.data() to hold state.
8. Namespacing events.
9. Adding style with CSS.

Planned Updates
-------

I plan on cleaning up the code and adding a bunch of comments at some point.

Credits
-------

I put this together from a number of different sources, these two are definitely worth checking out:

- [http://docs.jquery.com/Plugins/Authoring](http://docs.jquery.com/Plugins/Authoring) -- Super helpful guide to authoring plugins.
- [jQuery Cookbook](http://www.amazon.com/jQuery-Cookbook-Solutions-Examples-Developers/dp/0596159773) -- Great book with contributions from a number
	of jQuery experts that was put together by Codey Lindley.  Contains a helpful chapter on creating plugins that was contributed by Mike Hostetler.