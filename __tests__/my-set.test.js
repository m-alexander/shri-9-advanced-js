const MySet = require('../solution');

describe('MySet', () => {
  let set;

  const object = {
    getValue() {
      return this.value;
    },
  };

  const data = {
    value: 42,
  };

  beforeAll(() => {
    set = new MySet([4, 8, 15, 15, 16, 23, 42]);
  });

  it('хранит только уникальные значения', () => {
    expect([...set]).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('есть свойство size', () => {
    expect(set.size).toEqual(6);
  });

  it('работает в цикле for-of', () => {
    const result = [];
    for (const item of set) {
      result.push(item);
    }
    expect(result).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('есть методы keys, values, entries', () => {
    expect([...set.keys()]).toEqual([4, 8, 15, 16, 23, 42]);
    expect([...set.values()]).toEqual([4, 8, 15, 16, 23, 42]);
    expect([...set.entries()]).toEqual([
      [4, 4],
      [8, 8],
      [15, 15],
      [16, 16],
      [23, 23],
      [42, 42],
    ]);
  });

  it('есть метод clear', () => {
    set.clear();
    expect(set.size).toEqual(0);
  });

  it('есть метод add', () => {
    set.add(object);
    set.add(data);
    set.add(object).add(object).add(object);

    expect(set.size).toEqual(2);
  });

  it('есть метод delete', () => {
    set.delete(data);

    expect(set.size).toEqual(1);
  });

  it('есть метод has', () => {
    expect(set.has({})).toEqual(false);
    expect(set.has(object)).toEqual(true);
    expect(set.has(data)).toEqual(false);
  });

  it('и кое-что еще', () => {
    expect(set === set.valueOf()).toEqual(true);
    expect(String(set)).toEqual('[object ^_^]');
    expect(Object.prototype.toString.call(set)).toEqual('[object ^_^]');
  });

  it('есть forEach, который делает какие-то странные вещи...', (done) => {
    set.forEach(function (item) {
      expect(item.getValue.call(this)).toEqual(42);
      done();
    }, data);
  });
});
