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
  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

let group = new Group([10, 20]);
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
