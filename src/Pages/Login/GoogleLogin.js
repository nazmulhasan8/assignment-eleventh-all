import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const GoogleLogin = () => {

    const { setUser, providerLogin, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';



    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                event.preventDefault();

                const currentUser = {
                    email: user.email
                }
                
                console.log(currentUser);

                                // get jwt token from server
                                fetch('https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/jwt', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(currentUser)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log(data);
                                     
                                       
                
                                        if(user.emailVerified){
                                            setUser(user);
                                            localStorage.setItem('genius-token', data.token);
                                        
                                            navigate(from, { replace: true });
                                            console.log(user?.displayName);
                                        }
                                        else{
                                            alert('Your email is not verified. Please verify your email address.')
                                        }
                                    });
                                
                            })
                            .catch(error => console.error(error))
                            .finally(() => {
                               setLoading(false);
                           })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-primary my-10 ml-9 px-20">Login with Google</button>
        </div>
    );
};

export default GoogleLogin;