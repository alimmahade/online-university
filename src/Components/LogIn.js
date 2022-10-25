import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const LogIn = () => {
    const {userLogIn}=useContext(AuthContext);
    console.log(userLogIn);

    const handleLogin=(event)=>{

        event.preventDefault()
        console.log('login btn clicked');
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        userLogIn(email,password)
            .then(result=>{
                const user=result.user;
            })
            .catch(error=>{console.log(error)})
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h2 className="text-5xl font-bold">Please Login now!</h2>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            
          </label>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-secondary">Log in</button>
          <button className="btn btn-link"><Link to='/register'>Please Register</Link></button>
          
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;