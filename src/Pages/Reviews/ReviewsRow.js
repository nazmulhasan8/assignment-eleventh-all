import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ReviewsRow = ({reviews, handleDelete, handleStatusUpdate }) => {

    const { _id, serviceName, phone, customer, price, service, status, message, image } = reviews;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])


    return (
        <tr>
        <th>
            <label>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                <br/>
                <Link to={`/updatereview/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link>
            </label>
        </th>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {
                         
                            
                            
                            <img src={image} alt="" />
                             
                          }
                    </div>
                </div>
                <div>
                    <div className="font-bold">{customer}</div>
                    <div className="text-sm opacity-50">{phone}</div>
                </div>
            </div>
        </td>
        <td>
            {serviceName}
            <br />
            <span className="badge badge-ghost badge-sm">${price}</span>
 
            
        </td>
        <td>{message}</td>
        <th>
           
        </th>
    </tr>
    );
};

export default ReviewsRow;