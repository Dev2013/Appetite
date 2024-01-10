import React from 'react'
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Error = () => {
  const e = useRouteError();
  
  return (
      <div className="dark-error-page flex items-center justify-center h-screen bg-gray-900 text-white">
          <div className="error-content text-center">
              <h1 className="text-4xl font-semibold">{e.status}</h1>
              <p className="text-lg mt-4">Oops 😲 better luck next time</p>
              <Link to="/">
                  <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded">
                      Back to Home Page
                  </button>
              </Link>
          </div>
      </div>
  );
};

export default Error;
