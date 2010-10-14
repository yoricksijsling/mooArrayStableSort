/*
---

script: Array.stableSort.js

description: Add a stable sort algorithm for all browsers

license: MIT-style license.

authors:
  - Yorick Sijsling

requires:
  core/1.3: '*'

provides:
  - [Array.stableSort, Array.mergeSort]

...
*/

Array.implement({
    
    stableSort: function(compare) {
        // Maybe replace this with some real feature recognition?
        return Browser.chrome ? this.mergeSort(compare) : this.sort(compare);
    },
    
    mergeSort: function(compare) {
        if (this.length > 1) {
            // Split and sort both parts
            var right = this.splice(Math.floor(this.length / 2)).mergeSort(compare);
            var left = this.splice(0).mergeSort(compare); // 'this' is now empty.
            
            // Merge parts together
            while (left.length > 0 || right.length > 0) {
                this.push(
                    right.length === 0 ? left.shift()
                  : left.length === 0 ? right.shift()
                  : compare(left[0], right[0]) > 0 ? right.shift()
                  : left.shift());
            }
        }
        return this;
    }

});
