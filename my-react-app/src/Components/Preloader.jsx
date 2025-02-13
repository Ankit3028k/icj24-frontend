// Preloader.js
import React from 'react';


const Preloader = () => {
  return (
    <div className="preloader">
          <div className="preloader-logo">
            <a className="brand" href="#">
              <img
                className="brand-logo-dark"
                src="https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/icj24/wqhqwlwn6lezj5imqbvf"
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
