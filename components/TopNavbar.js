'use client';

import { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import Link from 'next/link';

export default function TopNavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const greenColor = "#1b4d3e";

  return (
    <Navbar 
      expand="lg" 
      className="shadow-sm sticky-top" 
      style={{ backgroundColor: '#f6ede0', minHeight: '80px' }}
    >
      <Container fluid className="px-md-5">
        {/* Logo/Brand */}
        <Navbar.Brand as={Link} href='/' className='fw-bold' style={{ fontSize: '1.2rem', color: greenColor }}>
          Dott.ssa Albina Crapella
        </Navbar.Brand>

        {/* Tasto Hamburger */}
        <Navbar.Toggle 
          aria-controls="offcanvasNavbar" 
          onClick={handleShow} 
          className='ms-auto border-0 shadow-none d-lg-none'
        />

        {/* 1. MENU DESKTOP */}
        <div className="d-none d-lg-flex ms-auto">
          <Nav style={{ fontFamily: 'Montserrat' }}>
            <Nav.Link as={Link} href="/" className="px-3">Home</Nav.Link>
            {/* Usa href="/#id-sezione" per farlo funzionare da ogni pagina */}
            <Nav.Link as={Link} href="/chi-sono" className="px-3">Chi Sono</Nav.Link>
            <Nav.Link as={Link} href="/servizi" className="px-3">Servizi</Nav.Link>
            <Nav.Link as={Link} href="/#dove-ricevo" className="px-3">Dove Ricevo</Nav.Link>
          </Nav>
        </div>

        {/* 2. MENU MOBILE (OFFCANVAS) */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
          className="d-lg-none"
          style={{ backgroundColor: '#f6ede0', width: '280px' }}
        >
          <Offcanvas.Header closeButton className="border-bottom">
            <Offcanvas.Title id="offcanvasNavbarLabel" className="fw-bold" style={{ color: greenColor }}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column text-end pe-3" style={{ fontFamily: 'Montserrat' }}>
              <Nav.Link as={Link} href="/" onClick={handleClose} className="py-3 fs-5">Home</Nav.Link>
              <Nav.Link as={Link} href="/#chi-sono" onClick={handleClose} className="py-3 fs-5">Chi Sono</Nav.Link>
              <Nav.Link as={Link} href="/servizi" onClick={handleClose} className="py-3 fs-5">Servizi</Nav.Link>
              <Nav.Link as={Link} href="/#dove-ricevo" onClick={handleClose} className="py-3 fs-5">Dove Ricevo</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}