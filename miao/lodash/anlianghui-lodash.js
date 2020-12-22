

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
          if(func[i] !== undefined && o[i] != func[i]) {
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
  function sortedIndexBy(arr, val, func) {
    func = isSame(func);
    for (let i in arr) {
      if (func(val) <= func(arr[i])) {
        return +i;
      }
    }
  }
  function sortedIndexOf(arr, val) {  
    for (let i in arr) {
      if (arr[i] == val) return +i;
    }
    return -1;
  }
  function sortedLastIndex(arr, val) {
    let i = arr.length - 1;
    while (i >= 0) {
      if (arr[i] <= val) {
        return i + 1;
      }
      i --;
    }
    return -1;
  }
  function sortedLastIndexBy(arr, val, func) {
    func = isSame(func);
    for (let i in arr) {
      if (func(arr[i]) > func(val)) {
        return +i;
      }
    }
    return arr.length;
  }
  function sortedLastIndexOf(arr, val) {
    let i = arr.length - 1;
    while (i >= 0) {
      if (arr[i] == val) {
        return i;
      }
      i --;
    }
    return -1;
  }
  function sortedUniq(arr) {
    let res = [];
    for (let v of arr) {
      if (!includes(res, v)) {
        res.push(v);
      }
    }
    return res;
  }
  function sortedUniqBy(arr, func) {
    let res = [], flag;
    arr.forEach(it => {
      if (flag !== func(it)) {
        res.push(it);
      }
      flag = func(it);
    })
    return res;
  }
  function tail(arr) {
    return slice(arr, 1);
  }
  function take(arr, n = 1) {
    return slice(arr, 0, n);
  }
  function takeRight(arr, n = 1) {
    return slice(arr, arr.length - n);
  }
  function takeRightWhile(arr, func) {
    let res = [];
    func = isSame(func);
    for (let i = arr.length - 1; i >= 0; i --) {
      if (func(arr[i])) {
        res.unshift(arr[i]);
      }else {
        break;
      }
    }
    return res;
  }
  function takeWhile(arr, func) {
    let res = [];
    func = isSame(func);
    for (let i = 0; i < arr.length; i ++) {
      if (func(arr[i])) {
        res.push(arr[i]);
      }else {
        break;
      }
    }
    return res;
  }
  function slice(arr, start = 0, end = arr.length) {
    let res = [];
    if (end > arr.length) end = arr.length;
    if (start < 0) start = 0;
    for (let i = start; i < end; i ++) {
      res.push(arr[i]);
    }
    return res;
  }
  function includes(collection, val, fromIndex = 0) {
    if (Object.prototype.toString.call(collection) == "[object Object]") {
      collection = Object.values(collection);
    }
    if (typeof collection == 'string') {
      let count = 0, j = 0;
      for (let i = fromIndex; i < collection.length; i ++) {
        if (collection[i] == val[j]) {
          j ++;
          if (j == val.length) return true;
        }else {
          j = 0;
        }
      }
      return false;
    }
    if(indexOf(collection, val, fromIndex) >= 0) {
      return true
    }else {
      return false;
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
    arrs = flatten(...arrs);
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
  function pullAllBy(array, values, func) {
    if (typeof func == 'string') {
      let count = 0, len = array.length;
      while (count < len){
        let flag = true
        for (let i = 0; i < values.length; i ++) {
          if (array[0][func] === values[i][func]) {
            flag = false;
            array.shift();
            break;
          }
        }
        count ++;
        flag && array.push(array.shift());
      }
      return array;
    }
  }
  function pullAllWith(array, values, func) {
    let count = 0, len = array.length;
    while (count < len) {
      let flag = true;
      for (let i of values) {
        if (func(array[0], i)) {
          array.shift();
          flag = false;
          break;
        }
      }
      count ++;
      flag && array.push(array.shift());
    }
    return array;
  }
  function union(...arr) {
    let res = [];
    arr = flatten(arr);
    arr.forEach(it => {
      if(!includes(res, it)) {
        res.push(it);
      }
    })
    return res;
  }
  function unionBy(...arr) {  
    let res = [];
    let box = [];
    let func = isSame(arr.pop());
    arr = flatten(arr);
    arr.forEach(it => {
      if (!includes(box, func(it))) {
        box.push(func(it));
        res.push(it);
      }
    });
    return res;
  }
  function unionWith(...arr) {  
    let func = arr.pop();
    arr = flatten(arr);
    let res = [];
    arr.forEach(itArr => {
      let flag = true;
      res.forEach(itRes => {
        if (func(itArr,itRes)) flag = false;
      })
      flag && res.push(itArr);
    })
    return res;
  }
  function uniq(arr) {  
    let res = [];
    arr.forEach(it => {
      if (!includes(res, it)) res.push(it);
    });
    return res;
  }
  function uniqBy(arr, func) {  
    let res = [], box = [];
    func = isSame(func);
    arr.forEach(it => {
      if (!includes(box, func(it))) {
        box.push(func(it));
        res.push(it);
      }
    });
    return res;
  }
  function uniqWith(arr, func) {  
    let res = [];
    arr.forEach(itArr => {
      let flag = true;
      res.forEach(itRes => {
        if (func(itArr, itRes)) flag = false;
      });
      flag && res.push(itArr);
    })
    return res;
  }
  function isEqual(value, other) {  
    return isSame(other)(value);
  }
  function zip(...arr) {  
    let res = [], len = arr[0].length;
    while (len) {
      res.push([]);
      len --;
    }
    arr.forEach(it => {
      it.forEach((itIt, i) => {
        res[i].push(itIt);
      });
    });
    return res;
  }
  function zipObject(props = [], val = []) {  
    let res = {};
    for (let i in props) {
      res[props[i]] = val[i];
    }
    return res;
  }
  function zipObjectDeep(props = [], val = []) {  
   
  }
  function zipWith(...arrs) { 
    let func = arrs[arrs.length - 1];
    let res = [];
    if (Array.isArray(func)) {
      return zip(...arrs);
    }else {
      arrs.pop();
      return res = zip(...arrs).map(it => func(...it));
    }
  }
  function unzip(arr) {
    return zip(...arr);
  }
  function unzipWith(arr, func) {
    let res = [],len = arr[0].length;
    while (len) {
      res.push(0);
      len --;
    }
    arr.forEach(it => {
      it.forEach((itIt, i) => {
        res[i] = func(res[i], itIt);
      });
    });
    return res;
  }
  function ary(func, n = func.length) {  
    return function (...args) {  
      return func(...args.slice(0, n));
    };
  }
  function before(n, func) {  
    let c = 0, res;
    return function (...args) {  
      if (c < n) {
        return res = func.call(this, ...args);
        c ++;
      }else {
        return res;
      }
    }
  }
  function after(n, func) {  
    let c = 0;
    return function (...args) {  
      c ++;
      if (c > n) {
        return func.call(this, ...args);
      }
    }
  }
  function identity(val) {
    return val;
  }
  function without(arr, ...vals) {  
    let res = [];
    arr.forEach(it => {
      if (!includes(vals, it)) {
        res.push(it);
      }
    });
    return res;
  }
  function xor(...arrs) {  
    let map = new Map();
    let res = [];
    arrs.forEach(it => {
      it.forEach((itVal, iV, arr) => {
        if (map.has(itVal) && indexOf(arr, itVal) == iV) {
          map.set(itVal, map.get(itVal) + 1);
        }else {
          map.set(itVal, 1);
        }
      });
    });
    for (let v of map) {
      if (v[1] == 1) {
        res.push(v[0]);
      }
    }
    return res;
  }
  function xorBy(...arrs) {  
    let func;
    if (!Array.isArray(arrs[arrs.length - 1])) {
      func = isSame(arrs.pop());
    }else {
      func = identity;
    }
    let map = new Map(), box = [];
    let res = [];
    arrs.forEach(it => {
      it.forEach((itVal, iV, arr) => {
        let index = indexOf(box, func(itVal));
        if (index == -1) {
          box.push(func(itVal));
          map.set(itVal, 1);
        }else {
          if(indexOf(arr, itVal) == iV) {
            for (let v of map) {
              if (func(v[0]) == func(itVal)) {
                map.set(v[0], map.get(v[0]) + 1);
              }
            }
          }
        }
      });
    });
    for (let v of map) {
      if (v[1] == 1) {
        res.push(v[0]);
      }
    }
    return res;
  }
  function xorWith(...arrs) {
    let func = arrs[arrs.length - 1];
    let res = [];
    let map = new Map();
    if (Array.isArray(func)) {
      return flatten(arrs);
    }else {
      arrs.pop();
      arrs.forEach(it => {
        it.forEach(itArr => {
          let flag = true;
          for (let v of map) {
            if (func(v[0], itArr)) {
              map.set(v[0], map.get(v[0]) + 1);
              flag = false;
              break;
            }
          }
          flag && map.set(itArr, 1);
        });
      });
    }
    for (let v of map) {
      if (v[1] == 1) {
        res.push(v[0]);
      }
    }
    return res;
  }
  function countBy(arr, func = identity) { 
    let res = {}; 
    if (typeof arr[0] == 'number') {
      for (let v of arr) {
        res[func(v)] ? res[func(v)] ++ : res[func(v)] = 1;
      }
    }else {
      for (let v of arr) {
        res[v.length] ? res[v.length] ++ : res[v.length] = 1;
      }
    }
    return res;
  }
  function every(arr, func = identity) {  
    func = isSame(func);
    for (let v of arr) {
      if (!func(v)) {
        return false;
      }
    }
    return true;
  }
  function filter(arr, func = identity) {  
    let res = [];
    func = isSame(func);
    for (let v of arr) {
      if (func(v)) {
        res.push(v);
      }
    }
    return res;
  }
  function find(arr, func = identity, fromIndex = 0) {  
    let res = [];
    func = isSame(func);
    for (let i = fromIndex; i < arr.length; i ++) {
      if (func(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  }
  function findLast(arr, func = identity, fromIndex = arr.length - 1) {  
    let res = [];
    func = isSame(func);
    for (let i = fromIndex; i >= 0; i --) {
      if (func(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  }
  function flatMap(arr, func = identity) {  
    let res = [];
    func = isSame(func);
    for (let v of arr) {
      res.push(func(v));
    }
    return flatten(res);
  }
  function flatMapDeep(arr, func = identity) {  
    return flattenDeep(flatMap(arr, func));
  }
  function flatMapDepth(arr, func = identity, depth = 1) {  
    return flattenDepth(flatMap(arr, func, depth));
  }
  function forEach(arr, func = identity) {  
    for (let v in arr) {
      func(arr[v], v, arr);
    }
    return arr;
  }
  function forEachRight(arr, func = identity) {  
    for (let i = arr.length - 1; i >= 0; i --) {
      func(arr[i], i, arr);
    }
    return arr;
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
    slice,
    sortedIndex,
    sortedIndexBy,
    sortedIndexOf,
    sortedLastIndex,
    sortedLastIndexBy,
    sortedLastIndexOf,
    sortedUniq,
    sortedUniqBy,
    tail,
    take,
    takeRight,
    takeRightWhile,
    takeWhile,
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
    pullAllBy,
    pullAllWith,
    includes,
    union,
    unionBy,
    unionWith,
    uniq,
    uniqBy,
    uniqWith,
    isEqual,
    zip,
    zipObject,
    zipObjectDeep,
    zipWith,
    unzip,
    unzipWith,
    identity,
    ary,
    before,
    after,
    without,
    xor,
    xorBy,
    xorWith,
    countBy,
    every,
    filter,
    find,
    findLast,
    flatMap,
    flatMapDeep,
    flatMapDepth,
    forEach,
    forEachRight,
  };
}()
