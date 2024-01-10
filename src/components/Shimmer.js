import React from 'react'

const Shimmer = () => {
  return (
      <div className="dark:bg-gray-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 40 }).map((_, index) => (
              <div key={index} className="shimmer-card dark:bg-gray-800 p-4 rounded-md shadow-md">
                  <div 
                      className="shimmer-thumbnail w-full h-40 mb-4 dark:bg-gray-700" 
                      style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                          animation: 'shimmerAnimation 1.5s infinite'
                      }}
                  ></div>
                  <div className="space-y-2">
                      <div 
                          className="shimmer-title w-3/4 h-4 dark:bg-gray-700" 
                          style={{
                              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                              animation: 'shimmerAnimation 1.5s infinite'
                          }}
                      ></div>
                      <div 
                          className="shimmer-description w-full h-3 dark:bg-gray-700" 
                          style={{
                              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                              animation: 'shimmerAnimation 1.5s infinite'
                          }}
                      ></div>
                  </div>
              </div>
          ))}
          {/* Shimmer animation keyframes */}
          <style jsx>{`
              @keyframes shimmerAnimation {
                  0% {
                      transform: translateX(-100%);
                  }
                  100% {
                      transform: translateX(100%);
                  }
              }
          `}</style>
      </div>
  );
};

export default Shimmer;
