Array.stableSort
================

This plugin adds a stable sort algorithm to all browsers. Can be very useful when you're sorting arrays of hashes.

As far as i know, this is only needed for Google Chrome.

How to use
----------

The stableSort function will use a custom algorithm if necessary

	var myArray = [1, 5, 3]
	myArray.stableSort(function(a,b) { });


Todo
----

- Add default sort function (is that ever useful?)
- Add test
- Add demo

