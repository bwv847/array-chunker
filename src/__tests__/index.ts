const chunk = require('../../lib/index');

describe('chunk function', () => {
  it('should return empty array if no input provided', () => {
    expect(chunk()).toEqual([]);
  });

  it('last chunk should consist of remaining elements if chunks cannot be evenly distributed', () => {
    expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
  });

  it('should split array into chunks', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
