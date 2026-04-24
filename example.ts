import { Observer } from "./Observer";
import { Subject } from "./Subject";
import { Pcd } from "./PCD";
import { University } from "./University";

//Exemplo de uso
const pcd_rio_Negro = new Pcd("PCD Rionegro");
const pcd_rio_Solimoes = new Pcd("PCD Riosolimoes");
const pcd_rio_Branco = new Pcd("PCD Riobranco");
const university = new University("Unicamp");
const university2 = new University("USP");

pcd_rio_Branco.registerObserver(university);
pcd_rio_Branco.registerObserver(university2);

pcd_rio_Solimoes.registerObserver(university);

pcd_rio_Negro.removeObserver(university2);

pcd_rio_Branco.read_pressure();
