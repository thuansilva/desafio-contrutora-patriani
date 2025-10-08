import { CompassIcon } from "../styles/icons";

const Header = () => (
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
    <h1 className="text-2xl font-bold leading-8 text-gray-dark">
      Splendor Jardim
    </h1>

    <div
      className="flex 
      items-center 
      text-sm 
      font-semibold px-4 py-1.5 rounded-full mt-2 sm:mt-0 
      bg-alert-surface
      text-alert-dark
      "
    >
      Em Construção
      <CompassIcon className="w-4 h-4 ml-2" />
    </div>
  </div>
);

export default Header;
