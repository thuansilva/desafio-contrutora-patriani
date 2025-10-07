import React from "react";

const ImageGallery: React.FC = () => {
  const totalImages: number = 6;
  const images: string[] = Array.from(
    { length: totalImages },
    (_, i) => `/assets/galery/${i + 1}.png`
  );

  return (
    <div className="rounded-xl">
      <div className="grid grid-cols-3 gap-4">
        {images.map((src: string, index: number) => (
          <img
            key={index}
            src={src}
            alt={`Imagem do empreendimento ${index + 1}`}
            className="w-full h-full object-cover rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
