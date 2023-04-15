import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = (props) => {

    const host = "http://localhost:5000"
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""});
    

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name,email,password} = credentials;
        const response = await fetch(`${host}/api/auth/createuser`,{

            method: 'POST',
            headers:{
                'Content-Type':'application/json',

            },
            body: JSON.stringify({name,email,password})
            
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            //save the auth token and redirect
            localStorage.setItem("token", json.authToken)
            navigate("/");
            props.showAlert("successfully signedup", "success");
        }
        else{
            // alert("an account with the email already exists");
            props.showAlert("invalid credentials", "danger");
        }
            
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input name="name" type="text" onChange={onChange} className="form-control" id="name" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input name="email" type="email" onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input name="password" type="password" onChange={onChange} className="form-control" id="password"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">confirm password</label>
                    <input name="cpassword" type="password" onChange={onChange}  className="form-control" id="cpassword"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup