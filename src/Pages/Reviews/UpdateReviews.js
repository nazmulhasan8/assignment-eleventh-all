import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const UpdateReviews = () => {

    const { _id, price, title, service_id } = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(title);
    console.log(user);

    const handlePlaceReview2 = event => {
        event.preventDefault();
        const form = event.target;

       
       
        const message = form.message.value;

        const reviews = {
            message
        }

        fetch('https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/reviews', {
            method: 'Patch',
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
        <Helmet>
        <title>Yummy Food | UpdateReview</title>
      </Helmet>
        <div>
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
        </div>
    );
};

export default UpdateReviews;