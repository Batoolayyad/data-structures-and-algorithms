class Node {
  constructor(value = null, childrenNum = null) {
    this.value = value;
    this.childrenNum = childrenNum;
    for (let i = 1; i <= childrenNum; i++) {
      this[`child${i}`] = (new Node())
    }
  }
}
class KaryTree {
  constructor() {
    this.root = null;
  }
  add(node) {
    if (!this.root) {
      this.root = node;
    } else {
      if (node.childrenNum > this.root.childrenNum) {
        return 'this curr has more children than max';
      } else {
        _traverse(this.root);
      }
      function _traverse(curr) {
        let size = false;
        for (let i = 1; i <= curr.childrenNum; i++) {
          if (curr[`child${i}`].value == null) {
            size = true;
          }
        }
        if (size) {
          for (let i = 1; i <= curr.childrenNum; i++) {
            if (curr[`child${i}`].value == null) {
              curr[`child${i}`] = node;
              break;
            }
          }
        } else {
          for (let i = 1; i <= curr.childrenNum; i++) {
            if (curr[`child${i}`][`child${curr[`child${i}`].childrenNum}`].value == null) {
              _traverse(curr[`child${i}`]);
              break;
            }
          }
        }
      }
    }
  }
}
function fizzBuzz(tree) {
  let kAry = new KaryTree();
  let root = { ...tree.root };
  if (!tree.root) {
    return 'Empty tree';
  }
  if (root.value % 3 == 0 && root.value % 5 !== 0) {
    root.value = 'Fizz';
  } else if (root.value % 3 == 0 && root.value % 5 == 0) {
    root.value = 'Fizz Buzz';
  } else if (root.value % 5 == 0 && root.value % 3 !== 0) {
    root.value = 'Buzz';
  } else {
    root.value = root.value.toString();
  }
  kAry.add(new Node(root.value, root.childrenNum));
  move(root);
  function move(curr) {
    for (let i = 1; i <= curr.childrenNum; i++) {
      if (curr[`child${i}`].value !== null) {
        if (curr[`child${i}`].value % 3 == 0 && curr[`child${i}`].value % 5 !== 0) {
          curr[`child${i}`].value = 'Fizz';
        } else if (curr[`child${i}`].value % 3 == 0 && curr[`child${i}`].value % 5 == 0) {
          curr[`child${i}`].value = 'Fizz Buzz';
        } else if (curr[`child${i}`].value % 5 == 0 && curr[`child${i}`].value % 3 !== 0) {
          curr[`child${i}`].value = 'Buzz';
        } else {
          curr[`child${i}`].value = curr[`child${i}`].value.toString();
        }
      }
    }
    for (let i = 1; i <= curr.childrenNum; i++) {
      move(curr[`child${i}`])
    }
  }
  return root;
}
module.exports = {
  KaryTree,
  fizzBuzz,
  Node,
}