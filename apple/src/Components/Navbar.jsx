import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authcontext';
import { useContext } from 'react';

const Navbar = () => {
    const router = useNavigate()
    const { state, Logout } = useContext(AuthContext)

    return (
        <div id='navbar-screen'>
            <div>
                <i class="fa-brands fa-apple"></i>
                <p>Store</p>
                <p>Mac</p>
                <p>iPad</p>
                <p>iPhone</p>
                <p>Watch</p>
                <p>AirPods</p>
                <p>TV & Home</p>
                <p>Entertainment</p>
                <p>Accesories</p>
                <p>Support</p>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-bag-shopping"></i>
                <div id='userapple'>
                    {state?.user?.id ?
                        <>
                            <button onClick={Logout}>Logout</button>
                            <h4>{state.user.name}</h4>
                            
                        </>
                        :
                        <>
                        <button className='signinfont' onClick={() => router("/signin")}>Login</button>
                        <button className='signinfont' onClick={() => router("/signup")}>Signup</button>
                        
                        </> }

                </div>
            </div>


        </div>
    )
}
export default Navbar;