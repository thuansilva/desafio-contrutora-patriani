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
      <div className="grid grid-cols-3 gap-3">
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
        closable={false}
        width="auto"
        styles={{
          content: {
            background: "transparent",
            boxShadow: "none",
            padding: 0,
          },
          mask: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        }}
      >
        {selectedImage && (
          <div className="relative">
            <img
              src={selectedImage}
              alt="Imagem selecionada"
              width={500}
              height={300}
            />
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 sm:top-2 sm:right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-50 text-white transition-opacity hover:opacity-80"
              aria-label="Fechar modal"
            >
              <span className="relative bottom-px text-2xl leading-none">
                &times;
              </span>
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageGallery;
