class Group {
  constructor() {
    this.members = [];
  }

  add(a) {
    if (!this.members.includes(a)) {
      this.members.push(a);
    }
  }

  //add value by calling the methd has() created below
  add2(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }
  delete(value) {
    this.members = this.members.filter((mb) => mb !== value);
  }

  // this the proper way to check if there exist a value in the array
  has(value) {
    return this.members.includes(value);
  }

  has2(value) {
    if (this.members.includes(value)) {
      return true;
    } else {
      return false;
    }
  }

  //the from method to loop over and get values
  //Note we  use static to create new instance of group object
  //we don't need to create a new instanciation
  //we can just use this one like let gp = Group.from([20,50])
  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

let group = new Group();
console.log(group);
//let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.add(20);
group.add(30);
group.add2(70);
group.add2(90);
console.log("has2,false", group.has2(0));
console.log(" has2 true", group.has2(90));

group.delete(10);

console.log("has, true", group.has(10));
console.log("has, false", group.has(5));
console.log(group);

let gp = Group.from([50, 80]);
console.log(gp);
gp.has2(60);
gp.has2(30);

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    } else {
      let result = {
        value: this.group.members[this.position],
        done: false,
      };
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
