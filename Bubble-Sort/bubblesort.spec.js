describe('Bubble Sort', function() {
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();
  });
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('does not swap with a sorted list', function() {
    let test = [1, 2, 3];
    expect(bubbleSort(test)).toEqual([1, 2, 3]);
    expect(window.swap.calls.count()).toEqual(0);
  });
  it('swaps with an unsorted list', function() {
    let test = [2, 1];
    expect(window.swap.calls.count()).toEqual(1);
    expect(bubbleSort(test)).toEqual([1, 2]);
  });
});
