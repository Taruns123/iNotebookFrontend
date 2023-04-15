import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    const host = "http://localhost:5000"
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({email:"",password:""});
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        const response = await fetch(`${host}/api/auth/login`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',

            },
            body: JSON.stringify({"email": credentials.email,"password":credentials.password})
            
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            //save the auth token and redirect
            localStorage.setItem("token", json.authToken)
            props.showAlert("successfully signedup", "success");
            navigate("/");

        }
        else{
          props.showAlert("invalid credentials", "danger");

            // alert("invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
  return (
    <div><form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" onChange={onChange} name="email" value={credentials.email} className="form-control" id="email" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input onChange={onChange} name="password" value={credentials.password} type="password" className="form-control" id="password" />
    </div>
   
    <button type="submit" className="btn btn-primary" >Submit</button>
  </form></div>
  )
}

export default Login