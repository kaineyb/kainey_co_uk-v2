export type TagHashResults = {
  [tag: string]: number;
};

export function generateTagHash(posts: string[][]): TagHashResults {
  const tagResults: TagHashResults = {};

  for (const tags of posts) {
    for (const tag of tags) {
      if (tagResults[tag]) tagResults[tag] += 1;
      else tagResults[tag] = 1;
    }
  }
  return tagResults;
}

export function generateTagArray(posts: string[][]): string[] {
  const tagArray: string[] = [];

  for (const tags of posts) {
    for (const tag of tags) {
      if (tagArray.includes(tag)) continue;
      else tagArray.push(tag);
    }
  }
  return tagArray;
}
