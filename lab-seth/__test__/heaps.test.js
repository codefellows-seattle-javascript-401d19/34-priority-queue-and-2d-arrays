const PriorityQueue = require('../src/priority-queue');

const mockPriorityFactory = () => {
  let mockPriorityQueue = new PriorityQueue();
  mockPriorityQueue.enqueue({ priority: 1, value: 'testValue1' });
  mockPriorityQueue.enqueue({ priority: 10, value: 'testValue10' });
  mockPriorityQueue.enqueue({ priority: 3, value: 'testValue3' });
  mockPriorityQueue.enqueue({ priority: 4, value: 'testValue4' });
  mockPriorityQueue.enqueue({ priority: 2, value: 'testValue2' });
  mockPriorityQueue.enqueue({ priority: 1, value: 'testValue1A' });

  return mockPriorityQueue;
}

describe('Priority Queue', () => {
  test('Proper creation of Priority Queue class and one insertion()', () => {
    let mockPriorityQueue = new PriorityQueue();
    let mockPriorityObject = {priority : 1, value: 'testValue'};
    expect(mockPriorityQueue._data).toEqual([]);

    mockPriorityQueue.enqueue(mockPriorityObject);
    expect(mockPriorityQueue._data).toEqual([{ priority: 1, value: 'testValue' }]);
  });

  test('Proper insertion of a single Priority Object, multiple times', () => {
    let mockPriorityQueue = new PriorityQueue();

    mockPriorityQueue.enqueue({ priority: 1, value: 'testValue1' });
    mockPriorityQueue.enqueue({ priority: 10, value: 'testValue10' });
    mockPriorityQueue.enqueue({ priority: 3, value: 'testValue3' });
    mockPriorityQueue.enqueue({ priority: 4, value: 'testValue4' });
    mockPriorityQueue.enqueue({ priority: 2, value: 'testValue2' });
    mockPriorityQueue.enqueue({ priority: 1, value: 'testValue1A' });

    expect(mockPriorityQueue._data[0].priority).toEqual(1);
    expect(mockPriorityQueue._data[1].priority).toEqual(2);
    expect(mockPriorityQueue._data[2].priority).toEqual(1);
    expect(mockPriorityQueue._data[3].priority).toEqual(10);
    expect(mockPriorityQueue._data[4].priority).toEqual(4);
    expect(mockPriorityQueue._data[5].priority).toEqual(3);
  });

  test('Method Enqueue() should throw error if priority is not numeric', () => {
    const mockPriorityQueue = new PriorityQueue();

    expect(() => {
      mockPriorityQueue.enqueue('4');
    }).toThrow();

    expect(() => {
      mockPriorityQueue.enqueue({priority: '4', value: 'falseTest4'});
    }).toThrow();
  });

  test('Dequeue() should return the first Priority Object of the max-heap and modify the array so it is still a max-heap', () => {
    let mockPriorityQueue = mockPriorityFactory();
    expect(mockPriorityQueue._data[0].priority).toEqual(1);
    expect(mockPriorityQueue._data[1].priority).toEqual(2);
    expect(mockPriorityQueue._data[2].priority).toEqual(1);
    expect(mockPriorityQueue._data[3].priority).toEqual(10);
    expect(mockPriorityQueue._data[4].priority).toEqual(4);
    expect(mockPriorityQueue._data[5].priority).toEqual(3);


    expect(mockPriorityQueue.dequeue()).toEqual('testValue1');

    expect(mockPriorityQueue._data[0].priority).toEqual(1);
    expect(mockPriorityQueue._data[1].priority).toEqual(2);
    expect(mockPriorityQueue._data[2].priority).toEqual(3);
    expect(mockPriorityQueue._data[3].priority).toEqual(10);
    expect(mockPriorityQueue._data[4].priority).toEqual(4);    
  });

  test('Method Dequeue() should return null if Priority Queue is empty', () => {
    const mockPriorityQueue = new PriorityQueue();

    expect(mockPriorityQueue.dequeue()).toEqual(null);
  });

  test('Method Peek() should return Highest Priority Object which is also the root value', () => {
    let mockPriorityQueue = mockPriorityFactory();
    expect(mockPriorityQueue._data[0].priority).toEqual(1);
    expect(mockPriorityQueue._data[1].priority).toEqual(2);
    expect(mockPriorityQueue._data[2].priority).toEqual(1);
    expect(mockPriorityQueue._data[3].priority).toEqual(10);
    expect(mockPriorityQueue._data[4].priority).toEqual(4);
    expect(mockPriorityQueue._data[5].priority).toEqual(3);

    expect(mockPriorityQueue.peek()).toEqual('testValue1');
  });

  test('Method Peek() should return null if Priority Queue is empty', () => {
    const mockPriorityQueue = new PriorityQueue();

    expect(mockPriorityQueue.peek()).toEqual(null);
  });

  test('Method isEmpty() should return true if Priority Queue is empty', () => {
    const mockPriorityQueue = new PriorityQueue();

    expect(mockPriorityQueue.isEmpty()).toEqual(true);
  });
});