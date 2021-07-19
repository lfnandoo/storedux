export default function splitArrayIntoChunksOfLen(list: [], length: number) {
  let chunks = [],
    i = 0,
    n = list.length;

  while (i < n) {
    chunks.push(list.slice(i, (i += length)));
  }

  return chunks;
}
