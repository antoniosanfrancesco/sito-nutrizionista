'use client';

import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function TopNavBar() {
  const [show, setShow] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleToggle = () => {
    if (show) {
      handleClose();
    } else {
      setShow(true);
      setIsClosing(false);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    // Avvia l'animazione di chiusura e aspetta 800ms (la durata del CSS) prima di rimuovere il DOM
    setTimeout(() => {
      setShow(false);
      setIsClosing(false);
    }, 800);
  };

  const greenColor = "#1b4d3e";

  return (
    <>
      <Navbar 
        expand="lg" 
        className="sticky-top py-3" 
        style={{ 
          backgroundColor: 'rgba(246, 237, 224, 0.92)', 
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(27, 77, 62, 0.08)',
          minHeight: '85px',
          zIndex: 1090 
        }}
      >
        <Container className="px-4 px-md-5">
          
          {/* Logo / Brand */}
          <Navbar.Brand 
            as={Link} 
            href='/' 
            className='fw-bold m-0 nav-hover-link' 
            style={{ 
              fontFamily: 'var(--font-elegant, serif)', 
              fontSize: '1.25rem', 
              color: greenColor,
              letterSpacing: '-0.01em'
            }}
          >
            Dott.ssa Albina Crapella
          </Navbar.Brand>

          {/* Tasto Hamburger */}
          <button 
            type="button"
            className='d-lg-none border-0 bg-transparent shadow-none p-2 position-relative'
            onClick={handleToggle}
            aria-label="Toggle navigation"
            style={{ zIndex: 1100, cursor: 'pointer' }}
          >
            {show && !isClosing ? (
              <span className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--foreground)', color: '#f6ede0', fontSize: '1rem' }}>
                ✕
              </span>
            ) : (
              <span className="navbar-toggler-icon" style={{ filter: 'invert(25%) sepia(35%) saturate(700%) hue-rotate(120deg)' }}></span>
            )}
          </button>

          {/* 1. MENU DESKTOP */}
          <div className="d-none d-lg-flex align-items-center ms-auto gap-4">
            <Nav style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem' }} className="align-items-center">
              <Nav.Link as={Link} href="/" className="px-3 text-dark fw-medium nav-hover-link">Home</Nav.Link>
              <Nav.Link as={Link} href="/chi-sono" className="px-3 text-dark fw-medium nav-hover-link">Chi Sono</Nav.Link>
              <Nav.Link as={Link} href="/servizi" className="px-3 text-dark fw-medium nav-hover-link">Servizi</Nav.Link>
              <Nav.Link as={Link} href="/#dove-ricevo" className="px-3 text-dark fw-medium nav-hover-link">Dove Ricevo</Nav.Link>
            </Nav>

            <Link href="https://wa.me/+393762278025" passHref>
              <Button 
                className="btn-custom rounded-pill px-4 py-2 fw-medium shadow-sm ms-2"
                style={{ fontSize: '0.9rem' }}
              >
                Prenota ora
              </Button>
            </Link>
          </div>

        </Container>
      </Navbar>

      {/* 2. MENU MOBILE CON ANIMAZIONE CIRCOLARE IN APERTURA E CHIUSURA */}
      <div className={`mobile-menu-overlay d-lg-none ${show && !isClosing ? 'open' : ''} ${isClosing ? 'is-closing' : ''}`}>
        
        {/* Header interno */}
        <div className="d-flex justify-content-between align-items-center pt-2">
          <span className="text-uppercase text-muted" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600 }}>
            Menu
          </span>
          <span style={{ fontSize: '0.85rem', color: greenColor, fontWeight: 600 }}>
            Dott.ssa A. Crapella
          </span>
        </div>

        {/* Voci di menu */}
        <div className="animate-in d-flex flex-column text-center my-auto gap-4">
          <Link 
            href="/" 
            onClick={handleClose} 
            className="py-2 fs-3 fw-bold text-decoration-none mobile-nav-link"
            style={{ fontFamily: 'var(--font-elegant, serif)', color: greenColor }}
          >
            Home
          </Link>
          <Link 
            href="/chi-sono" 
            onClick={handleClose} 
            className="py-2 fs-3 fw-bold text-decoration-none mobile-nav-link"
            style={{ fontFamily: 'var(--font-elegant, serif)', color: greenColor }}
          >
            Chi Sono
          </Link>
          <Link 
            href="/servizi" 
            onClick={handleClose} 
            className="py-2 fs-3 fw-bold text-decoration-none mobile-nav-link"
            style={{ fontFamily: 'var(--font-elegant, serif)', color: greenColor }}
          >
            Servizi
          </Link>
          <Link 
            href="/#dove-ricevo" 
            onClick={handleClose} 
            className="py-2 fs-3 fw-bold text-decoration-none mobile-nav-link"
            style={{ fontFamily: 'var(--font-elegant, serif)', color: greenColor }}
          >
            Dove Ricevo
          </Link>
        </div>

        {/* Pulsante CTA inferiore */}
        <div className="animate-in pb-4 text-center">
          <Button 
            className="btn-custom w-100 rounded-pill py-3 fw-medium shadow-sm text-center mb-3"
            href="https://wa.me/+393762278025"
            onClick={handleClose}
          >
            Prenota una consulenza
          </Button>
          <span className="text-muted" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
            Biologa Nutrizionista
          </span>
        </div>

      </div>
    </>
  );
}
