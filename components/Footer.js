'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Se usi react-icons

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1b4d3e))', color: '#fdfbf7' }} className="py-5 mt-auto bg-dark">
      <Container>
        <Row className="gy-4">
          
          {/* Colonna 1: Branding & P.IVA */}
          <Col lg={4} md={6}>
            <h5 className="font-bodoni mb-3" style={{ fontSize: '1.5rem' }}>Dott.ssa Albina Crapella</h5>
            <p className="small mb-2">Biologa Nutrizionista</p>
            <p className="small text-uppercase" style={{ opacity: 0.8 }}>P.IVA 03958500799</p>
          </Col>

          {/* Colonna 2: Contatti */}
          <Col lg={4} md={6}>
            <h5 className="font-bodoni mb-3">Contatti</h5>
            <div className="d-flex align-items-center mb-2">
              <FaEnvelope className="me-2" />
              <a href="mailto:info@albinacrapella.it" style={{ color: 'inherit', textDecoration: 'none' }}>nutrizionistalbinacrapella@gmail.com</a>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaMapMarkerAlt className="me-2" />
              <span>Viale I Maggio II Traversa 9, Lamezia Terme 88046 (CZ)</span>
            </div>
          </Col>

          {/* Colonna 3: Social & Legal */}
          <Col lg={4} md={12} className="text-lg-end">
            <h5 className="font-bodoni mb-3">Seguimi</h5>
            <div className="mb-3">
              <a href="https://www.instagram.com/nutrizionista_albinacrapella_/" className="me-3 fs-4" style={{ color: 'inherit' }}><FaInstagram /></a>
              <a href="https://wa.me/+393762278025" className="fs-4" style={{ color: 'inherit' }}><FaWhatsapp /></a>
            </div>
            <div className="small" style={{ opacity: 0.7 }}>
              <p className="mb-0">© {new Date().getFullYear()} Albina Crapella. All rights reserved.</p>
              <a href="/privacy-policy" style={{ color: 'inherit' }} className="me-2">Privacy Policy</a>
              <a href="/cookie-policy" style={{ color: 'inherit' }}>Cookie Policy</a>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}