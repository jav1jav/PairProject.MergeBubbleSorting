describe("Split Array function", function() {
  it("split returns an two empty arrays if given empty array", function() {
    expect(split([])).toEqual([[], []]);
  });
  it("split returns a one element array and an empty array if given a one element array", function() {
    expect(split([1])).toEqual([[1], []]);
  });
  it("split given an array of 2 elements returns two 1 element arrays", function() {
    expect(split([1, 2])).toEqual([[1], [2]]);
  });
  it("split given an array of 3 elements returns two arrays", function() {
    expect(split([1, 2, 3])).toEqual([[1, 2], [3]]);
  });
});

describe("Merge function", function() {
  // it("is able to merge two sorted arrays into one sorted array", function() {
  //   // test the merging algorithm
  // });
  it("merges two empty arrays", function() {
    expect(merge([], [])).toEqual([]);
  });
  it("merges an empty array with an array of 1", function() {
    expect(merge([1], [])).toEqual([1]);
  });
  it("merges an array of 1 with an array of 1", function() {
    expect(merge([1], [2])).toEqual([1, 2]);
  });
  it("merges an array of 2 with an array of 1", function() {
    expect(merge([1, 2], [3])).toEqual([1, 2, 3]);
  });
  it("merges 2 sorted arrays of 2 values, that are already in order", function() {
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });
  it("merges 2 sorted arrays of 2 values, that need to be really merged", function() {
    expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
  });
  it("merges 2 sorted arrays of 3 values, that are already in order", function() {
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("merges 2 sorted arrays of 3 values, that need to be really merged", function() {
    expect(merge([2, 3, 4], [1, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("merges array of 2 values with array of 3 values", function() {
    expect(merge([2, 3], [1, 5, 6])).toEqual([1, 2, 3, 5, 6]);
    expect(merge([2, 3, 4], [5, 6])).toEqual([2, 3, 4, 5, 6]);
    expect(merge([4, 6], [2, 3, 5])).toEqual([2, 3, 4, 5, 6]);
  });

});
