import Google from "../assets/google.jpg";
import Verizon from "../assets/verizon.jpg";
import TrybeCar from "../assets/Trybecar.png";
import FutebolClube from "../assets/FutebolClube.png";
import SolarSystem from "../assets/SolarSystem.png";
import OnlineStore from "../assets/OnlineStore.png";
import Trybesmith from "../assets/Trybesmith.png";
import Marketplace from "../assets/Marketplace.png";
interface Map {
  [key: string]: string | undefined;
}

// google : Google
// google - company name mentioned in Experience.json (lower cased)
// Google - imported nam
export const logo: Map = {
  google: Google,
  verizon: Verizon,
};

export enum Constants {
  USERNAME = "Vinícius Shkromada de Oliveira",
}

// "project name 1": ProjectImg
// "project name 1" - project name mentioned in Projects.json (lower cased)
// ProjectImg - imported name 
export const projectImage: Map = {
  "car shop": TrybeCar,
  "futebol clube": FutebolClube,
  "solar system": SolarSystem,
  "frontend online store": OnlineStore,
  "trybesmith": Trybesmith,
  "marketplace": Marketplace,
};
