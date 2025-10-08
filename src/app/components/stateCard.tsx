import { FC } from "react";

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  value: string | number;
}

const StatCard: FC<StatCardProps> = ({ icon: Icon, title, value }) => (
  <div className=" flex flex-col gap-3 bg-white shadow-sm p-6 rounded-xl border border-gray-light shadow-card-shadow">
    <div className="flex items-center text-gray-medium-dark font-medium space-x-2">
      <Icon className="w-4 h-4" />
      <h3 className="text-sm font-medium">{title}</h3>
    </div>

    <p className="mt-2 text-2xl font-semibold text-gray-dark">{value}</p>
  </div>
);
export default StatCard;
