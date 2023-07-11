import { DateTime } from "luxon";

export const getNDates = (n) => {
  const dates = [];

  const currentDate = DateTime.now().toLocal({ zone: "Asia/Dhaka" });
  const startDate = currentDate.minus({ days: n });

  for (let i = 1; i <= n; i++) {
    const date = startDate.plus({ days: i });
    dates.push(date.toISODate());
  }
  return dates;
};

// export const getMonthDates = () => {
//   const dates = [];

//   const currentDate = DateTime.now().toLocal({ zone: "Asia/Dhaka" });
//   const startDate = currentDate.minus({ days: 30 });

//   for (let i = 1; i <= 30; i++) {
//     const date = startDate.plus({ days: i });
//     dates.push(date.toISODate());
//   }
//   return dates;
// };

// export const getTwoMonthDates = () => {
//   const dates = [];

//   const currentDate = DateTime.now().toLocal({ zone: "Asia/Dhaka" });
//   const startDate = currentDate.minus({ days: 60 });

//   for (let i = 1; i <= 60; i++) {
//     const date = startDate.plus({ days: i });
//     dates.push(date.toISODate());
//   }
//   return dates;
// };

// export const getSixMonthDates = () => {
//   const dates = [];

//   const currentDate = DateTime.now().toLocal({ zone: "Asia/Dhaka" });
//   const startDate = currentDate.minus({ days: 180 });

//   for (let i = 1; i <= 180; i++) {
//     const date = startDate.plus({ days: i });
//     dates.push(date.toISODate());
//   }
//   return dates;
// };
