import { Prototype } from "./Prototype";

export class Person implements Prototype {
  private name: string;
  private age: number;
  private address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  clone(): Person {
    return new Person(this.name, this.age, this.address);
  }

  setAddress(newAddress: string): void {
    this.address = newAddress;
  }

  displayInfo(): void {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`
    );
  }
}
