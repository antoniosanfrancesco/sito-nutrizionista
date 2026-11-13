'use client';

import { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function TopNavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const greenColor = "#1b4d3e";

  return (
    <Navbar 
      expand="lg" 
      className="sticky-top py-3" 
      style={{ 
        backgroundColor: 'rgba(246, 237, 224, 0.9)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(27, 77, 62, 0.08)',
        minHeight: '85px' 
      }}
    >
      <Container className="px-4 px-md-5">
        
        {/* Logo / Brand con font elegante */}
        <Navbar.Brand 
          as={Link} 
          href='/' 
          className='fw-bold m-0' 
          style={{ 
            fontFamily: 'var(--font-elegant, serif)', 
            fontSize: '1.25rem', 
            color: greenColor,
            letterSpacing: '-0.01em'
          }}
        >
          Dott.ssa Albina Crapella
        </Navbar.Brand>

        {/* Tasto Hamburger moderno */}
        <Navbar.Toggle 
          aria-controls="offcanvasNavbar" 
          onClick={handleShow} 
          className='border-0 shadow-none d-lg-none p-2'
          style={{ color: greenColor }}
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(25%) sepia(35%) saturate(700%) hue-rotate(120deg)' }}></span>
        </Navbar.Toggle>

        {/* 1. MENU DESKTOP */}
        <div className="d-none d-lg-flex align-items-center ms-auto gap-4">
          <Nav style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem' }} className="align-items-center">
            <Nav.Link as={Link} href="/" className="px-3 text-dark fw-medium nav-hover-link">Home</Nav.Link>
            <Nav.Link as={Link} href="/chi-sono" className="px-3 text-dark fw-medium nav-hover-link">Chi Sono</Nav.Link>
            <Nav.Link as={Link} href="/servizi" className="px-3 text-dark fw-medium nav-hover-link">Servizi</Nav.Link>
            <Nav.Link as={Link} href="/#dove-ricevo" className="px-3 text-dark fw-medium nav-hover-link">Dove Ricevo</Nav.Link>
          </Nav>

          {/* CTA rapida nella navbar */}
          <Link href="https://wa.me/+393762278025" passHref legacyBehavior>
            <Button 
              className="btn-custom rounded-pill px-4 py-2 fw-medium shadow-sm ms-2"
              style={{ fontSize: '0.9rem' }}
            >
              Prenota ora
            </Button>
          </Link>
        </div>

        {/* 2. MENU MOBILE (OFFCANVAS) */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
          className="d-lg-none shadow-lg"
          style={{ backgroundColor: '#f6ede0', width: '300px' }}
        >
          <Offcanvas.Header closeButton className="border-bottom mx-3 px-0">
            <Offcanvas.Title className="fw-bold" style={{ color: greenColor, fontFamily: 'var(--font-elegant, serif)' }}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column justify-content-between py-4">
            <Nav className="flex-column text-start" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <Nav.Link as={Link} href="/" onClick={handleClose} className="py-3 fs-5 text-dark border-bottom border-light">Home</Nav.Link>
              <Nav.Link as={Link} href="/chi-sono" onClick={handleClose} className="py-3 fs-5 text-dark border-bottom border-light">Chi Sono</Nav.Link>
              <Nav.Link as={Link} href="/servizi" onClick={handleClose} className="py-3 fs-5 text-dark border-bottom border-light">Servizi</Nav.Link>
              <Nav.Link as={Link} href="/#dove-ricevo" onClick={handleClose} className="py-3 fs-5 text-dark border-bottom border-light">Dove Ricevo</Nav.Link>
            </Nav>

            {/* Bottone prenota nel mobile menu */}
            <div className="pt-4">
              <Button 
                className="btn-custom w-100 rounded-pill py-3 fw-medium shadow-sm text-center"
                href="https://wa.me/+393762278025"
                onClick={handleClose}
              >
                Prenota una consulenza
              </Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
