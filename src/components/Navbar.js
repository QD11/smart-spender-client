import React, {useState} from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import {MdLogout, MdSpaceDashboard} from 'react-icons/md'
import {BsPiggyBankFill} from 'react-icons/bs'
import {FaMoneyBill} from 'react-icons/fa'

const linkStyle = {
    textDecoration: "none"
}

const Navbar = ({show, toggle, setToggle}) => {

    // const [toggle, setToggle] = useState() 

    // console.log(toggle)
    // const onClickHandler = (num) => {
    //     setToggle(num)
    // }

    return (
        <SideNav showBar={show}>
            <SideUL>
                <SideLI>
                    <NavLink to='/dashboard' exact style={linkStyle}>
                        
                        <SideA >
                            <DashIcon />
                            Dashboard
                        </SideA> 

                    </NavLink>
                </SideLI>
                <SideLI>
                    <NavLink to='/expenses' exact style={linkStyle}>
                        <SideA >
                            <MoneyIcon/>
                            Expenses
                        </SideA>
                    </NavLink>
                </SideLI>
                <SideLI>
                    <NavLink to='/budget' exact style={linkStyle}>
                        <SideA >
                            <PigIcon/>
                            Budget
                        </SideA>
                    </NavLink>
                </SideLI>
                <SideLI>
                    <NavLink to='/' exact style={linkStyle}>
                        <LogOut>
                            <Door />
                        </LogOut>

                    </NavLink>
                </SideLI>
            </SideUL>
        </SideNav>
    )
}

export default Navbar

//Styled Components
const SideNav = styled.div `
    width: 160px;
    background: #011627;
    position: absolute;
    height: 95vh;
    padding-left: 10px;
    transition: all 1s;
    left: ${props => props.showBar ? '0px' : '-100%'}
`

const SideUL = styled.ul`
    padding: 0
`

const SideLI = styled.li`
    list-style-type: none;
    margin: 10px 0
`

const SideA = styled.span`
    color: #eaecef;
    text-decoration: none;
    display: block;
    padding: 10px 10px;
    border-radius: 6px;
    margin: 10px;
    &:hover, :active {
        background: #172b4d
    }
`

const SideB = styled.span`
    color: #eaecef;
    text-decoration: none;
    display: block;
    padding: 10px 10px;
    border-radius: 6px;
    margin: 10px;
    background: white;
`

const LogOut = styled.span`
    color: #eaecef;
    text-decoration: none;
    display: block;
    padding: 10px 15px;
    border-radius: 6px;
    margin-top: 450px;
    margin-left: 10px;
    &:hover, :active {
        background: #172b4d
    }
`

const Door = styled(MdLogout)`
    font-size: 50px;

`
const DashIcon = styled(MdSpaceDashboard)`
    margin-right: 5px;
    margin-bottom: -2px;
    font-size: 20px;
`
const PigIcon = styled(BsPiggyBankFill)`
    margin-right: 5px;
    margin-bottom: -2px;
    font-size: 20px;
`

const MoneyIcon = styled(FaMoneyBill)`
    margin-right: 5px;
    margin-bottom: -2px;
    font-size: 20px;
`
