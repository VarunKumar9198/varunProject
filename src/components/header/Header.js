import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Helper from '../../Assets/helper'

import './Header.css'



function OffcanvasExample() {
    const {brandLogo, searchLogo, saveLogo, profilePic}=Helper()
  return (
            <Navbar  expand='xl' className="navHeader">
          <Container fluid>
            <Navbar.Brand href="#">
                <img src={brandLogo} alt='brand' width={160} height={36}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl}`} className='manualNavToggle' >
            <img src={profilePic} alt='profile' width={34} height={34} />
                </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xl}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                <img src={brandLogo} alt='brand' width={160} height={36}/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1">
                <NavDropdown
                    title="Explorar"
                    id={`offcanvasNavbarDropdown-expand-xl`}
                  >
                    <NavDropdown.Item href="#action3">Juegos</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    Noticias
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/">Manga</Nav.Link>
                  <Nav.Link href="/">Juegos</Nav.Link>
                  <NavDropdown
                    title="Noticias"
                    id={`offcanvasNavbarDropdown-expand-xl`}
                  >
                    <NavDropdown.Item href="#action3">Juegos</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    Noticias
                    </NavDropdown.Item>
                  </NavDropdown>

                  <div className='sideNav'>
                  <Nav.Link href="/">
                    <img src={searchLogo} alt='search' width={24} height={24}/>
                    </Nav.Link>

                    <Nav.Link href="/">
                    <img src={saveLogo} alt='saveLogo' width={24} height={24}/>
                    </Nav.Link>
                    <NavDropdown
                    drop='down-centered'
                    title={
                        <img src={profilePic} alt='profile' width={34} height={34} />
                    }
                    id={`offcanvasNavbarDropdown-expand-xl`}
                  >
                    <NavDropdown.Item href="#action3">Juegos</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    Noticias
                    </NavDropdown.Item>
                  </NavDropdown>
                  </div>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

export default OffcanvasExample;