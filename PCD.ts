import { Observer } from "./Observer";
import { Subject } from "./Subject";


export class Pcd implements Subject {
  private observers: Observer[] = [];
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    this.observers = this.observers.filter(obs => obs !== o);
  }

  notifyObservers(): void {
    this.observers.forEach(obs => {
      obs.update_humidity("Umidade: 60%");
      obs.update_ph("pH: 7.0");
      obs.update_pressure("Pressão: 1013 hPa");
      obs.update_temperature("Temperatura: 25°C");
    });
  }

  read_humidity(): void {
    this.observers.forEach(obs => obs.update_humidity("Umidade: 60%"));
  }

  read_ph(): void {
    this.observers.forEach(obs => obs.update_ph("pH: 7.0"));
  }

  read_pressure(): void {
    this.observers.forEach(obs => obs.update_pressure("Pressão: 1013 hPa"));
  }

  read_temperature(): void {
    this.observers.forEach(obs => obs.update_temperature("Temperatura: 25°C"));
  }
}
