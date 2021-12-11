import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components'

//I removed setUser from argument in line 6 and then in second .then body of onSubmitHandler
function SignUp({user}) {
    const history = useHistory();
    const [formSignup, setFormSignup] = useState({
        full_name: '',
        email:'',
        password:''
        })
    const[emailCheck, setEmailCheck] = useState(0);

    useEffect(() => {
        setEmailCheck(0)
    }, [user])

    const onChangeHandler = (event) => {
        setFormSignup(formSignup => ({
            ...formSignup,
            [event.target.name] : event.target.value
        }))
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
                setEmailCheck(1)
                setTimeout(() => {
                    history.push("/")
                }, 1000)
            }
            else{
                setEmailCheck(2)
            }
        })
    }
return (
    <WholeSec>
        <BigDiv>
            <HTitle>Create your Account</HTitle>
            <form onSubmit={onSubmitHandler}>
                <InputDiv> 
                    <InputYe required="required" name="full_name" onChange={onChangeHandler} placeholder="Full Name"></InputYe>
                    <InputYe required="required" name="email" onChange={onChangeHandler} placeholder={"Email Address"}></InputYe>
                    <InputYe type="password" name="password" required="required" onChange={onChangeHandler} placeholder="Password"></InputYe>
                </InputDiv>
                <ErrorMessage emailCheck={emailCheck}>{emailCheck === 1? "You have successfully signed up" : emailCheck === 2? "Email Address exists" : null}</ErrorMessage>
                <ButDiv>
                    <InputSubmit type="submit"></InputSubmit>
                </ButDiv>
            </form>
        </BigDiv>
    </WholeSec>
)}

const ErrorMessage = styled.span`
    color : ${props => props.emailCheck === 1 ? 'green' : 'red'}
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

const HTitle = styled.h3`
    color: white
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

const InputYe = styled.input`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
    border: ${props => props.emailCheck ? '3px solid red' : null}
`

const InputSubmit = styled.input`
    font-size: 20px;
    font-weight: 700;
`

export default SignUp
