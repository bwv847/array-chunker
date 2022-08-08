# array-chunker

Array chunker is a small module that creates an array of elements split into groups the length of `size`. If `array` can't be split evently, the final chunk will be the remaining elements.

### Arguments

array (Array): The array to process.
[size=1] (number): The length of each chunk

### Returns

(Array): Returns the new array of chunks.

### Example

```javascript
chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```
