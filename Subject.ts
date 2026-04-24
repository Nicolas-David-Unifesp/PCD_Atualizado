import { Observer } from "./Observer";

export interface Subject {
    read_temperature(o:Observer): void;
    read_humidity(o:Observer): void;
    read_ph(o:Observer): void;
    read_pressure(o:Observer): void;
}
