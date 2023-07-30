import stlogo from "../assets/logo/st-logo.png";
import tdlogo from "../assets/logo/td-logo.png";

const useStore = (store) => {
  switch (store) {
    case "TechLand":
      return tdlogo;
    case "StarTech":
      return stlogo;
  }
};

export default useStore;
