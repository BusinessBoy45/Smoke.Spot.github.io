import React from 'react';

const Gallery = () => {
  const images = [
    'https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg',
    'https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg',
    'https://images.pexels.com/photos/2616679/pexels-photo-2616679.jpeg',
    'https://images.pexels.com/photos/2616764/pexels-photo-2616764.jpeg',
    'https://images.pexels.com/photos/2616677/pexels-photo-2616677.jpeg',
    'https://images.pexels.com/photos/2616678/pexels-photo-2616678.jpeg',
  ];

  return (
    <div className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
        <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Take a look at our store and some of our featured products
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Visit Our Store</h2>
          <p className="text-lg mb-8">
            Come see our full selection in person at our Reisterstown location
          </p>
          <a
            href="https://maps.google.com/?q=750+Main+St,+Reisterstown,+MD+21136"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;