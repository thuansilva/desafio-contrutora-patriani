import { CompassIcon } from "../styles/icons";

const Header = () => (
  <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
    <h1 className="text-gray-dark heading-lg text-center sm:text-left">
      Splendor Jardim
    </h1>

    <div
      className="flex 
      items-center 
      text-sm 
      font-semibold px-4 py-1.5 rounded-full
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
