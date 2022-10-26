import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {AuthContext} from '../Contexts/UserContext';
import favicon from '../asset/favicon.png';
import './Header.css';


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
            
            <div className="navbar bg-secondary text-primary-content px-2 sm:px-4 py-2.5">
                
                <NavLink className="btn btn-ghost normal-case text-xl" to='home'> 
                    <img className='h-10 w-auto' src={favicon} alt="" />
                    Online University
                </NavLink>
                <NavLink className="btn btn-ghost normal-case text-xl {({isActive})=>isActive? 'active': undefined}" to='home'>Home</NavLink>
                <NavLink className="btn btn-ghost normal-case text-xl" to='register'>Register</NavLink>
                <NavLink className="btn btn-ghost normal-case text-xl" to='courses'>Courses</NavLink>
                <NavLink className="btn btn-ghost normal-case text-xl" to='faq'>FAQ</NavLink>
                <NavLink className="btn btn-ghost normal-case text-xl" to='blog'>Blog</NavLink>
                {user?.uid&&<span>Welcome: {user.displayName}</span>}
                
                
                {user?.uid? <button onClick={handleLogOut} className="btn btn-secondary">Log Out</button>
                :<NavLink className="btn btn-ghost normal-case text-xl" to='login'>Login</NavLink>}
            </div>
        </div>
    );
};

export default Header;