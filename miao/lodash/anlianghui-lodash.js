

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
      let reg = /\w+/g;
      func = func.match(reg);
      return function(o) {
        let t = o;
        func.forEach(it => {
          t = t[it];
        });
        return t;
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
    if (value === other) return true;
    if (size(value) == 0 && size(other) == 0) return true;
    if (Object.prototype.toString.call(value) !== Object.prototype.toString.call(other)) return false;
    if (size(value) !== size(other)) return false;
    if (typeof value === 'object') {
      for (let i in value) {
        if (!isEqual(value[i], other[i])) return false;
      }
      return true;
    }
    return value === other;
  }
  function isEqualWith(value, other, func) {
    if (func == undefined) return isEqual(value, other);
    for (let i in value) {
      if (!func(value[i], other[i]) && value[i] !== other[i]) return false;
    }
    return true;
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
  function groupBy(arr, func = identity) {  
    let res = {};
    func = isSame(func);
    for (let v of arr) {
      if (res[func(v)]) {
        res[func(v)].push(v);
      }else {
        res[func(v)] = [v];
      }
    }
    return res;
  }
  function invokeMap(arr, path, ...args) {
    let res = [];
    if (typeof path == 'string') {
      res = arr.map(it => it[path](...args));
    }
    if (typeof path == 'function') {
      res = arr.map(it => path.call(it, ...args));
    }
    return res;
  }
  function map(arr, func = identity) {  
    let res = [];
    func = isSame(func);
    for (let i in arr) {
      res.push(func(arr[i], +i , arr));
    }
    return res;
  }
  function keyBy(arr, func = identity) {  
    let res = {};
    func = isSame(func);
    for (let i in arr) {
      res[func(arr[i])] = arr[i];
    }
    return res;
  }
  function orderBy(arr, func = [identity], orders = ['asc', 'asc']) {  
    arr.sort((a, b) => {
        if (orders[0] == 'asc') {
          return a[func[0]] - b[func[0]];
        }else {
          return b[func[0]] - a[func[0]];
        }
    });
    return arr;
  }
  function partition(arr, func = identity) {  
    func = isSame(func);
    let res = [[],[]];
    for (let i in arr) {
      if (func(arr[i])) {
        res[0].push(arr[i]);
      }else {
        res[1].push(arr[i]);
      }
    }
    return res;
  }
  function reduce(arr, func = identity, acc) {  
    for (let i in arr) {
      if (acc == undefined) {
        acc = arr[i];
        continue;
      }
      acc = func(acc, arr[i], i);
    }
    return acc;
  }
  function reduceRight(arr, func = identity, acc) {  
    for (let i = arr.length - 1; i >= 0; i --) {
      if (acc == undefined) {
        acc = arr[i];
        continue;
      }
      acc = func(acc, arr[i], i);
    }
    return acc;
  }
  function reject(arr, func) {  
    let res = [];
    func = isSame(func);
    for (let i in arr) {
      if(!func(arr[i])) {
        res.push(arr[i]);
      }
    }
    return res;
  }
  function sample(arr) {  
    return arr[Math.random() * arr.length | 0];
  }
  function sampleSize(arr, n = 1) {  
    let res = [];
    if (n > arr.length) n = arr.length;
    while (n) {
      let t = arr[Math.random() * arr.length | 0]
      if(!includes(res, t)) {
        res.push(t);
        n --;
      }
    }
    return res;
  }
  function shuffle(arr) {  
    return sampleSize(arr, arr.length);
  }
  function size(arr) {  
    if (Object.prototype.toString.call(arr) == "[object Object]") {
      return Object.keys(arr).length;
    }
    return arr.length;
  }
  function some(arr, func) {  
    func = isSame(func);
    for (let i in arr) {
      if (func(arr[i])) {
        return true;
      }
    }
    return false;
  }
  function defer(func, ...args) {  
    return setTimeout(func, 0, ...args) - 1;
  }
  function delay(func, wait, ...args) {
    return setTimeout(func, wait, ...args) - 1;
  }
  function flip(func) {
    return function(...args) {
      return func(...args.reverse());
    }
  }
  function castArray(val) {
    if (arguments.length === 0) {
      return [];
    }
    if (!Array.isArray(val)) {
      return [val];
    }
    return val;
  }
  function conformsTo(obj, source) {
    for (let i in obj) {
      if (source[i] && !source[i](obj[i])) {
        return false;
      }
    }
    return true;
  }
  function eq(value, other) {
    if (value !== value && other !== other) return true;
    return value === other;
  }
  function gt(value, other) {
    return value > other;
  }
  function gte(value, other) {
    return value >= other;
  }
  function isArguments(val) {
    return Object.prototype.toString.call(val) === "[object Arguments]";
  }
  function isArray(val) {
    return Object.prototype.toString.call(val) === "[object Array]";
  }
  function isArrayBuffer(val) {
    return Object.prototype.toString.call(val) === "[object ArrayBuffer]";
  }
  function isArrayLike(val) {
    return typeof val !== 'function' && val.length >= 0 && val.length <= Number.MAX_SAFE_INTEGER;
  }
  function isArrayLikeObject(val) {
    return isArrayLike(val) && Object.prototype.toString.call(val) !== "[object Object]";
  }
  function isBoolean(val) {
    return Object.prototype.toString.call(val) === "[object Boolean]";
  }
  function isDate(val) {  
    return Object.prototype.toString.call(val) === "[object Date]";
  }
  function isElement(val) {
    return Object.prototype.toString.call(val) === "[object HTMLBodyElement]";
  }
  function curry(f, length = f.length) {
    return function (...args) {
        if (args.length < length) {
            return curry(f.bind(null, ...args), length - args.length)
        } else {
            return f(...args)
        }
    }
  }
  function isEmpty(val) {  
    for (let i in val) {
      return false;
    }
    return true;
  }
  function isError(val) {
    return Object.prototype.toString.call(val) === "[object Error]";
  }
  function isFinite(val) {
    if (typeof val == 'number') {
      return val + 1 !== val;
    }
    return false;
  }
  function isFunction(val) {  
    return typeof val === 'function';
  }
  function isInteger(val) {  
    return isFinite(val) && val + 1 - 1 == val;
  }
  function isLength(val) {
    return isInteger(val) && val < 10 ** 15;
  }
  function isMap(val) {  
    return Object.prototype.toString.call(val) === "[object Map]";
  }
  function isMatch(object, source) {  
    for (let i in object) {
      if (isEqual(object[i], source[i])) return true;
    }
    return false;
  }
  function isMatchWith(object, source, func) {  
    if (func == undefined) return isMatch(object, source);
    for (let i in object) {
      if (func(object[i], source[i])) return true;
    }
    return false;
  }
  function isNaN(val) {
    if (typeof val == 'number' || typeof val == 'object') {
      return val.valueOf() !== val.valueOf();
    }
    return val !== val;
  }
  function isNative(val) {  
    return includes(Function.prototype.toString.call(val), "[native code]");
  }
  function isNil(val) {
    return val === null || val === undefined;
  }
  function isNull(val) {
    return val === null;
  }
  function isNumber(val) {
    return Object.prototype.toString.call(val) === '[object Number]';
  }
  function isObject(val) {  
    return val !== null && typeof val === 'object' || typeof val === 'function';
  }
  function isObjectLike(val) {  
    return val !== null && typeof val === 'object';
  }
  function isPlainObject(val) {  
    return val.__proto__ == Object.prototype || val.__proto__ == null;
  }
  function isRegExp(val) {
    return Object.prototype.toString.call(val) === '[object RegExp]';
  }
  function isSafeInteger(val) {
    return isInteger(val) && Math.floor(val) == val;
  }
  function isSet(val) {
    return Object.prototype.toString.call(val) === '[object Set]';
  }
  function isString(val) {
    return Object.prototype.toString.call(val) === '[object String]';
  }
  function isSymbol(val) {
    return Object.prototype.toString.call(val) === '[object Symbol]';
  }
  function isTypedArray(val) {
    return Object.prototype.toString.call(val) === '[object Uint8Array]';
  }
  function isUndefined(val) {
    return Object.prototype.toString.call(val) === '[object Undefined]';
  }
  function isWeakMap(val) {
    return Object.prototype.toString.call(val) === '[object WeakMap]';
  }
  function isWeakSet(val) {
    return Object.prototype.toString.call(val) === '[object WeakSet]';
  }
  function lt(value, other) {
    return value < other;
  }
  function lte(value, other) {
    return value <= other;
  }
  function toFinite(val) {
    if (val > Number.MAX_VALUE) {
      return 1.7976931348623157e+308;
    }
    if (val < Number.MIN_VALUE) {
      return 5e-324;
    }
    if (isNaN(+val)) return 0;
    return +val;
  }
  function toInteger(val) {
    if (val > Number.MAX_VALUE) {
      return Number.MAX_VALUE;
    }
    if (isNaN(+val)) return 0;
    return val | 0;
  }
  function toLength(val) {
    if (val < 0) return 0;
    if (val > 4294967295) return 4294967295;
    return toInteger(val);
  }
  function toNumber(val) {
    if (typeof +val === "number") return +val;
    return 0;
  }
  function toSafeInteger(val) {
    if (val > Number.MAX_SAFE_INTEGER) {
      return Number.MAX_SAFE_INTEGER;
    }
    if (val < Number.MIN_SAFE_INTEGER) {
      return Number.MIN_SAFE_INTEGER;
    }
    return toInteger(val);
  }
  function assign(obj, ...source) {
    source.forEach(it => {
      for (let i of Object.keys(it)) {
        obj[i] = it[i];
      }
    });
    return obj;
  }
  function assignIn(obj, ...source) {
    source.forEach(it => {
      for (let i in it) {
        obj[i] = it[i];
      }
    });
    return obj;
  }
  function ceil(val, precision = 0) {
    return Math.ceil(val * 10 ** precision) / 10 ** precision;
  }
  function divide(dividend, dicisor) {
    return dividend / dicisor;
  }
  function floor(val, precision = 0) {
    return Math.floor(val * 10 ** precision) / 10 ** precision;
  }
  function max(arr) {
    let max = arr[0];
    for (let v of arr) {
      if (v > max) max = v;
    }
    return max;
  }
  function maxBy(arr, func = identity) {
    let max = arr[0];
    func = isSame(func);
    for (let v of arr) {
      if (func(v) > func(max)) max = v;
    }
    return max;
  }
  function mean(arr) {
    return sum(arr) / arr.length;
  }
  function meanBy(arr, func = identity) {
    return sumBy(arr, func) / arr.length;
  }
  function min(arr) {
    let min = arr[0];
    for (let v of arr) {
      if (v < min) min = v;
    }
    return min;
  }
  function minBy(arr, func = identity) {
    let min = arr[0];
    func = isSame(func);
    for (let v of arr) {
      if (func(v) < func(min)) min = v;
    }
    return min;
  }
  function multiply(multiplier, multiplicand) {
    return multiplier * multiplicand;
  }
  function round(val, precision = 0) {
    return Math.round(val * 10 ** precision) / 10 ** precision;
  }
  function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
  }
  function sum(arr) {
    let sum = 0;
    arr.forEach(it => sum += it);
    return sum;
  }
  function sumBy(arr, func = identity) {
    let sum = 0;
    func = isSame(func);
    arr.forEach(it => sum += func(it));
    return sum;
  }
  function clamp(num, lower, upper) {
    if (num < lower) return lower;
    if (num > upper) return upper;
    return num;
  }
  function inRange(num, start = 0, end) {
    if (end == undefined) {
      end = start;
      start = 0;
    } 
    if (start > end) {
      let t = start;
      start = end;
      end = t;
    }
    return num >= start && num < end;
  }
  function random(lower = 0, upper = 1, floating) {
    if (typeof arguments[0] === "boolean" && arguments[0]) {
      lower = 0;
      upper = 1;
      floating = true;
    }
    if (typeof arguments[1] === "boolean" && arguments[0]) {
      upper = 1;
      floating = true;
    }
    if (lower > upper) {
      upper = lower;
      lower = 0;
    }
    if (floating || (lower | 0) < lower || (upper | 0) < upper) {
      return Math.random() * (upper - lower) + lower;
    }
    return Math.round(Math.random() * (upper - lower)) + lower;
  }
  function at(obj, paths) {
    let reg = /\w+/g;
    let res = [];
    paths = paths.map(it => it.match(reg));
    paths.forEach(it => {
      let t = obj;
      it.forEach(itt => {
        t = t[itt];
      });
      res.push(t);
    });
    return res;
  }
  function defaults(obj, ...sources) {
    if (sources !== undefined) {
      sources.forEach(it => {
        for (let k in it) {
          if (!obj[k]) obj[k] = it[k];
        }
      });
    }
    return obj;
  }
  function defaultsDeep(obj, ...sources) {  
    if (sources !== undefined) {
      sources.forEach(it => {
        for (let k in it) {
          if (!obj[k]) {
            obj[k] = it[k];
          }else {
            if (isObject(it[k])) {
              defaultsDeep(obj[k], it[k]);
            }
          }
        }
      });
    }
    return obj;
  }
  function findKey(obj, func = identity) { 
    func = isSame(func); 
    for (let k in obj) {
      if (func(obj[k])) {
        return k;
      }
    }
  }
  function findLastKey(obj, func = identity) {  
    func = isSame(func);
    let res;
    for (let k in obj) {
      if (func(obj[k])) {
        res = k;
      }
    }
    return res;
  }
  function forIn(obj, func = identity) {  
    for (let k in obj) {
      func(obj[k], k, obj);
    }
    return obj;
  }
  function forInRight(obj, func = identity) {  
    let res = [];
    for (let k in obj) {
      res.push(obj[k], k, obj);
    }
    for (let i = res.length - 1; i >= 0; i -= 3) {
      func(res[i], res[i - 1], res[i - 2]);
    }
    return obj;
  }
  function forOwn(obj, func = identity) {  
    for (let k in obj) {
      if (obj.__proto__[k] === undefined) {
        func(obj[k], k, obj);
      }
    }
    return obj;
  }
  function forOwnRight(obj, func = identity) {  
    let res = [];
    for (let k in obj) {
      if (obj.__proto__[k] === undefined) {
        res.push(obj[k], k, obj);
      }
    }
    for (let i = res.length - 1; i >= 0; i -= 3) {
      func(res[i], res[i - 1], res[i - 2]);
    }
    return obj;
  }
  function functions(obj) {  
    let res = [];
    for (let k in obj) {
      if (obj.__proto__[k] === undefined) {
        res.push(k);
      }
    }
    return res;
  }
  function functionsIn(obj) {  
    let res = [];
    for (let k in obj) {
      res.push(k);
    }
    return res;
  }
  function get(obj, path, defaultValue) {
    if (isString(path)) {
      let reg = /\w+/g;
      path = path.match(reg);
    }
    for (let v of path) {
      if (isFunction(obj[v])) {
        func = obj[v];
        continue;
      }
      if (obj[v]) {
        obj = obj[v];
      }else {
        return defaultValue;
      }
    }
    return obj;
  }
  function has(obj, path) {  
    let res = get(obj, path);
    return res !== undefined && size(res) !== 0; 
  }
  function hasIn(obj, path) {
    if (isString(path)) {
      let reg = /\w+/g;
      path = path.match(reg);
    }
    for (let v of path) {
      if (obj.__proto__[v]) {
        obj = obj[v];
      }else {
        return false;
      }
    }
    return true;
  }
  function invert(obj) {
    let res = {};
    for (let k in obj) {
      res[obj[k]] = k;
    }
    return res;
  }
  function invertBy(obj, func = identity) {  
    let res = {};
    for (let k in obj) {
       res[func(obj[k])] ? res[func(obj[k])].push(k) : res[func(obj[k])] = [k];
    }
    return res;
  }
  function invoke(obj, path, ...args) {
    if (isString(path)) {
      let reg = /\w+/g;
      path = path.match(reg);
    }
    for (let v of path) {
      if (isFunction(obj[v])) {
        if (path[path.length - 1] === v) {
          let func = v;
          return obj[func](...args);
        } else {
          obj = obj[v]();
          continue;
        }
      }
      if (obj[v]) {
        obj = obj[v];
      }else {
        return defaultValue;
      }
    }
  }
  function keys(obj) {  
    let res = [];
    let o = {};
    if (!isObject(obj)) {
      for (let i in obj) {
        o[i] = obj[i];
      }
      obj = o;
    }
    for (let k in obj) {
      if (obj.__proto__[k] === undefined) {
        res.push(k);
      }
    }
    return res;
  }
  function keysIn(obj) {  
    let res = [];
    let o = {};
    if (!isObject(obj)) {
      for (let i in obj) {
        o[i] = obj[i];
      }
      obj = o;
    }
    for (let k in obj) {
      res.push(k);
    }
    return res;
  }
  function mapKeys(obj, func = identity) {  
    let res = {};
    for (let k in obj) {
      if (obj.__proto__[k] === undefined) {
        res[func(obj[k], k, obj)] = obj[k];
      }
    }
    return res;
  }
  function mapValues(obj, func = identity) {  
    let res = {};
    func = isSame(func);
    for (let k in obj) {
      if (obj.__proto__[k] === undefined) {
        res[k] = func(obj[k], k, obj);
      }
    }
    return res;
  }
  function merge(obj, ...sources) {  
    sources.forEach(it => {
      for (let k in it) {
        if (obj[k]) {
          for (let i in it[k]) {
            if (obj[k][i]) {
              for (let o in it[k][i]) {
                obj[k][i][o] = it[k][i][o];
              }
            }else {
              obj[k].push(it[k][i]);
            }
          }
        }else {
          obj[k] = it[k];
        }
      }
    });
    return obj;
  }
  function mergeWith(obj, ...sources) {  
    let func = sources.pop();
    sources.forEach(it => {
      for (let k in it) {
        if (obj[k]) {
          obj[k] = func(obj[k], it[k], k, obj, it);
        }else {
          obj[k] = it[k];
        }
      }
    });
    return obj;
  }
  function omit(obj, props) {  
    let res = {};
    for (let k in obj) {
      if (!includes(props, k)) {
        res[k] = obj[k];
      }
    }
    return res;
  }
  function omitBy(obj, func = identity) {  
    let res = {};
    for (let k in obj) {
      if (!func(obj[k])) {
        res[k] = obj[k];
      }
    }
    return res;
  }
  function pick(obj, props) {  
    let res = {};
    for (let k in obj) {
      if (includes(props, k)) {
        res[k] = obj[k];
      }
    }
    return res;
  }
  function pickBy(obj, func = identity) {  
    let res = {};
    for (let k in obj) {
      if (func(obj[k])) {
        res[k] = obj[k];
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
    isEqualWith,
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
    groupBy,
    invokeMap,
    map,
    keyBy,
    orderBy,
    partition,
    reduce,
    reduceRight,
    reject,
    sample,
    sampleSize,
    shuffle,
    size,
    some,
    defer,
    delay,
    flip,
    castArray,
    conformsTo,
    eq,
    gt,
    gte,
    isArguments,
    isArray,
    isArrayBuffer,
    isArrayLike,
    isArrayLikeObject,
    isBoolean,
    isDate,
    isElement,
    curry,
    isEmpty,
    isError,
    isFinite,
    isFunction,
    isInteger,
    isLength,
    isMap,
    isMatch,
    isMatchWith,
    isNaN,
    isNative,
    isNil,
    isNull,
    isNumber,
    isObject,
    isObjectLike,
    isPlainObject,
    isRegExp,
    isSafeInteger,
    isSet,
    isString,
    isSymbol,
    isTypedArray,
    isUndefined,
    isWeakMap,
    isWeakSet,
    lt,
    lte,
    toFinite,
    toInteger,
    toLength,
    toNumber,
    toSafeInteger,
    assign,
    assignIn,
    ceil,
    divide,
    floor,
    max,
    maxBy,
    mean,
    meanBy,
    min,
    minBy,
    multiply,
    round,
    subtract,
    sum,
    sumBy,
    clamp,
    inRange,
    random,
    at,
  };
}()
