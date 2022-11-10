import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRows from './ReviewsRow';

const Reviews = () => {

    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

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
            body: JSON.stringify({ message: `{message}` })
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
        <Helmet>
        <title>Yummy Food | Reviews</title>
      </Helmet>
        <div>
        <h2 className="text-5xl">You have {reviews.length} reviews</h2>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Name</th>
                        <th>Food price</th>
                        <th>Reviews</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(reviews => <ReviewRows
                            key={reviews._id}
                            reviews={reviews}
                            handleDelete={handleDelete}
                            handleStatusUpdate={handleStatusUpdate}
                        ></ReviewRows>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    </div>
    );
};

export default Reviews;