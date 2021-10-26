import React from 'react'
import {useState} from 'react'

const Defaultpage = () => {
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
        console.log(formLogin)
        fetch('http://localhost:9292/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formLogin)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
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
        </div>
    )
}

export default Defaultpage