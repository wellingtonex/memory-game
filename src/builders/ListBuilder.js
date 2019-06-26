export default class Lisbuilder {

  constructor(list) {
    this.list = list || [];
  }

  createList(total) {

    const createListLoop = keyPrefix => {
      for (let i = 1; i <= total; i++) {
        this.list.push({
          id: i,
          key: `${keyPrefix}-${i}`,
          name: `Carta ${i}`,
          isActive: false,
          hasMatch: false
        });
      }
    }
    createListLoop(1);
    createListLoop(2);

    return this;
  }

  build() {
    return this.list;
  }
}