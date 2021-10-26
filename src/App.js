import Navbar from './components/Navbar'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState} from 'react'

function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="App">
      <NavHeader>
        < GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
      </NavHeader>
      <Navbar show={showNav} />
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