import { atom } from "jotai";

export const productInfo = atom({
  _id: {
    $oid: "",
  },
  productTitle: "",
  store: "",
  image: "",
  latestPrice: "",
  priceHistory: [],
  historicalLow: "",
  productLink: "",
});
