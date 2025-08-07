import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/Logo.png';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './Header.css';
import { CartContext } from '../Context/CartContext';
import { useContext, useState } from 'react';

function Header() {
    const { cartItems } = useContext(CartContext);
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" expanded={expanded} onToggle={setExpanded} style={{ backgroundColor: '#e0d7ff', padding: '0 10px', position: 'sticky', top: 0, zIndex: 1000 }}>
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
                    Soft
                    <img
                        src={Logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top mx-2"
                        alt="IceCream-Parlour"
                    />
                    Rich
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto my-2 my-lg-0 text-center" style={{ gap: '20px' }} navbarScroll>
                        <Link to="/" className="nav-link-custom" onClick={() => setExpanded(false)}>Home</Link>
                        <Link to="/about" className="nav-link-custom" onClick={() => setExpanded(false)}>About Us</Link>
                        <Link to="/contact" className="nav-link-custom" onClick={() => setExpanded(false)}>Contact</Link>

                        {/* 👇 Cart and SignIn for MOBILE view only */}
                        <div className="d-lg-none mt-3 d-flex flex-column align-items-center gap-2">
                            <Link to="/cart" className="text-dark text-decoration-none" onClick={() => setExpanded(false)}>
                                <Badge badgeContent={totalQuantity} color="error">
                                    <ShoppingCartIcon sx={{ color: '#000' }} fontSize="medium" />
                                </Badge>
                                <span className="ms-2">Cart</span>
                            </Link>
                            <Link to="/signin" onClick={() => setExpanded(false)}>
                                <Button variant="outline-dark" className="fw-bold w-100">
                                    Sign In
                                </Button>
                            </Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>

                {/* 👇 Cart and SignIn for DESKTOP view only */}
                <div className="d-none d-lg-flex align-items-center">
                    <Badge badgeContent={totalQuantity} color="error" sx={{ marginRight: '20px' }}>
                        <Link to="/cart"><ShoppingCartIcon sx={{ color: '#000' }} fontSize="large" /></Link>
                    </Badge>
                    <Link to='/signin'>
                        <Button variant="outline-dark" className="fw-bold">
                            Sign In
                        </Button>
                    </Link>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;
