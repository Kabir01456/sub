import React from 'react';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect
              <span className="block text-yellow-400">Smartphone</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Discover the latest smartphones from top brands at unbeatable prices. 
              From flagship devices to budget-friendly options, we have something for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <span>Shop Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Deals
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-yellow-400" />
                <div>
                  <p className="font-semibold">Warranty</p>
                  <p className="text-sm text-blue-100">1 Year Official</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-8 w-8 text-yellow-400" />
                <div>
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-sm text-blue-100">On orders above ₹999</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="h-8 w-8 text-yellow-400" />
                <div>
                  <p className="font-semibold">4.8/5 Rating</p>
                  <p className="text-sm text-blue-100">1000+ Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Phone */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Featured Phone"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                New Arrival
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;