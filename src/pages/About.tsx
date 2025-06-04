import React from 'react';
import { Star, Users, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Smoke Spot</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted destination for premium tobacco and vape products in Reisterstown
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              Welcome to Smoke Spot Vape and Cigars — Reisterstown's go-to destination for premium tobacco and vape products. With a perfect 5-star rating and dozens of glowing reviews, we're proud to serve our community with unbeatable customer service, top-quality products, and a welcoming atmosphere.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're looking for the latest disposable vapes, quality cigars, hookah accessories, or CBD essentials, we've got you covered. Our shelves are fully stocked with trusted brands and a wide selection to suit every preference. Come see why locals trust Smoke Spot as their one-stop smoke shop — where quality meets service, every time.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-primary rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-300">Only the finest products from trusted brands</p>
            </div>

            <div className="text-center">
              <div className="bg-primary rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Staff</h3>
              <p className="text-gray-300">Knowledgeable team ready to assist you</p>
            </div>

            <div className="text-center">
              <div className="bg-primary rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-300">5-star rated service and experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;