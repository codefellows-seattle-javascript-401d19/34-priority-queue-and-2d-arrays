'use strict';

const MinHeap = require('../lib/min-heap');

describe('min-heap.js', () => {
  let testHeap = null;
  describe('Instantiation and helper functions.', () => {
    beforeEach(() => {
      testHeap = new MinHeap();
      testHeap.insert(3);
      testHeap.insert(2);
      testHeap.insert(2);
      testHeap.insert(4);
      testHeap.insert(5);
    });

    test('Instantiation should return an object with an empty data array.', () => {
      let heap = new MinHeap();
      expect(heap._data.length).toEqual(0);
    });

    test('Insertion should allow you to add values to the min heap', () => {
      let heap = new MinHeap();
      heap.insert(1);
      heap.insert(2);
      heap.insert(3);
      expect(heap._data).toEqual([1, 2, 3]);
    });

    test('Inserting a new min value should add it to the end and then bubble it to the top.', () => {
      testHeap.insert(1);
      expect(testHeap._data).toEqual([1, 3, 2, 4, 5, 2]);
    });

    test('Extracting the minimum should return the min from the heap and find the new min.', () => {
      expect(testHeap.extractMinimum()).toEqual(2);
      expect(testHeap._data).toEqual([2, 3, 5, 4]);
    });
    
    test('Extract should work with a more complicated heap', () => {
      testHeap.insert(6);
      testHeap.insert(7);
      testHeap.insert(7);
      testHeap.insert(7);
      testHeap.insert(1);
      testHeap.insert(6);
      testHeap.insert(7);
      testHeap.insert(7);
      testHeap.insert(7);
      testHeap.insert(1);
      expect(testHeap.extractMinimum()).toEqual(1);
    });

    test('Extract should work with a more complicated heap', () => {
      testHeap.insert(6);
      testHeap.insert(7);
      testHeap.insert(8);
      testHeap.insert(9);
      testHeap.insert(10);
      testHeap.insert(9);
      testHeap.insert(2);
      testHeap.insert(2);
      testHeap.insert(1);
      expect(testHeap.extractMinimum()).toEqual(1);
    });

    test('extract minimum with an empty heap should return null', () => {
      let heap = new MinHeap();
      expect(heap.extractMinimum()).toBeNull();
    });

    test('peek should return the min of the heap', () => {
      expect(testHeap.peek()).toEqual(2);
    });
  });
});