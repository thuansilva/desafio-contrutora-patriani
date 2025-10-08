import React from "react";
import { MultiSegmentDonutChart } from "./multiSegment";

interface UnitsData {
  total: number;
  sold: number;
  reserved: number;
  available: number;
}

interface ChartDataItem {
  value: number;
}

export const SalesInfo: React.FC = () => {
  const unitsData: UnitsData = {
    total: 226,
    sold: 156,
    reserved: 40,
    available: 30,
  };

  const chartData: ChartDataItem[] = [
    { value: unitsData.sold },
    { value: unitsData.reserved },
    { value: unitsData.available },
  ];

  const chartColors: string[] = ["#9C000D", "#C30010", "#F8F4F2"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white py-[34px] pr-12 sm:p-6 rounded-xl border border-gray-light shadow-sm flex flex-col sm:flex-row items-center ">
        <div className="relative ">
          <MultiSegmentDonutChart
            data={chartData}
            colors={chartColors}
            size={200}
            strokeWidth={20}
          />
          <div className="absolute  inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-sm sm:text-sm font-medium text-gray-medium-dark ">
              Unidades
            </span>
            <span className="text-2xl sm:text-3xl font-semibold text-gray-dark">
              {unitsData.total}
            </span>
          </div>
        </div>

        <div className="mt-4 sm:mt-0 sm:ml-20 flex flex-col space-y-3 text-sm-medium">
          {[
            {
              label: "Disponíveis",
              value: unitsData.available,
              color: "#403E3D",
              dot: "#f2f1f0",
            },
            {
              label: "Reservados",
              value: unitsData.reserved,
              color: "#403E3D",
              dot: "#C30010",
            },
            {
              label: "Vendidos",
              value: unitsData.sold,
              color: "#403e3d",
              dot: "#9C000D",
            },
          ].map((item, idx) => (
            <div key={idx} className=" h-[55px] flex items-start space-x-3 ">
              <span
                className={`w-2 h-2 rounded-full mt-[9px]`}
                style={{ backgroundColor: item.dot }}
              ></span>
              <div>
                <p
                  className="text-sm-medium text-gray-medium-dark "
                  style={{ color: item.color }}
                >
                  {item.label}
                </p>
                <p className=" display-xs-semibold text-gray-dark">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-[34px] pr-12 sm:p-6 rounded-xl border border-gray-light shadow-sm flex flex-col sm:flex-row items-center  ">
        <div className="relative mb-4 sm:mb-0">
          <MultiSegmentDonutChart
            data={[{ value: 80 }, { value: 20 }]}
            colors={["#9C000D", "#F3F4F6"]}
            size={200}
            strokeWidth={20}
          />
        </div>
        <div className="text-center sm:text-left sm:ml-20">
          <p className=" text-sm-medium text-neutral-dark-gray">
            Total Vendido
          </p>
          <p className=" display-lg-semibold  text-gray-dark mt-1">80%</p>
        </div>
      </div>
    </div>
  );
};
