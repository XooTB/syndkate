import homeBackground from "../assets/backgrounds/background-home.svg";
import searchBackground from "../assets/backgrounds/background-search.svg";
import aboutBackground from "../assets/backgrounds/background-about.svg";
import productBackground from "../assets/backgrounds/background-product.svg";

const useBackground = (location) => {
  switch (location) {
    case "/":
      return homeBackground;
    case "/search":
      return searchBackground;
    case "/about":
      return aboutBackground;
    case "/product":
      return productBackground;
    default:
      return productBackground;
  }
};

export default useBackground;
