import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
        <Helmet>
        <title>Yummy Food | AllServices</title>
      </Helmet>
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>Come quickly and buy our affordable price food</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default Services;