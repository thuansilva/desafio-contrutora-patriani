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

  const chartColors: string[] = ["#9C000D", "#C30010", "#F3F4F6"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card de Unidades */}
      <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-around">
        <div className="relative">
          <MultiSegmentDonutChart
            data={chartData}
            colors={chartColors}
            size={150}
            strokeWidth={20}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xs sm:text-sm text-gray-600">Unidades</span>
            <span className="text-2xl sm:text-3xl font-bold text-gray-800">
              {unitsData.total}
            </span>
          </div>
        </div>

        <div className="mt-4 sm:mt-0 sm:ml-8 flex flex-col space-y-3">
          {[
            {
              label: "Disponíveis",
              value: unitsData.available,
              color: "#403E3D",
              dot: "bg-gray-300",
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
              color: "#403E3D",
              dot: "#9C000D",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <span
                className={`w-2 h-2 rounded-full mt-[9px]`}
                style={{ backgroundColor: item.dot }}
              ></span>
              <div>
                <p
                  className="text-xs sm:text-sm font-medium leading-5"
                  style={{ color: item.color }}
                >
                  {item.label}
                </p>
                <p className="font-bold text-lg sm:text-xl text-gray-800">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card de Total Vendido */}
      <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-center sm:space-x-8">
        <div className="relative mb-4 sm:mb-0">
          <MultiSegmentDonutChart
            data={[{ value: 80 }, { value: 20 }]}
            colors={["#9C000D", "#F3F4F6"]}
            size={150}
            strokeWidth={20}
          />
        </div>
        <div className="text-left">
          <p className="text-xs sm:text-sm text-gray-600">Total Vendido</p>
          <p className="text-3xl sm:text-5xl font-bold text-gray-800 mt-1">
            80%
          </p>
        </div>
      </div>
    </div>
  );
};
