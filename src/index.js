/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var countTriangles = 0;
  for(let i = 0; i < preferences.length; i++) {
    if(preferences[i] === i + 1) {
      continue;
    }
    let secLover = preferences[preferences[i] - 1];
    if(preferences[secLover - 1] === i + 1) {
      countTriangles++;
      delete(preferences[i]);
    }
  }

  return countTriangles;
};
