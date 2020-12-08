

var anlianghui = function () {
  function chunk(arr, size) {
    var res = [];
    var j = 0, c = 0;
    for (var i = 0; i < Math.ceil(arr.length / size); i ++) {
      res[i] = [];
    }
    for (var i = 0; i < arr.length; i ++) {
      if (c < size) {
        res[j].push(arr[i]);
        c ++;
      }
      if (c == size){
        j ++;
        c = 0;
      }
    }
  }
  function compact(arr) {

  }
  return {
    chunk,
  }
}()
