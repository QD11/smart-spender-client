import React from 'react'
import {useState} from 'react'
import {useHistory} from "react-router-dom";

const Defaultpage = ({setUser}) => {
    const history = useHistory();
    const [formLogin, setFormLogin] = useState({
            email: '',
            password: ''
        })

    const onChangeHandler = (event) => {
        setFormLogin({
            ...formLogin,
            [event.target.name] : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        fetch('http://localhost:9292/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formLogin)
        })
        .then(resp => resp.json())
        .then(data => {
            if (data){
                setUser(data)
                history.push("/dashboard")
            }
            else
                alert("Wrong Password")
            
        })
    }

    function handleSignUp(){
        history.push("/signup")
    }



    return (
        <div>
            <form onSubmit={onSubmitHandler}>
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
            <button onClick={handleSignUp}>
                Sign Up Here 
            </button>
        </div>
    )
}

export default Defaultpage
