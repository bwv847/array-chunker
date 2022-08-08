type chunkedArray = Array<Array<any>>;

function chunk(array: Array<any> = [], size: number = 1): chunkedArray {
  const chunks: chunkedArray = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
}

module.exports = chunk;
