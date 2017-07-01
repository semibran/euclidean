module.exports = function distance(a, b) {
  var quadrance = 0
  var dimensions = Math.max(a.length, b.length)
  for (var i = 0; i < dimensions; i++) {
    var distance = (b[i] || 0) - (a[i] || 0)
    quadrance += distance * distance
  }
  return Math.sqrt(quadrance)
}
