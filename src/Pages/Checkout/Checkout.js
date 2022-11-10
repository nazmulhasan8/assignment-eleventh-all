import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Reviews from '../Reviews/Reviews';


const Checkout = () => {
    const { _id, img, price, title, description, service_id } = useLoaderData();
    const { user } = useContext(AuthContext);
    
    console.log(user);

  

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
       

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            
        }

        

        fetch('https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Order Added Successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }
  
// here is 2

    const handlePlaceReview2 = event => {
        event.preventDefault();
        const form = event.target;

        const email = user?.email || 'unregistered';
       
        const message = form.message.value;

        const reviews = {
            service: _id,
            serviceName: title,
            price,
            customer: user?.displayName,
            image: user?.photoURL,
            email,
            
            message
        }

        
        fetch('https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // tokenn
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Review Added Successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div>
            <div className="card card-compact text-3xl w-100 bg-base-100 shadow-xl">
            <h2 className="card-title text-3xl justify-center">{title}</h2>
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                
                <p className="card-title text-3xl text-orange-600 font-semibold justify-center">Price: ${price}</p>
                <p className="text-2xl">{description}</p>
                <div className="card-actions justify-center">
                    
                      
                    
                </div>
            </div>
        </div>
        <div>
      
            <form className="my-20 border-neutral-600" onSubmit={handlePlaceOrder}>
           
                <h2 className="text-4xl">Your Order: {title}</h2>
                <h4 className="text-3xl">service_id: {service_id}</h4>
                <h4 className="text-3xl">Price: ${price}</h4>
                <div className="text-left my-10">
                    <img className=' rounded-full' 
                    style={{ height: '50px' }}
                    src={user?.photoURL} alt="" />
                     <p> {user?.displayName} </p>
                </div>
                
               
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>

                <input className='btn' type="submit" value="Add Your Order" />
            </form>

 {/* here is reviews part  */}

            <form className="my-20" onSubmit={handlePlaceReview2}>
                <h2 className="text-4xl">Your Review: {title}</h2>
                <h4 className="text-3xl">service_id: {service_id}</h4>
                <h4 className="text-3xl">Price: ${price}</h4>
                <div className="text-left my-10">
                
                    <img className=' rounded-full' 
                    style={{ height: '50px' }}
                    src={user?.photoURL} alt="" />
                     <p> {user?.displayName} </p>
                </div>
                
               
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                   
                 
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="Add Your Review" />
            </form>

        </div>
        <Reviews></Reviews>
        </div>
    );
};

export default Checkout;