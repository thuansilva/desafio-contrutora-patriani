"use client";

import React, { useState } from "react";
import { Modal } from "antd";

const ImageGallery: React.FC = () => {
  const totalImages = 6;
  const images = Array.from(
    { length: totalImages },
    (_, i) => `/assets/galery/${i + 1}.png`
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="rounded-xl">
      <div className="grid grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagem do empreendimento ${index + 1}`}
            className="w-full h-full object-cover rounded-xl cursor-pointer"
            onClick={() => openModal(src)}
          />
        ))}
      </div>

      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null} // sem botões padrão
        centered
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Imagem selecionada"
            className="w-full h-auto rounded"
          />
        )}
      </Modal>
    </div>
  );
};

export default ImageGallery;
