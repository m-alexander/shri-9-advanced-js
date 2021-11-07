module.exports = class MySet {
  constructor(initial = []) {
    this.data = [];
    initial.forEach((item) => this.add(item));
    this.forEach = this.data.forEach;
  }

  add(value) {
    if (!this.data.includes(value)) {
      this.data.push(value);
    }
    return this;
  }

  delete(value) {
    this.data = this.data.filter((item) => {
      return item !== value;
    });
    return this;
  }

  get size() {
    return this.data.length;
  }

  keys() {
    return this.data.values();
  }

  values() {
    return this.data.values();
  }

  entries() {
    let index = 0;
    const data = this.data;
    const size = this.data.length;
    return {
      [Symbol.iterator]() {
        return {
          next() {
            let result;
            if (index >= size) {
              result = { done: true };
            } else {
              result = { done: false, value: [data[index], data[index]] };
            }
            index++;
            return result;
          },
        };
      },
    };
  }

  clear() {
    this.data = [];
    return this;
  }

  has(value) {
    return this.data.some((item) => item === value);
  }

  [Symbol.iterator]() {
    return this.data.values();
  }

  get [Symbol.toStringTag]() {
    return '^_^';
  }

  valueOf() {
    return this;
  }
};
