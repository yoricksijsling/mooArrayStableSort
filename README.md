Array.stableSort
================

Adds a stable sort function to Google Chrome and other browsers.
A stable sort behaves more intuitive when you're sorting a dataset multiple times on different keys (e.g. a sortable table) and the result is always predictable.

How to use
----------

You'll need an array with test data:

	var myArray = [ [1,5], [3,3], [2,7], [1,4], [1,8]];

Now sort on the first item:

	myArray.stableSort(function(a,b) {
	  return a[0] > b[0] ? 1 : (a[0] < b[0] ? -1 : 0);
	});

Result:

	[ [1,5], [1,4], [1,8], [2,7], [3,3] ];

Note that an unstable sort algorithm might just as well have given any of these:

	[ [1,4], [1,8], [1,5], [2,7], [3,3] ];
	[ [1,8], [1,4], [1,5], [2,7], [3,3] ];
	[ [1,4], [1,5], [1,8], [2,7], [3,3] ];
	...

Notes
-----

More information on stable sorting on <http://en.wikipedia.org/wiki/Sorting_algorithm#Stability>

Only Chrome and old versions of Firefox(< 3) and Opera(< 10) use an unstable sort algorithm. All other browsers (at least Firefox 3+, Internet Explorer, Safari and Opera 10+) use a stable sort.

It's implemented using a merge sort. In Chrome 5 it's about half as fast as the default sort (firefox and opera are slower). Time complexity is the same, O(n log n). The default sort will be used whenever possible.

