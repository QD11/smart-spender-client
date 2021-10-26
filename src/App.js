import Navbar from './components/Navbar'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState} from 'react'
import { Route, Switch} from 'react-router-dom'

import Defaultpage from './components/Defaultpage'
import Expenses from './components/expense/Expenses'

function App() {
    const [showNav, setShowNav] = useState(true)
    const [user, setUser] = useState({})
    

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
                            <h5> Dashboard </h5>
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
                            <Expenses user={user}/>
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
                            <h5> Budget </h5>
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

const HamburgerMenu = styled(GiHamburgerMenu)`
    cursor: pointer;
`