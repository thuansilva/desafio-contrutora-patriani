import { CompassIcon } from "../styles/icons";

const Header = () => (
  <div className="flex flex-wrap justify-between items-center gap-4">
    <h1 className="text-gray-dark heading-lg">Splendor Jardim</h1>

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
