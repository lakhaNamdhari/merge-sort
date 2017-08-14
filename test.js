
let mergeSort = require('./solution.js');

let expect = (input, output) => {
	return input.length === output.length && input.reduce((r, e, i) => {return e === output[i]});
}

let test = (name, result) => {
	console.log(name + ' : ' + (result ? 'Passed' : 'Failed'));
}

test('Test1', expect(mergeSort([ 5, 4, 3, 2, 1 ]), [ 1, 2, 3, 4, 5 ]));
test('Test2', expect(mergeSort([ -5, 4, -3, 2, -1 ]), [ -5, -3, -1, 2, 4 ]));

