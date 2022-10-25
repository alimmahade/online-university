import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { FaGoogle, FaGithub } from 'react-icons/fa';


const Register = () => {
    const {createUser,signInWithGoogle,signInWithGithub}= useContext(AuthContext);
    console.log(createUser)

    const handleRegister=(event)=>{
        event.preventDefault();
        console.log('register btn clicked');
        const form=event.target;
        const email=form.email.value;
        const name=form.name.value;
        const password=form.password.value;
        createUser(email,password)
        .then(result=>{            
            const user=result.user;
            console.log('Registered user',user,"User Name",name)
        }) 
        .catch(error=>{console.log(error)})
        
    }
    const handleGoogleSignIn=()=>{
      signInWithGoogle()
      .then(result=>{
        const user= result.user;
        console.log(user)
      })
      .catch(error=>console.error(error))
      
    }
    const handleGithubSignIn=()=>{
      signInWithGithub()
      .then(result=>{
        const user= result.user;
        console.log(user)
      })
      .catch(error=>console.error(error))
      
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h2 className="text-5xl font-bold">Please Register now!</h2>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
        </div>
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
          <button className="btn btn-secondary">Register</button>
        </div>
      
      </form>
      <p>Sign in With</p>
      <span className='m-2'><button onClick={handleGoogleSignIn} className="btn btn-outline m-1"> <FaGoogle/> </button>
      <button onClick={handleGithubSignIn} className="btn btn-outline m-1"> <FaGithub/> </button>
      </span> 
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;