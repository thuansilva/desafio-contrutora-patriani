import React from "react";

interface DonutDataItem {
  label?: string;
  value: number;
}

interface MultiSegmentDonutChartProps {
  data: DonutDataItem[];
  colors: string[];
  size?: number;
  strokeWidth?: number;
}

export const MultiSegmentDonutChart: React.FC<MultiSegmentDonutChartProps> = ({
  data,
  colors,
  size = 120,
  strokeWidth = 15,
}) => {
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  let accumulatedAngle = -90; // começa no topo

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {data.map((item, index) => {
        const percentage = item.value / totalValue;
        const strokeDashoffset = circumference * (1 - percentage);
        const angle = 360 * percentage;
        const rotation = accumulatedAngle;
        accumulatedAngle += angle;

        return (
          <circle
            key={index}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={colors[index % colors.length]}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
            style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
          />
        );
      })}
    </svg>
  );
};
