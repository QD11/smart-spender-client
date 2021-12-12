import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom";
import styled from 'styled-components'

const Defaultpage = ({setUser, user}) => {
    const history = useHistory();
    const [formLogin, setFormLogin] = useState({
            email: '',
            password: ''
        })
    const [wrongPassword, setWrongPassword] = useState(false)

    useEffect(() => {
        setWrongPassword(false)
    }, [user])

    const onChangeHandler = (event) => {
        setFormLogin({
            ...formLogin,
            [event.target.name] : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        // fetch('http://localhost:9292/login', {
        fetch('/login', {    
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formLogin)
        })
        .then(resp => resp.json())
        .then(data => {
            if (data){
                setUser(data)
                setWrongPassword(false)
                history.push("/dashboard")
            }
            else
                setWrongPassword(true)
            
        })
    }

    function handleSignUp(){
        history.push("/signup")
    }

    return (
        <WholeSec>
            <BigDiv>
                <Hname> Smart Spender </Hname>
                <HTitle>Sign In</HTitle>
            <form onSubmit={onSubmitHandler}>
                <InputDiv>
                    <InputYe required="required" placeholder="Email" name="email" onChange={onChangeHandler}></InputYe>
                    <InputPa passwordCheck={wrongPassword} type="password" placeholder="Password" name="password" required="required" onChange={onChangeHandler}></InputPa>
                </InputDiv>
                <ButDiv>
                    <InputSubmit type="submit"></InputSubmit>
                    <UpButton style={{marginLeft : "10px"}} onClick={handleSignUp}>
                    Sign Up
                    </UpButton>
                </ButDiv>
            </form>
            </BigDiv>
        </WholeSec>
    )
} 

const Hname = styled.h1.attrs(props => ({
    className: 'hello',
    name: "a cool H1"
}))`
    color: white;
    font-size: 50px;
`

const InputSubmit = styled.input`
    font-size: 20px;
    font-weight: 700;
`

const UpButton = styled.button`
    font-size: 20px;
    font-weight: 700;
`

const HTitle = styled.h3`
    color: white
`

const InputYe = styled.input`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
`

const InputPa = styled.input`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    border-color: ${props => props.passwordCheck ? 'red' : null}
`

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1em;
`

const ButDiv = styled.div`
    padding: 5px;
    margin-right: 5px;
`


const WholeSec = styled.section`
    display:flex;
    justify-content: center;
    align-items: center;
    height:100vh;  
`

const BigDiv = styled.div`
    // display:flex;
    background-color: white;
    box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    border-radius: 10px;
    padding: 50px;
    text-align: center;
    background-color: #1b4b6f;
    height: 375px;
`

export default Defaultpage
