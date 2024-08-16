import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import auth from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Login = () => {
  const emailRef= useRef(null)
    const handleLogin=e=>{
        e.preventDefault()
       const email=e.target.email.value;
       const pass=e.target.pass.value;
       console.log(email,pass)
    

signInWithEmailAndPassword(auth,email,pass)
.then(result=>{
    console.log(result.user)

})  
.then(error=>{
    console.error(error)
})  
    }

    const handleReset=()=>{
const email= emailRef.current.value;
if(!email){
  console.log('eta ki dili vai')
  return
}
else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
  console.log('asol email de beta')
}
sendPasswordResetEmail(auth,email)
.then(()=>{
console.log('check your email')
})
.catch(error=>{
  const errorMessage=error.message;
})
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='pass' 
          
           placeholder="password" 
           className="input input-bordered" required />
          <label className="label">
            <a onClick={handleReset} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    <p>New Here? <Link to='/register'>Register</Link></p>
  </div>
</div>
    );
};

export default Login;