import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceAdd = () => {
    const { user } = useContext(AuthContext);
    
    console.log(user);
    const handleServiceAdd = event => {
        event.preventDefault();
        const form = event.target;
        const id = form.id.value;
        const serviceid = form.serviceid.value;
        const title = form.title.value;
        const img = form.photoURL.value;
        const price = form.price.value;
        const message = form.description.value;
       

        const serviceadd = {
            
            _id: id,
            service_id: serviceid,
            title,
            img,
            price,
            description: message

            
           

        }



        fetch('https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/serviceadd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // tokkkkken
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(serviceadd)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Service Added Successfully');
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

    }

    return (
        <div>
        <Helmet>
        <title>Yummy Food | ServiceAdd</title>
      </Helmet>
        <div>
            <form onSubmit={handleServiceAdd}>
           <div><h2 style={{ fontSize: '30px' }} className="my-20 mb-20 text-center">Add New Food Service Below</h2></div>
        
           <div className="my-10 text-left">
               <img className=' rounded-full text-left' 
               style={{ height: '50px' }}
               src={user?.photoURL} alt="" />
                <p> {user?.displayName} </p>
           </div>
           
          
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
           <input name="id" type="text" placeholder="id" className="input input-ghost w-full  input-bordered" required />
           <input name="serviceid" type="text" placeholder="service id" className="input input-ghost w-full  input-bordered" required />
           <input name="title" type="text" placeholder="title" className="input input-ghost w-full  input-bordered" required/>
           <input name="photoURL" type="text" placeholder="photo URL" className="input input-ghost w-full  input-bordered" required/>
           <input name="price" type="text" placeholder="price $" className="input input-ghost w-full  input-bordered" required />

           
           </div>
           <textarea name="description"  className="textarea textarea-bordered h-24 w-full" placeholder="description" required></textarea>
           <input className='btn' type="submit" value="Add New Food Service" />
       </form>
        </div>
        </div>
    );
};

export default ServiceAdd;