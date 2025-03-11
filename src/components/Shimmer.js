import React from 'react';

const Shimmer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array(6).fill('').map((_, index) => (
          <div 
            key={index}
            className="w-full h-80 bg-gray-200 rounded-xl animate-pulse"
          >
            {/* Image placeholder */}
            <div className="w-full h-48 bg-gray-300 rounded-t-xl"></div>
            
            {/* Content placeholders */}
            <div className="p-4 space-y-4">
              {/* Title */}
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
              
              {/* Description/Cuisine */}
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              
              {/* Rating/Cost */}
              <div className="flex space-x-2">
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;