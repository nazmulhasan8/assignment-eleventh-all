import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
           <PhotoProvider>
           <figure><PhotoView src={img}><img src={img} alt="missing" /></PhotoView></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div>
                {
                    description.length > 100 ?
                        <>{description.slice(0, 100) + '...'}  
                       
                        </>
                        :
                        <>{description}</> 
                }
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Show Details</button>
                    </Link>
                </div>
            </div>
            </PhotoProvider>
        </div>
    );
};

export default ServiceCard;