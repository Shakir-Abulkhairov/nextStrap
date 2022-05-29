import {Navbar,Container,Nav} from 'react-bootstrap'
import Link from 'next/link';
// import 'bootstrap/dist/css/bootstrap.min.css';
const Header =()=>{
    return(
        <>
            <Navbar bg="dark" variant="dark"  fixed="top" >
                <Container>
                    <Nav className="me-auto">
                        <Link href='/' passHref><Nav.Link >Home</Nav.Link></Link>
                        <Link href='/About' passHref><Nav.Link >About</Nav.Link></Link>
                        <Link href='/moons'passHref><Nav.Link >Moons</Nav.Link></Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;