import { useEffect, useState } from 'react';
import ServiceCardHome from './ServiceCardHome';

const ServicesHome = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/serviceshome')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center mb-4 mt-60'>
                <p className="text-5xl font-bold text-orange-600 my-10">Yummy Food</p>
                
                <p>Come quickly and buy our affordable price food </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCardHome
                        key={service._id}
                        service={service}
                    ></ServiceCardHome>)
                }
            </div>
        </div>
    );
};

export default ServicesHome;