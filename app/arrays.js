exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    let result;

    for (let idx = 0; idx < arr.length; idx++) {
       if (arr[idx] === item) {
        result = idx;
       }
    }

    return result || -1;
  },

  sum: function(arr) {
    let sum = 0;

    arr.forEach(function(item) {
        sum += item;
    });

    return sum;
  },

  remove: function(arr, itemToRemove) {
    let result = [];

    arr.forEach(function(item) {
      if (item !== itemToRemove) {
        result.push(item);
      }
    });

    return result;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i ++) {
      if (arr[i] === item) {
        var removed = arr.splice(i, 1);
        console.log(removed, arr);
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr[arr.length] = item;

    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);

    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);

    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);

    return arr;
  },

  concat: function(arr1, arr2) {
    let s1 = arr1.join(' ');
    let s2 = arr2.join(' ');

    return (s1 + ' ' + s2).split(' ');

    //return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    let start = arr.slice(0, index);
    let end = arr.slice(index, arr.length);

    start.push(item);

    let result = start.concat(end);

    return result;
  },

  count: function(arr, item) {
    let result = 0;

    for (thing of arr) {
      if (thing === item) {
        result ++;
      }
    }

    return result;
  },

  duplicates: function(arr) {
    let map = {};
    let result = [];

    for (let item of arr) {
      if (typeof map[item] === 'undefined') {
        map[item] = 1;
      } else {
        map[item] += 1;
      }
    }

    for (prop in map) {
      if (map[prop] > 1) {
        result.push(parseInt(prop));
      }
    }

    return result;
  },

  square: function(arr) {
    let sqr = x => x * x;

    return arr.map(sqr);
  },

  findAllOccurrences: function(arr, target) {
    let occr = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occr.push(i);
      }
    }

    return occr;
  }
};
