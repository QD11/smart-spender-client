import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

const Navbar = ({show}) => {
    return (
        <SideNav showBar={show}>
            <SideUL>
                <SideLI>
                    <NavLink to='/dashboard' exact>
                        <SideA href='/dashboard'>Dashboard</SideA>
                    </NavLink>
                </SideLI>
                <SideLI>
                    <NavLink to='/expenses' exact>
                        <SideA href='/expenses'>Expenses</SideA>
                    </NavLink>
                </SideLI>
                <SideLI>
                    <NavLink to='/budget' exact>
                        <SideA href='/budget'>Budget</SideA>
                    </NavLink>
                </SideLI>
                <SideLI>
                    <NavLink to='/dashboard' exact>
                        <SideA href='/contact'>Contact Us</SideA>
                    </NavLink>
                </SideLI>
            </SideUL>
        </SideNav>
    )
}

export default Navbar

//Styled Components
const SideNav = styled.div `
    width: 150px;
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

const SideA = styled.a`
    color: #eaecef;
    font-size: 16px;
    text-decoration: none;
    display: block;
    padding: 10px 15px;
    border-radius: 6px;

    &:hover, :active {
        background: #172b4d
    }
`