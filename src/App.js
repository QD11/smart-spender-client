import Navbar from './components/Navbar'
import styled, { keyframes}  from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import React, { useState, useEffect} from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Defaultpage from './components/Defaultpage'
import Expenses from './components/expense/Expenses'
import BudgetMain from './components/budget/BudgetMain'
import DashboardMain from './components/dashboard/DashboardMain'
import SignUp from './components/SignUp'

function App() {
    const [showNav, setShowNav] = useState(true)
    const [user, setUser] = useState(false)
    const [categories, setCategories] = useState([])
    const [spendings, setSpendings] = useState([])
    
    useEffect(()=> {
        fetch("https://smart-spender-server.herokuapp.com/category")
        .then(resp => resp.json())
        .then((data) => setCategories(data))
    }, [user])

    return (
        <div>
            {user? 
                <>
                    <NavHeader>
                            < HamburgerMenu onClick={() => setShowNav(!showNav)}/>
                    </NavHeader>
                    <Navbar show={showNav} /> 
                </>
            : null}
            <Switch>
                <Route exact path="/dashboard">
                    <DivSplitter>
                        <MainContent slideRight={showNav}>
                            <DashboardMain user={user} spendings={spendings} />
                        </MainContent>
                    </DivSplitter>
                </Route> 

                <Route exact path="/expenses">
                    <DivSplitter>
                        <Navbar show={showNav} />
                        <MainContent slideRight={showNav}>
                            <Expenses spendings={spendings} setSpendings={setSpendings} categories = {categories} user={user}/>
                        </MainContent>
                    </DivSplitter>
                </Route> 

                <Route exact path="/budget">
                    <DivSplitter>
                        <Navbar show={showNav} />
                        <MainContent slideRight={showNav}>
                            <BudgetMain user={user}/>
                        </MainContent>
                    </DivSplitter>
                </Route> 

                <Route exact path="/signup">
                    <SignUp setUser={setUser} user={user}/>
                </Route>

                <Route exact path="/">
                    <Defaultpage setUser={setUser} user={user}/>
                </Route>
            </Switch>
        </div>
        );
    }

export default App;

//Styled Components
const NavHeader = styled.header`
    color: #eaecef;
    padding: 15px 30px;
    background: #16354d;
    display: flex;
    height: 40px;
    font-size: 40px;
`

const DivSplitter = styled.div`
    display: flex;
`

const MainContent = styled.div`
    position: relative;
    transition: all 1s;
    padding-left: 10px;
    left: ${props => props.slideRight ? '160px': '0px'};
`
const bounce = keyframes`
    0% {transform: scale(1);}
    50% {transform: scale(1.5);}
    100% {transform: scale(1);}
`

const HamburgerMenu = styled(GiHamburgerMenu)`
    cursor: pointer;
    animation-name = ${bounce};
    animation-duration: 2s;
    animation-iteration-count: infinite;
`
