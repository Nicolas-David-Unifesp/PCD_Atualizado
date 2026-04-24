export interface Observer {
    update_humidity(data: string): void;
    update_ph(data: string): void;
    update_pressure(data: string): void;
    update_temperature(data: string): void;
}
