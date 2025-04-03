export class Product {
  private name: string;
  private category: string;
  private price: number;
  private stock: number;

  constructor(name: string, category: string, price: number, stock: number) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }

  public getName(): string {
    return this.name;
  }

  public getCategory(): string {
    return this.category;
  }

  public getPrice(): number {
    return this.price;
  }

  public getStock(): number {
    return this.stock;
  }
}
