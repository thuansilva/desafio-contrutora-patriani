import { FC } from "react";

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  value: string | number;
}

const StatCard: FC<StatCardProps> = ({ icon: Icon, title, value }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
    <div className="flex items-center text-gray-600 space-x-2">
      <Icon className="w-4 h-4" />
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
    <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
  </div>
);

export default StatCard;
