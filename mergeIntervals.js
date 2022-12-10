/* Write a function which takes array of overlapping intervals as input, merge the intervals, 
    and return a new array of non - overlapping intervals.

Input: [[1,3], [2,6], [8,10], [15,18]]
Output: [[1,6], [8,10], [15,18]]
*/


// Solution
function mergeIntervals(intervals) {
    if (!intervals.length) {
        return intervals;
    }
    intervals.sort((a, b) => {
        a.start !== b.start ? a.start - b.start : a.end - b.end;
    })

    var previous = intervals[0];
    var result = [previous];
    for (var current of intervals) {
        if (current.start <= previous.end) {
            previous.end = Math.max(previous.end, current.end);
        } else {
            result.push(current);
            previous = current;
        }
    }
    return result;
}