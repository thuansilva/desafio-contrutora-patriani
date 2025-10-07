import React from "react";
import Header from "./components/header";
import StatCard from "./components/stateCard";
import {
  CalendarIcon,
  ConnectionsIcon,
  DocumentsIcon,
  EventsIcon,
  MapPinIcon,
  Users01Icon,
} from "./styles/icons";
import { SalesInfo } from "./components/salesinfo";

const ImageGallery: React.FC = () => {
  const totalImages = 6;
  const images = Array.from(
    { length: totalImages },
    (_, i) => `/assets/galery/${i + 1}.png`
  );

  return (
    <div className="rounded-xl">
      <div className="grid grid-cols-3 gap-4">
        {images.map((src, index) => (
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

const ConstructionProgress = () => {
  const totalImages = 5;
  const imagesBuild = Array.from(
    { length: totalImages },
    (_, i) => `/assets/build/${i + 1}.png`
  );

  return (
    <div className="bg-white py-16 px-8 rounded-xl border border-gray-200 shadow-sm">
      <div>
        <p className="text-sm text-gray-500">Entrega prevista</p>
        <p className="text-2xl font-bold text-gray-800">Em Construção</p>
      </div>
      <div className="border-t border-gray-200 my-4"></div>
      <div className="flex items-center space-x-3">
        {imagesBuild.map((src, index) => (
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

const cardsListStats = [
  { icon: Users01Icon, title: "Compradores", value: "156" },
  { icon: EventsIcon, title: "Eventos", value: "3" },
  { icon: DocumentsIcon, title: "Documentos", value: "4" },
  { icon: ConnectionsIcon, title: "Conexões", value: "10" },
];

export default function App() {
  return (
    <div
      className="min-h-screen bg-gray-50 font-sans"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')`}
      </style>

      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          <Header />
        </div>
      </div>

      <div className="w-full">
        <img
          src="./header.png"
          alt="Imagem do empreendimento Splendor Jardim"
          className="w-full h-48 sm:h-64 md:h-80 object-cover"
        />
      </div>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-8">
        <div className=" mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold leading-8 text-gray-800">
                Splendor Jardim
              </h2>
              <div className="flex items-center text-gray-500 mt-1">
                <MapPinIcon className="w-4 h-4 mr-2" />
                <span>
                  Rua Doutor Rubens Arruda, 33, Tamanduateí 3 - Santo André
                </span>
              </div>
            </div>
            <div className="flex items-center text-gray-600 font-medium mt-3 sm:mt-0 bg-white  px-3 py-1.5 rounded-md">
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span>01/10/2028</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {cardsListStats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>

        <div className="mb-8">
          <SalesInfo />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Imagens
            </h2>
            <ImageGallery />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Andamento da Obra
            </h2>
            <ConstructionProgress />
          </div>
        </div>
      </main>
    </div>
  );
}
