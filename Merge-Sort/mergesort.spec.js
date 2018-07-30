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
  it("split given an array of 3 elements returns two arrays", function() {
    expect(merge([1, 2], [3])).toEqual([1, 2, 3]);
  });
});
