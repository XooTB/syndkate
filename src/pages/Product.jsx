import React, { useState } from "react";
import { convertData } from "../utils/convertData.js";
import PriceGraph from "../components/PriceGraph.jsx";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct.js";
import { HashLoader } from "react-spinners";

const Product = () => {
  const { id } = useParams();
  const { value, isLoading, isError } = useProduct(id);
  const product = value;
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

  if (isLoading) {
    return (
      <div className="w-screen min-h-screen flex items-center justify-center">
        <HashLoader color="#38d8e0" />
      </div>
    );
  }

  if (isError) {
    return <div>Error... Something went wrong..</div>;
  }

  return (
    <div className="pt-[75px]">
      <div className="flex flex-1 justify-center flex-col md:flex-row items-center">
        <div className="w-full flex justify-center flex-1 md:w-1/2 mb-5">
          <img
            src={product.image}
            className="border-solid border-2 border-accent1 bg-background rounded-xl w-3/4 min-w-2/4 md:max-w-[60%]"
          />
        </div>
        <div className="w-full md:w-1/2 px-12 font-opensans">
          <h1 className="text-2xl md:text-3xl font-inika text-text1 font-semibold">
            {product.productTitle}
          </h1>
          <p className="text-lg pb-5 pt-1 md:pt-2 text-text1 font-semibold">
            <span className="font-bold text-accent1">Store:</span>{" "}
            {product.store}
          </p>

          {/* table section */}

          <div className="pt-2 w-full font-noto font-medium text-sm">
            <table className="table-fixed border-collapse w-full md:w-4/5 text-text1 text-sm">
              <tbody>
                <tr className="">
                  <td className=" border-accent1 border-2 px-3 py-3 pr-12 w-1/2 bg-accent1 bg-opacity-40 font-semibold">
                    Current Price
                  </td>
                  <td className=" border-accent1 border-2 px-3 py-3 pr-12 w-1/2 ">
                    {product.latestPrice}
                  </td>
                </tr>
                <tr className="">
                  <td className=" border-accent1 border-2 px-3 py-3 pr-12 w-1/2 bg-accent1 bg-opacity-40 font-semibold">
                    Historical Low
                  </td>
                  <td className=" border-accent1 border-2 px-3 py-3 pr-12 w-1/2">
                    {product.historicalLow}
                  </td>
                </tr>
                <tr className="">
                  <td className=" border-accent1 border-2 px-2 py-3 pr-12 w-1/2 bg-accent1 bg-opacity-40 font-semibold">
                    Historical High
                  </td>
                  <td className=" border-accent1 border-2 px-3 py-3 pr-12 w-1/2">
                    {product.historicalHigh}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Table Section */}

            {/* Buttons */}
          </div>
          <div className="w-full mt-7">
            <a href={product.productLink ? product.productLink : "#"}>
              <button className="px-5 py-3 bg-primary1 text-background font-changa rounded-xl tracking-wide hover:bg-secondary1 hover:text-text1">
                See in Store
              </button>
            </a>
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}

      <div className="w-full pt-5 h-[650px] flex justify-center items-left flex-col bg-background1 bg-opacity-40 mt-5">
        <div className="text-center text-text1 font-inika text-xl font-medium">
          <h2>Historical Price Movement</h2>
        </div>
        <div className="flex justify-start items-center w-full pl-5 md:pl-[135px] pb-5 pt-4">
          <select
            onChange={handleSelect}
            className="py-1 px-2 border-2 border-accent1 rounded-lg font-noto text-sm"
          >
            {dateRanges.map((range, i) => (
              <option value={range.value} key={i}>
                {range.range}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex items-center justify-center">
          {data ? (
            <PriceGraph
              data={data}
              min={parseInt(product.historicalLow)}
              max={parseInt(product.historicalHigh)}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
