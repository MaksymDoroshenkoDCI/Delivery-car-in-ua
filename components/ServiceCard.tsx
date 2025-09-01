'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  service: { title: string; description: string; buttonText: string };
  index: number;
};

export default function ServiceCard({ service, index }: Props) {
  const [imgSrc, setImgSrc] = useState(`/images/services/service-${index + 1}.jpg`);

  const handleClick = () => {
    alert(`Замовити послугу: ${service.title}`);
  };

  const handleImageError = () => {
    setImgSrc('/images/services/default.jpg');
  };

  return (
    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-card flex flex-col items-center text-center">
      <Image
        src={imgSrc}
        alt={service.title}
        width={400}
        height={200}
        className="rounded-md mb-4 object-cover w-full h-auto"
        onError={handleImageError}
      />
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-muted-foreground mb-4">{service.description}</p>
      <button 
        className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={handleClick}
      > 
      {("buttonText" in service) ? service.buttonText : "Order Now"}
      </button>
    </div>
  );
}
