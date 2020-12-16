

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
  function difference(arr, ...fv) {
    var res = [];
    var c = concat(...fv)
    for (var v of arr) {
      if (c.indexOf(v) == -1) {
        res.push(v);
      }
    }
    return res;
  }
  function differenceBy(arr,...vals) {
    let res = [];
    let func = vals[vals.length - 1];
    if (typeof func == "function") {
      vals.pop();
      val = [].concat(...vals);
      val.forEach((it, i, val) => {
        val[i] = func(it);
      });
      for (let i = 0; i < arr.length; i ++) {
        if (!val.includes(func(arr[i]))) {
          res.push(arr[i])
        }
      }
    } else if (typeof func == "string") {
      let map = {};
      vals.pop();
      val = [].concat(...vals);
      val.forEach(it => {
        if (it[func] !== undefined) {
          map[func] = it[func];
        }
      });
      for (let i = 0; i < arr.length; i ++) {
        if (arr[i][func] !== map[func]) {
          res.push(arr[i]);
        }
      }
    }else {
      res = difference(arr, ...vals);
    }
    return res;
  }
  function differenceWith(arr, val, func) {
    let res = [];
    for (let i = 0; i < arr.length; i ++) {
      for (let j = 0; j < val.length; j ++) {
        if (!func(arr[i], val[j])) res.push(arr[i]);
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
        res += str;
        res += arr[i];
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
  function dropRightWhile(arr, func) {
    let res = arr.slice();
    func = isSame(func);
    for (var i = res.length - 1; i >= 0; i--) {
      if (!func(res[i])) {
          break;
      } else {
          res.pop(res[i]);
      }
  }
    return res;
  }
  function dropWhile(arr, func) {
    let res = arr.slice();
    func = isSame(func);
    while (1) {
      if (!func(res[0])) {
          break;
      } else {
          res.shift(res[0]);
      }
    }
    return res;
  }
  function fill(arr, val, start = 0, end = arr.length) {
    for (var i = start; i < end; i ++) {
      arr[i] = val;
    }
    return arr;
  }
  function isSame(func) {
    if (Array.isArray(func)) {
      return function (o) {
        for (var i = 0; i < func.length; i += 2) {
          if (o[func[i]] != func[i + 1]) {
            return false;
          }
        }
        return true;
      }
    }
    if (typeof func == 'object') {
      return function (o) {
        for (var i in o) {
          if(o[i] != func[i]) {
            return false;
          }
        }
        return true;
      }
    }
    if (typeof func == 'function') {
      return func;
    }
    if (typeof func == 'string') {
      return function(o) {
        return o[func];
      }
    }
  }
  function findIndex(arr, func, idx = 0) {
    func = isSame(func);
    for (var i = idx; i < arr.length; i ++) {
      if(func(arr[i])) return i;
    }
    return -1;
  }
  function findLastIndex(arr, func, idx = 0) {
    func = isSame(func);
    for (var i = arr.length - 1; i >= idx; i --) {
      if(func(arr[i])) return i;
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
  function flattenDepth(arr, depth = 1) {
    while (depth) {
      arr = flatten(arr);
      depth --
    }
    return arr;
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
      if (val <= arr[i]) {
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
  function intersection(start, ...arr) {
    let res = [];
    for (let i of start) {
      let flag = true;
      for (let a of arr) {
        if (!a.includes(i)) {
          flag = false;
          break;
        }
      }
      flag && res.push(i);
    }
    return res;
  }
  function intersectionBy(arr, ...arrs) {
    let res = [];
    let func = arrs[arrs.length - 1];
    if (typeof func == "function") {
      arrs.pop();
      for (let a of arrs) {
        a.forEach((it, i, val) => {
          val[i] = func(it);
        });
      }
      for (let i of arr) {
        let flag = true;
        for (let a of arrs) {
          if (!a.includes(func(i))) {
            flag = false;
            break;
          }
        }
        flag && res.push(i);
      }
    } else if (typeof func == "string") {
      arrs.pop();
      let map = {};
      arr.forEach(it => {
        if (it[func] !== undefined) {
          map[func] = it[func];
        }
      });
      let count = 0;
      for (let i of arrs) {
        for (let j of i) {
          if(j[func] == map[func]) {
            res.push(j);
            break;
          }
        }
      }
    }else {
      res = intersection(arr, ...arrs);
    }
    return res;
  }
  function intersectionWith(arr, ...arrs) {
    let res = [];
    let func = arrs.pop();
    arrs = flatten(...ars);
    for (let i of arr) {
      for (let j of arrs) {
        if (func(i, j)) {
          res.push(i);
        }
      }
    }
    return res;
  }
  function nth(arr, n = 0) {
    if (n < 0) n = arr.length + n;
    return arr[n]
  }
  function pull(arr, ...vals) {
    let res = [];
    for (let v of arr) {
      if (!vals.includes(v)) {
        res.push(v);
      }
    }
    return res;
  }
  function pullAll(arr, vals) {
    let res = [];
    for (let v of arr) {
      if (!vals.includes(v)) {
        res.push(v);
      }
    }
    return res;
  }
  
  return {
    chunk,
    compact,
    concat,
    difference,
    differenceBy,
    differenceWith,
    join,
    last,
    lastIndexOf,
    drop,
    dropRight,
    dropRightWhile,
    dropWhile,
    fill,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
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
    intersection,
    intersectionBy,
    intersectionWith,
    nth,
    pull,
    pullAll,
  };
}()
