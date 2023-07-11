import React, { useState } from "react";
import { productData } from "../constants/productData.js";
import { convertData } from "../utils/convertData.js";
import PriceGraph from "../components/PriceGraph.jsx";

const Product = () => {
  const product = productData;
  const [range, setRange] = useState(7);
  const data = convertData(product, range);

  const dateRanges = [
    {
      range: "7 Days",
      value: 7,
    },
    {
      range: "15 Days",
      value: 15,
    },
    {
      range: "30 Days",
      value: 30,
    },
    {
      range: "60 Days",
      value: 60,
    },
  ];

  const handleSelect = (e) => {
    setRange(e.target.value);
  };

  return (
    <div className="pt-[75px]">
      <div className="flex flex-1 justify-center">
        <div className="w-1/2 flex justify-end">
          <img
            src={product.image}
            className="max-h-[25vw] max-w-[25vw] min-h-[22vw]  border-solid border-2 border-text rounded-2xl mr-[5vw]"
          />
        </div>
        <div className="w-1/2 font-noto">
          <h1 className="text-3xl font-changa ">{product.productTitle}</h1>
          <p className="text-lg pb-5 pt-1">
            <span className="font-bold">Store:</span> {product.store}
          </p>

          {/* table section */}

          <div className="pt-2 w-full font-noto font-medium text-sm">
            <table className="table-fixed border-collapse w-4/5">
              <tbody>
                <tr className="">
                  <td className="border-text-200 border-2 px-3 py-3 pr-12 w-1/2 bg-secondary">
                    Current Price
                  </td>
                  <td className="border-text-200 border-2 px-3 py-3 pr-12 w-1/2 ">
                    {product.latestPrice}
                  </td>
                </tr>
                <tr className="">
                  <td className="border-text-200 border-2 px-3 py-3 pr-12 w-1/2 bg-secondary">
                    Historical Low
                  </td>
                  <td className="border-text-200 border-2 px-3 py-3 pr-12 w-1/2">
                    {product.historicalLow}
                  </td>
                </tr>
                <tr className="">
                  <td className="border-text-200 border-2 px-3 py-3 pr-12 w-1/2 bg-secondary">
                    Historical High
                  </td>
                  <td className="border-text-200 border-2 px-3 py-3 pr-12 w-1/2">
                    {product.historicalHigh}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Table Section */}
            {/* Buttons */}
          </div>
          <div className="w-full mt-7">
            <a href="#">
              <button className="px-5 py-3 bg-primary text-background font-changa rounded-xl tracking-wide hover:bg-secondary hover:text-text">
                See in Store
              </button>
            </a>
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}

      <div className="w-full pt-10 h-[600px] flex justify-center items-left flex-col">
        <div className="text-center text-text font-noto font-semibold">
          <h2>Historical Prices</h2>
        </div>
        <div>
          <select onChange={handleSelect}>
            {dateRanges.map((range) => (
              <option value={range.value}>{range.range}</option>
            ))}
          </select>
        </div>
        <div>
          <PriceGraph data={data} />
        </div>
      </div>
    </div>
  );
};

export default Product;
