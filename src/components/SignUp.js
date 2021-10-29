import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

//I removed setUser from argument in line 6 and then in second .then body of onSubmitHandler
function SignUp() {
    const history = useHistory();
    const [formSignup, setFormSignup] = useState({name: '',
        email:'',
        password:''
        })
    const[errorMessage, setErrorMessage] = useState('');

    const onChangeHandler = (event) => {
        setFormSignup({
            ...setFormSignup,
            [event.target.name]: event.target.value
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        fetch('http://localhost:9292/signup', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formSignup)
        })
        .then(resp => resp.json())
        .then(data => {
            if (data){
               history.push("/dashboard")
            }
            else
                alert("Email address exists")
        })
    }

    const handleBack = () => {
        history.push("/")
    }

return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <div> 
                <label>Full Name:</label>
                <input required="required" name="name" onChange={onChangeHandler}></input>
            </div>
            <div>
                <label>Email Address:</label>
                <input required="required" name="email" onChange={onChangeHandler}></input>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" required="required" onChange={onChangeHandler}></input>
            </div>
            <input type="submit"></input>
        </form>
       <button onClick={handleBack}>Back</button>
    </div>
)}

export default SignUp
