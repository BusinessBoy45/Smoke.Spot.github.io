import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, Phone } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg')] bg-cover bg-center opacity-30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Smoke Spot Vape and Cigars
            </h1>
            <p className="text-xl mb-8">
              Reisterstown's premier destination for premium tobacco and vape products
            </p>
            <Link
              to="/products"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black text-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <Star className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">5-Star Rated</h3>
            <p>Trusted by our community with dozens of glowing reviews</p>
          </div>

          <div className="bg-black text-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Extended Hours</h3>
            <p>Open daily from 10 AM to 10 PM for your convenience</p>
          </div>

          <div className="bg-black text-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Easy to Find</h3>
            <p>Conveniently located on Main St in Reisterstown</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Visit Us Today</h2>
          <div className="max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-primary mr-3" />
                <p>750 Main St, Reisterstown, MD 21136</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary mr-3" />
                <p>(410) 702-7252</p>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-primary mr-3" />
                <p>10:00 AM - 10:00 PM Daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;