import React from "react";

const Services = () => {
  return (
    <div id="services" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full my-10 lg:my-24">
      <h2 className="text-3xl text-gray-900 sm:text-4xl mb-8 text-center justify-center mx-auto">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-white">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Service 1</h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis metus scelerisque, faucibus velit vitae, posuere purus.
            </p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-white">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Service 2</h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis metus scelerisque, faucibus velit vitae, posuere purus.
            </p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-white">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Service 3</h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis metus scelerisque, faucibus velit vitae, posuere purus.
            </p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-white">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Service 4</h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis metus scelerisque, faucibus velit vitae, posuere purus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
