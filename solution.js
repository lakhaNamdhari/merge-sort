
let merge = (left, right) => {
	let merged = [];

	while(left.length && right.length){
		if (left[0] < right[0]){
			merged.push(left.shift());
		}else{
			merged.push(right.shift());
		}
	}
	while(left.length){
		merged.push(left.shift());
	}
	while(right.length){
		merged.push(right.shift());
	}
	return merged;
};

let mergeSort = (arr) => {
	let l = 0;
	let r = arr.length - 1;
	let m = Math.floor((l+r)/2);

	if (l < r){
		return merge(mergeSort(arr.slice(l, m+1)), mergeSort(arr.slice(m+1, r+1)));
	}else{
		return arr;
	}
};

module.exports = mergeSort;