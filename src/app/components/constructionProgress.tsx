import React from "react";

const ConstructionProgress: React.FC = () => {
  const totalImages: number = 5;
  const imagesBuild: string[] = Array.from(
    { length: totalImages },
    (_, i) => `/assets/build/${i + 1}.png`
  );

  return (
    <div className="bg-white py-8 px-4 sm:py-16 sm:px-8 rounded-xl border h-auto sm:h-80 border-gray-200 shadow-sm">
      {/* Título */}
      <div>
        <p className="text-sm text-gray-500">Entrega prevista</p>
        <p className="text-2xl font-bold text-gray-800">Em Construção</p>
      </div>

      {/* Divisor */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Imagens */}
      <div className="flex flex-wrap gap-3 justify-start">
        {imagesBuild.map((src: string, index: number) => (
          <div
            key={index}
            className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 overflow-hidden rounded-xl"
          >
            <img
              src={src}
              alt={`Foto da obra ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConstructionProgress;
