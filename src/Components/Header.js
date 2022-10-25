import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../Contexts/UserContext';
import favicon from '../asset/favicon.png'

const Header = () => {
    const {user,logOut}= useContext(AuthContext);
    console.log(user);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))

    }
    return (
        <div>
            
            <div className="navbar bg-secondary text-primary-content">
                
                <Link className="btn btn-ghost normal-case text-xl" to='home'> 
                    <img className='h-10 w-auto' src={favicon} alt="" />
                    Online University
                </Link>
                <Link className="btn btn-ghost normal-case text-xl" to='home'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='register'>Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='courses'>Courses</Link>
                {user?.email&&<span>Welcome: {user.email}</span>}
                
                {user?.email? <button onClick={handleLogOut} className="btn btn-secondary">Log Out</button>
                :<Link className="btn btn-ghost normal-case text-xl" to='login'>Login</Link>}
            </div>
        </div>
    );
};

export default Header;