export class Upgrade {
  name: string;
  level: number;
  maxLevel: number;
  price: number;
  action: () => any;

  constructor(
    name: string,
    maxLevel: number,
    price: number,
    action: () => any,
  ) {
    this.name = name;
    this.level = 0;
    this.maxLevel = maxLevel;
    this.price = price;
    this.action = action;
  }

  buy() {
    if (this.level >= this.maxLevel) return;
    this.level++;
  }

  getLevel(): number {
    return this.level;
  }

  isAtMax(): boolean {
    return this.level >= this.maxLevel;
  }

  getPrice(): number {
    return this.price;
  }

  increasePrice(amount: number): void {
    this.price += amount;
  }

  doAction() {
    this.action();
  }
}
