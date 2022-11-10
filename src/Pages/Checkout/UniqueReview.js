import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UniqueReviewRow from './UniqueReviewRow';


const UniqueReview = () => {

    const [services, setServices] = useState([]);
    const {_id}=services;
    
    useEffect( () =>{
        fetch('https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/serviceshome')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);


    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    
    const [value1, setValue1] = useState({})

    useEffect(() => {
        fetch(`https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/services/${_id}`)
            .then(res => res.json())
            .then(data => setValue1(data));
    }, [_id])
   

    useEffect(() => {
        fetch(`https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])

console.log(reviews);





    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if (proceed) {
            fetch(`https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(rev => rev._id !== id);
                    const approving = reviews.find(rev => rev._id === id);
                    approving.status = 'Approved'

                    const newReviews = [approving, ...remaining];
                    setReviews(newReviews);
                }
            })
    }

    return (
        <div>
      
        <h2 className="text-5xl">You have {value1.length} reviews</h2>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Reviews</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(reviews => <UniqueReviewRow
                            key={reviews._id}
                            reviews={reviews}
                            value1={value1}
                            handleDelete={handleDelete}
                           
                            handleStatusUpdate={handleStatusUpdate}
                            
                        ></UniqueReviewRow>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default UniqueReview;