import React from 'react';
import { Link } from 'react-router-dom';

const SeeAll = () => {
    return (
        <div>
           <div className="card-actions justify-center my-10">
                    <Link to={`/allservices`}>
                        <button className="btn btn-primary">Show All Services</button>
                    </Link>
                </div> 
        </div>
    );
};

export default SeeAll;