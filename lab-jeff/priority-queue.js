'use strict';

class Node {
	constructor(priority, value) {
		this.priority = priority;
		this.value = value;
	}
}

class PriorityQueue {
	constructor() {
		this._data = [];
	}

	_getParentIndex(index) {
		if (index === 0) return null;

		return Math.floor((index - 1) / 2);
	}

	_getLeftIndex(index) {
		return 2 * index + 1;
	}

	_getRightIndex(index) {
		return 2 * index + 2;
	}

	enqueue(node) {
		if (typeof node !== 'object' || typeof node.priority !== 'number' || node.value === 'undefined')
			throw new Error(
				'__ERROR__ enqueue must be called with an object containing a numeric priority and a value'
			);

		this._data.push(new Node(node.priority, node.value));
		this._bubbleUp(this._data.length - 1);
	}

	_swapValues(indexA, indexB) {
		let tempSwapValue = this._data[indexA];

		this._data[indexA] = this._data[indexB];
		this._data[indexB] = tempSwapValue;
	}

	_bubbleUp(index) {
		if (this._getParentIndex(index) === null) return;

		let parentIndex = this._getParentIndex(index);

		if (this._data[parentIndex].priority > this._data[index].priority) {
			this._swapValues(parentIndex, index);
			this._bubbleUp(parentIndex);
		}
	}

	_bubbleDown(index) {
		let minIndex = index;
		let leftIndex = this._getLeftIndex(index);
		let rightIndex = this._getRightIndex(index);

		if (leftIndex <= this._data.length - 1) {
			if (this._data[minIndex].priority > this._data[leftIndex].priority) minIndex = leftIndex;
		}
		if (rightIndex <= this._data.length - 1) {
			if (this._data[minIndex].priority > this._data[rightIndex].priority) minIndex = rightIndex;
		}

		if (minIndex != index) {
			this._swapValues(index, minIndex);
			this._bubbleDown(minIndex);
		}
	}

	dequeue() {
		if (this._data.length <= 0) return null;

		let min = this._data[0];
		let lastValue = this._data.pop();
		this._data[0] = lastValue;
		this._bubbleDown(0);
		return min.value;
	}

	peek() {
		if (this._data.length <= 0) return null;

		return this._data[0].value;
	}
}

module.exports = {
	Node,
	PriorityQueue,
};
