'use strict';

let
	MinHeap = require('../model/easy-priority-min-heap');

let Heap = new MinHeap();

let heapFactory = () => {
	Heap.enqueue({ priority: 100 });
	Heap.enqueue({ priority: 19 });
	Heap.enqueue({ priority: 36 });
	Heap.enqueue({ priority: 25 });
	Heap.enqueue({ priority: 1 });
	Heap.enqueue({ priority: 17 });
	Heap.enqueue({ priority: 3 });
	Heap.enqueue({ priority: 2 });
	Heap.enqueue({ priority: 7 });
	Heap.enqueue({ priority: 32 });
	Heap.enqueue({ priority: 110 });
};

describe('Testing MinHeap \'get\' helper methods', () => {

	describe('MinHeap _getParentIndex', () => {

		test('MinHeap _getParentIndex should return null if MinHeap is empty.', () => {
			Heap._data = []
			expect(Heap._getParentIndex(0)).toBeNull();
		});

		test('MinHeap _getParentIndex should return index .', () => {
			Heap._data = []
			expect(Heap._getParentIndex(10)).toBe(4);
		});
	});

});

describe('Testing MinHeap and its public methods', () => {
	beforeEach(() => {
		heapFactory();
	});

	afterEach(() => {
		return Heap._data = []
	});

	describe('MinHeap creation/enqueuing', () => {

		test('MinHeap should be created and abide by the rules of a MinHeap.', () => {
			let expected = [{priority: 1}, {priority: 2}, {priority: 3}, {priority: 7}, {priority: 25}, {priority: 36}, {priority: 17}, {priority: 100}, {priority: 19}, {priority: 32}, {priority: 110}];
			expect(Heap._data).toEqual(expected);
			expect(Heap._data).toBeInstanceOf(Array);
			expect(Heap._data).toHaveLength(11);
		});

		test('Upon enqueueing of new value, heap should reorganize to abide by the rules of a MinHeap.', () => {
			Heap.enqueue({priority: 111});
			let expected = [{ priority: 1 }, { priority: 2 }, { priority: 3 }, { priority: 7 }, { priority: 25 }, { priority: 36 }, { priority: 17 }, { priority: 100 }, { priority: 19 }, { priority: 32 }, { priority: 110 }, {priority: 111}];
			expect(Heap._data).toEqual(expected);
			expect(Heap._data).toBeInstanceOf(Array);
			expect(Heap._data).toHaveLength(12);
		});

		test('MinHeap should throw error if no value passed.', () => {
			expect(() => {
				Heap.enqueue();
			}).toThrow();
		});
	})

	describe('MinHeap extractMinimum', () => {
		test('MinHeap extractMinimum should find and remove highest value in MinHeap.', () => {
			expect(Heap.extractMinimum()).toEqual(1);
			expect(Heap._data).toBeInstanceOf(Array);
			expect(Heap._data).toHaveLength(10);
		});

		test('MinHeap extractMinimum should return null if MinHeap is empty.', () => {
			Heap._data = []
			expect(Heap.extractMinimum()).toBeNull();
			expect(Heap._data).toBeInstanceOf(Array);
			expect(Heap._data).toHaveLength(0);
		});
	});

	describe('MinHeap peek', () => {
		test('MinHeap peek should show highest value in MinHeap.', () => {
			expect(Heap.peek()).toEqual(1);
			expect(Heap._data).toBeInstanceOf(Array);
			expect(Heap._data).toHaveLength(11);
		});

		test('MinHeap peek should return null if MinHeap is empty.', () => {
			Heap._data = []
			expect(Heap.peek()).toBeNull();
			expect(Heap._data).toBeInstanceOf(Array);
			expect(Heap._data).toHaveLength(0);
		});
	});

});
