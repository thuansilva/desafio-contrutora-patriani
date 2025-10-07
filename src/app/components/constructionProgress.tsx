import React from "react";

const ConstructionProgress: React.FC = () => {
  const totalImages: number = 5;
  const imagesBuild: string[] = Array.from(
    { length: totalImages },
    (_, i) => `/assets/build/${i + 1}.png`
  );

  return (
    <div className="bg-white py-16 px-8 rounded-xl border h-80 border-gray-200 shadow-sm">
      <div>
        <p className="text-sm text-gray-500">Entrega prevista</p>
        <p className="text-2xl font-bold text-gray-800">Em Construção</p>
      </div>
      <div className="border-t border-gray-200 my-4"></div>
      <div className="flex items-center space-x-3">
        {imagesBuild.map((src: string, index: number) => (
          <img
            key={index}
            src={src}
            alt={`Foto da obra ${index + 1}`}
            className="w-16 h-16 object-cover rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default ConstructionProgress;
