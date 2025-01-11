// Preloader.js
import React from 'react';


const Preloader = () => {
  return (
    <div className="preloader">
          <div className="preloader-logo">
            <a className="brand" href="#">
              <img
                className="brand-logo-dark"
                src="https://icj24.com/wp-content/uploads/2024/08/ICJ24-Logo-.png"
                alt=""
                width="177"
                height="59"
              />
            </a>
          </div>
          <div className="preloader-body">
            <div className="cssload-container">
              <div className="cssload-speeding-wheel"></div>
            </div>
          </div>
        </div>
  );  
};

export default Preloader;
