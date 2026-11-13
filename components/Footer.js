'use client';
import { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animazione fluida del footer allo scroll
    gsap.from('.gsap-footer-content', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
      },
    });
  }, { scope: containerRef });

  return (
    <footer 
      ref={containerRef} 
      style={{ backgroundColor: '#1b4d3e', color: '#fdfbf7' }} 
      className="py-5 mt-auto gsap-footer-content"
    >
      <Container>
        <Row className="gy-4">
          
          {/* Colonna 1: Branding & P.IVA */}
          <Col lg={4} md={6}>
            <h5 className="mb-3 fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-elegant, serif)' }}>
              Dott.ssa Albina Crapella
            </h5>
            <p className="small mb-2" style={{ opacity: 0.9 }}>Biologa Nutrizionista</p>
            <p className="small text-uppercase mb-0" style={{ opacity: 0.75, letterSpacing: '0.05em' }}>
              P.IVA 03958500799
            </p>
          </Col>

          {/* Colonna 2: Contatti */}
          <Col lg={4} md={6}>
            <h5 className="mb-3 fw-bold" style={{ fontFamily: 'var(--font-elegant, serif)' }}>
              Contatti
            </h5>
            <div className="d-flex align-items-center mb-2">
              <FaEnvelope className="me-2 flex-shrink-0" />
              <a href="mailto:info@albinacrapella.it" className="small" style={{ color: 'inherit', textDecoration: 'none' }}>
                nutrizionistalbinacrapella@gmail.com
              </a>
            </div>
            <div className="d-flex align-items-center mb-2">
              <a 
                href="tel:+393762278025" 
                className="text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start small"
                style={{ color: 'inherit' }}
              >
                <i className="bi bi-telephone-fill me-2"></i>
                +39 376 227 8025
              </a>
            </div>
            <div className="d-flex align-items-start mb-2">
              <FaMapMarkerAlt className="me-2 mt-1 flex-shrink-0" />
              <span className="small">Viale I Maggio II Traversa 9, Lamezia Terme 88046 (CZ)</span>
            </div>
          </Col>

          {/* Colonna 3: Social & Legal */}
          <Col lg={4} md={12} className="text-lg-end">
            <h5 className="mb-3 fw-bold" style={{ fontFamily: 'var(--font-elegant, serif)' }}>
              Seguimi
            </h5>
            <div className="mb-3">
              <a href="https://www.instagram.com/nutrizionista_albinacrapella_/" className="me-3 fs-4" style={{ color: 'inherit' }}>
                <FaInstagram />
              </a>
              <a href="https://wa.me/+393762278025" className="fs-4" style={{ color: 'inherit' }}>
                <FaWhatsapp />
              </a>
            </div>
            <div className="small" style={{ opacity: 0.8 }}>
              <p className="mb-1">© {new Date().getFullYear()} Albina Crapella. All rights reserved.</p>
              <p className="mb-2" style={{ opacity: 0.85, fontSize: '0.8rem' }}>Designed by Antonio Sanfrancesco</p>
              <div>
                <a href="/privacy-policy" style={{ color: 'inherit' }} className="me-3 text-decoration-underline">Privacy Policy</a>
                <a href="/cookie-policy" style={{ color: 'inherit' }} className="text-decoration-underline">Cookie Policy</a>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}
