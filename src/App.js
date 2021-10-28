import Navbar from './components/Navbar'
import styled, { keyframes}  from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useEffect} from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'

import Defaultpage from './components/Defaultpage'
import Expenses from './components/expense/Expenses'
import BudgetMain from './components/budget/BudgetMain'
import DashboardMain from './components/dashboard/DashboardMain'

function App() {
    const [showNav, setShowNav] = useState(true)
    const [user, setUser] = useState(false)
    const [categories, setCategories] = useState([]);
    
    useEffect(()=> {fetch("http://localhost:9292/category")
    .then(resp => resp.json())
    .then((data) => setCategories(data))}, [])




    return (
        <div>
            <Switch>
                <Route exact path="/dashboard">
                    <NavHeader>
                        < HamburgerMenu onClick={() => setShowNav(!showNav)}/>
                    </NavHeader>
                    <DivSplitter>
                        <Navbar show={showNav} />
                        <MainContent slideRight={showNav}>
                            <DashboardMain user={user}/>
                        </MainContent>
                    </DivSplitter>
                </Route>

                <Route exact path="/expenses">
                    <NavHeader>
                        < HamburgerMenu onClick={() => setShowNav(!showNav)}/>
                    </NavHeader>
                    <Navbar show={showNav} />
                    <DivSplitter>
                        <Navbar show={showNav} />
                        <MainContent slideRight={showNav}>
                            <Expenses categories = {categories} user={user}/>
                        </MainContent>
                    </DivSplitter>
                </Route>

                <Route exact path="/budget">
                    <NavHeader>
                        < HamburgerMenu onClick={() => setShowNav(!showNav)}/>
                    </NavHeader>
                    <Navbar show={showNav} />
                    <DivSplitter>
                        <Navbar show={showNav} />
                        <MainContent slideRight={showNav}>
                            <BudgetMain user={user}/>
                        </MainContent>
                    </DivSplitter>
                </Route>

                <Route exact path="/contact">
                    <NavHeader>
                        < HamburgerMenu onClick={() => setShowNav(!showNav)}/>
                    </NavHeader>
                    <Navbar show={showNav} />
                    <DivSplitter>
                        <Navbar show={showNav} />
                        <MainContent slideRight={showNav}>
                            <h5> Contact </h5>
                        </MainContent>
                    </DivSplitter>
                </Route>

                <Route exact path="/">
                    <Defaultpage setUser={setUser}/>
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
    background: #011627;
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
