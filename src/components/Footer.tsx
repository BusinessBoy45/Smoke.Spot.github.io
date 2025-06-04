import React from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:4107027252" className="flex items-center hover:text-primary">
                <Phone size={18} className="mr-2" />
                (410) 702-7252
              </a>
              <a
                href="https://maps.google.com/?q=750+Main+St,+Reisterstown,+MD+21136"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary"
              >
                <MapPin size={18} className="mr-2" />
                750 Main St, Reisterstown, MD 21136
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <span>10:00 AM - 10:00 PM Daily</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <a
              href="https://www.instagram.com/smokespot.reisterstown_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary"
            >
              <Instagram size={18} className="mr-2" />
              @smokespot.reisterstown_
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">
              Smoke Spot Vape and Cigars is Reisterstown's premier destination for all your smoking and vaping needs.
              Visit us for the best selection and service in town!
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Smoke Spot Vape and Cigars. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;