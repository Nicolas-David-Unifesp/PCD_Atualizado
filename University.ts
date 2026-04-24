import { Observer } from "./Observer";

export class University implements Observer {
  constructor(private name: string) {}

  update_humidity(data: string): void {
    console.log(`${this.name} recebeu um update: ${data}`);
  }

  update_ph(data: string): void {
    console.log(`${this.name} recebeu um update: ${data}`);
  }

  update_pressure(data: string): void {
    console.log(`${this.name} recebeu um update: ${data}`);
  }

  update_temperature(data: string): void {
    console.log(`${this.name} recebeu um update: ${data}`);
  }
}
