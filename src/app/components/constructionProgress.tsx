"use client";

import React, { useState } from "react";
import { Modal } from "antd";

const ConstructionProgress: React.FC = () => {
  const totalImages = 5;
  const imagesBuild = Array.from(
    { length: totalImages },
    (_, i) => `/assets/build/${i + 1}.png`
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
    <div className="bg-white py-8 px-4 sm:py-16 sm:px-8 rounded-xl border h-auto sm:h-80 border-gray-200 shadow-sm">
      <div>
        <p className="text-sm-semibold text-gray-dark">Entrega prevista</p>
        <p className="display-md-semibold text-gray-dark">Em Construção</p>
      </div>

      <div className="border-t border-gray-200 my-4"></div>

      <div className="flex flex-wrap gap-3 justify-start">
        {imagesBuild.map((src, index) => (
          <div
            key={index}
            className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 overflow-hidden rounded-xl cursor-pointer"
            onClick={() => openModal(src)}
          >
            <img
              src={src}
              alt={`Foto da obra ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
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
              alt="Imagem da obra selecionada"
              // className="block w-auto max-w-[900vw] h-auto max-h-[500vh] object-contain"
              width={500}
              height={300}
            />
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 sm:top-2 sm:right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-50 text-white transition-opacity hover:opacity-80"
              aria-label="Fechar modal"
            >
              <span className="text-2xl leading-none">&times;</span>
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ConstructionProgress;
