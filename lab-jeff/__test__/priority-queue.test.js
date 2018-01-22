'use strict';
const PriorityQueue = require('../priority-queue');

describe('priority-queue.js', () => {
	test('enqueue should insert nodes such that the item with the lowest priority is in the [0] index', () => {
		let queue = new PriorityQueue.PriorityQueue();

		queue.enqueue({ priority: 10, value: 'mario' });
		queue.enqueue({ priority: 1, value: 'yoshi' });
		queue.enqueue({ priority: 5, value: 'peach' });

		expect(queue._data[0].value).toEqual('yoshi');
	});

	test('dequeue should remove the node with the lowest priority number', () => {
		let queue = new PriorityQueue.PriorityQueue();

		queue.enqueue({ priority: 10, value: 'mario' });
		queue.enqueue({ priority: 1, value: 'yoshi' });
		queue.enqueue({ priority: 5, value: 'peach' });

		expect(queue.dequeue()).toEqual('yoshi');
		expect(queue.dequeue()).toEqual('peach');
		expect(queue.dequeue()).toEqual('mario');
	});
});
