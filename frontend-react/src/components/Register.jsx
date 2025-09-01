import React, {useState} from "react";

const Register = () => {
   const[username, setUsername] = useState("");
   const[email, setEmail] = useState("");
   const[password, setPassword] = useState("");

   const HandleRegistration = (e) => {
      e.preventDefault();
     // console.log("Test");

      const userData = {
         username,
         email,
         password
      };
      console.log(userData);
   }
   return (
    <>
      <h1>Register Page</h1>
         <div className="container">
           <div className="row justify-content-center">
             <div className="col-md-6 bg-light-dark p-5 rounded">
               <h3 className="text-light text-center">Create an account</h3>
               <form onSubmit={HandleRegistration}>
                 <div className="mb-3">
                   <label htmlFor="username" className="form-label text-light">Username</label>
                   <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                 </div>
                 <div className="mb-3">
                   <label htmlFor="email" className="form-label text-light">Email</label>
                   <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                 </div>
                 <div className="mb-3">
                   <label htmlFor="password" className="form-label text-light">Password</label>
                   <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                 </div>
                 <button type="submit" className="btn btn-primary">Register</button>
               </form>
             </div>
           </div>
         </div>
    </>
 )
}

export default Register