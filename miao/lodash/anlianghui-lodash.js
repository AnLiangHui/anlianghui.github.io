

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
    return res;
  }
  function compact(arr) {
    var res = [];
    for (var v of arr) {
      if (v) {
        res.push(v);
      }
    }
    return res;
  }
  function concat(arr) {
    for (var i = 1; i < arguments.length; i ++) {
      if (Array.isArray(arguments[i])) {
        arr.push(...arguments[i])
      }else {
        arr.push(arguments[i]);
      }
    }
    return arr;
  }
  function difference(arr, fv) {
    var res = [];
    for (var v of arr) {
      if (fv.indexOf(v) == -1) {
        res.push(v);
      }
    }
    return res;
  }
  function join(arr, str) {
    var res = '';
    for (var i in arr) {
      if (i == 0) {
        res += arr[i];
      }else {
        res += str + arr[i]
      }
    }
    return res;
  }
  function last(arr) {
    return arr[arr.length - 1];
  }
  function lastIndexOf(arr, val, start = arr.length - 1) {
    for (var i = start; i >= 0; i --) {
      if (arr[i] == val) {
        return i;
      }
    }
    return -1
  }
  function drop(arr, n = 1) {
    var res = [];
    for (var i = n; i < arr.length; i ++) {
      res.push(arr[i]);
    }
    return res;
  }
  function dropRight(arr, n = 1) {
    if (n > arr.length) return [];
    arr.length = arr.length - n;
    return arr;
  }
  function fill(arr, val, start = 0, end = arr.length) {
    for (var i = start; i < end; i ++) {
      arr[i] = val;
    }
    return arr;
  }
  function isSame(obj, func) {
    for (var i in func) {
      if(obj[i] != func[i]) return false;
    }
    return true;
  }
  function findIndex(arr, func, idx = 0) {
    for (var i = idx; i < arr.length; i ++) {
      if(typeof func == "function") {
        if(func(arr[i])) return i;
      } else {
        if(isSame(arr[i], func)) return i;
      }
    }
    return -1;
  }
  function flatten(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i ++) {
      if(Array.isArray(arr[i])) {
        res.push(...arr[i]);
      }else {
        res.push(arr[i]);
      }
    }
    return res;
  }
  function flattenDeep(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i ++) {
      if (Array.isArray(arr[i])) {
        res = res.concat(flattenDeep(arr[i]))
      }else {
        res.push(arr[i]);
      }
    }
    return res;
  }
  function fromPairs(arr) {
    var map = {};
    for (var i = 0; i < arr.length; i ++) {
      map[arr[i][0]] = arr[i][1];
    }
    return map;
  }
  function head(arr) {
    return arr[0];
  }
  function indexOf(arr, val, idx = 0) {
    for (var i = idx; i < arr.length; i ++) {
      if (arr[i] == val) {
        return i;
      }
    }
    return -1;
  }
  function initial(arr) {
    arr.length = arr.length - 1;
    return arr;
  }
  function reverse(arr) {
    var l = 0;
    var r = arr.length - 1;
    while (l < arr.length / 2) {
      var t = arr[l];
      arr[l] = arr[r];
      arr[r] = t;
      l ++;
      r --;
    }
    return arr;
  }
  function sortedIndex(arr, val) {
    for (var i = 0; i < arr.length; i ++) {
      if (val < arr[i]) {
        return i;
      }
    }
  }
  function toArray(val) {
    var res = [];
    for (var i in val) {
      res.push(val[i]);
    }
    return res;
  }
  function add(augend, addend) {
    return augend + addend;
  }
  function max(arr,max = arr[0]) {
    for (var i = 1; i < arr.length; i ++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  }
  function min(arr,min = arr[0]) {
    for (var i = 1; i < arr.length; i ++) {
      if (arr[i] < min) min = arr[i];
    }
    return min;
  }
  function sum(arr) {
    var res = 0;
    for (var val of arr) {
      res += val;
    }
    return res;
  }
  return {
    chunk,
    compact,
    concat,
    difference,
    join,
    last,
    lastIndexOf,
    drop,
    dropRight,
    fill,
    findIndex,
    flatten,
    flattenDeep,
    fromPairs,
    head,
    indexOf,
    initial,
    reverse,
    sortedIndex,
    toArray,
    add,
    max,
    min,
    sum,
  };
}()
