import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { graphTheme } from "../constants/graphTheme";

const PriceGraph = ({ data, min, max }) => {
  return (
    <div className="h-[500px] pb-5 w-[94%] md:w-[80%] flex items-center">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 40, bottom: 50, left: 60 }}
        theme={graphTheme}
        xScale={{
          format: "%Y-%m-%d",
          precision: "day",
          type: "time",
          useUTC: false,
        }}
        yScale={{
          type: "linear",
          min: min - 1500,
          max: max + 1500,
        }}
        curve="monotoneX"
        xFormat="time:%Y-%m-%d"
        // yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: "%b %d",
          tickValues: "every 2 days",
          tickPadding: 9,
          tickRotation: 0,
          legend: "Date",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 6,
          tickPadding: 3,
          tickRotation: 0,
          legend: "Price",
          legendOffset: -50,
          legendPosition: "middle",
        }}
        enableGridY={false}
        colors={{ scheme: "category10" }}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        enableSlices={false}
        // legends={[
        //   {
        //     anchor: "bottom-right",
        //     direction: "column",
        //     justify: false,
        //     translateX: 100,
        //     translateY: 0,
        //     itemsSpacing: 0,
        //     itemDirection: "left-to-right",
        //     itemWidth: 80,
        //     itemHeight: 20,
        //     itemOpacity: 0.75,
        //     symbolSize: 12,
        //     symbolShape: "circle",
        //     symbolBorderColor: "rgba(0, 0, 0, .5)",
        //     effects: [
        //       {
        //         on: "hover",
        //         style: {
        //           itemBackground: "rgba(0, 0, 0, .03)",
        //           itemOpacity: 1,
        //         },
        //       },
        //     ],
        //   },
        // ]}
      />
    </div>
  );
};

export default PriceGraph;
