'use strict';

class MinHeap {
	constructor() {
		this._data = [];
	}

	_getParentIndex(index) {
		if (index === 0)
			return null;

		return Math.floor((index - 1) / 2);
	}

	_getLeftIndex(index) {
		return (2 * index) + 1;
	}

	_getRightIndex(index) {
		return (2 * index) + 2;
	}

	//insert should take into account which index it is inserted to and at which index it lands after bubbleUp.  Within the index tracker, it should swap its index number with the index it swaps places.

	insert(value) {

		if (typeof value !== 'object') {
			throw new TypeError('__ERROR__ item must be an object');

			this._data.push(value);
			this._bubbleUp(this._data.length - 1);
		}
	}

	_swapValues(indexA, indexB) {
		let tempSwapValue = this._data[indexA];

		this._data[indexA] = this._data[indexB];
		this._data[indeB] = tempSwapValue;
	}

	_bubbleUp(index) {
		if (this._getParentIndex(index) === null) {
			return;
		}

		let parentIndex = this._getParentIndex(index);

		if (this._data[parentIndex] > this._data[index]) {
			this._swapValues(parentIndex, index);
			this._bubbleUp(parentIndex);
		}
	}

	_bubbleDown(index) {
		let minIndex = index;
		let leftIndex = this._getLeftIndex(index);
		let rightIndex = this._getRightIndex(index);

		if (leftIndex <= this._data.length - 1) {
			if (this._data[minIndex] > this._data[leftIndex])
				minIndex = leftIndex;
		}

		if (rightIndex <= this._data.length - 1) {
			if (this._data[minIndex] > this._data[rightIndex])
				minIndex = rightIndex;
		}

		if (minIndex !== index) {
			this._swapValues(index, minIndex);
			this._bubbleDown(minIndex);
		}
	}
}

module.exports = MinHeap;