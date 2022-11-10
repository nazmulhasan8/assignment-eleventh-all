import React from 'react';
import './NewSection.css';


const NewSection = () => {
    return (
        <div className="today my-60">
       <p className="text-5xl font-bold text-orange-600 my-10">Our Food Price</p>
        <p className=" my-10">
          Buy your affordable and healthy food now
        </p>
        <div className="flexible-container">
          <div id="donate-bg-color1" className="food1">
            <h2>$10</h2>
          </div>
          <div id="donate-bg-color2" className="food1">
            <h2>$20</h2>
          </div>
          <div id="donate-bg-color1" className="food1">
            <h2>$30</h2>
          </div>
          <div id="donate-bg-color1" className="food1">
            <h2>$40</h2>
          </div>
          <div id="donate-bg-color1" className="food1">
            <h2>$100</h2>
          </div>
        </div>
        <p className="text-5xl font-bold text-orange-600 my-60">All Our Food And Services</p>
      </div>
    );
};

export default NewSection;