import { DateTime } from "luxon";
import { getNDates } from "./date";

const isBefore = (date) => {
  const d1 = DateTime.fromISO("2023-06-29");
  const d2 = DateTime.fromISO(date);

  return d2 < d1;
};

const sortDates = (arr, dates) => {
  const completeArr = [];
  let goingPrice = arr[0]["price"];
  const priceDates = arr.map((obj) => obj.date);

  for (let i in dates) {
    const date = dates[i];

    if (isBefore(date)) {
      completeArr.push({ x: date, y: null });
      continue;
    }
    if (priceDates.includes(date)) {
      arr.map((obj) => {
        if (obj.date === date) {
          completeArr.push({ x: date, y: obj.price });
          goingPrice = obj.price;
        }
      });
    } else {
      completeArr.push({ x: date, y: goingPrice });
    }
  }

  return completeArr;
};

export const convertData = (data, range) => {
  if (data.priceHistory.length > 0) {
    const dates = getNDates(range);

    const dataArr = sortDates(data.priceHistory, dates);
    return [
      {
        id: data.productTitle,
        color: "#B83F3F",
        data: dataArr,
      },
    ];
  }
};
