import stlogo from "../assets/logo/st-logo.png";
import tdlogo from "../assets/logo/td-logo.png";
import ryslogo from "../assets/logo/rys-logo.svg";
import skllogo from "../assets/logo/skl-logo.png";

const useStore = (store) => {
  switch (store) {
    case "TechLand":
      return tdlogo;
    case "StarTech":
      return stlogo;
    case "Ryans":
      return ryslogo;
    case "SkyLand":
      return skllogo;
  }
};

export default useStore;
