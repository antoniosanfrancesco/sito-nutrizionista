'use client';

import { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ServiziHome from '../components/ServiziHome';
import DiCosaTratto from '../components/DiCosaTratto';
import SocialLinks from '../components/Social';
import Contatti from '../components/Posizione';
import Metodo from '../components/Metodo';
import FAQHome from '../components/FAQHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormArea from '@/components/Form';

gsap.registerPlugin(useGSAP);

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. L'arco con il ritratto emerge dolcemente
    tl.from('.gsap-hero-arch', {
      y: 35,
      opacity: 0,
      scale: 0.96,
      duration: 1.1,
    })
    // 2. La foto interna fa un leggerissimo zoom-out verso la sua dimensione naturale
    .from('.gsap-hero-img', {
      scale: 1.06,
      duration: 1.3,
    }, '<') // '<' significa che parte nello stesso istante dell'arco
    // 3. I testi, il bottone e i social entrano a cascata mentre l'immagine si assesta
    .from('.gsap-hero-stagger', {
      y: 25,
      opacity: 0,
      duration: 0.85,
      stagger: 0.12,
    }, '-=0.75'); // Parte 0.75s prima che finisca l'animazione dell'immagine
  }, { scope: containerRef });

  return (
    <main ref={containerRef} style={{ overflowX: 'hidden' }}>

      {/* Hero Section (rimossi page-fade-in e data-aos per evitare conflitti con GSAP) */}
      <div className="py-5">
        <Container>
          <Row className="align-items-center g-5" style={{ minHeight: '75vh' }}>

            {/* Immagine Hero Section con effetto cornice/passepartout */}
            <Col lg={6} className="d-flex justify-content-center">
              <div 
                className="gsap-hero-arch overflow-hidden"
                style={{
                  padding: '10px',
                  border: '2px solid var(--foreground)',
                  borderRadius: '235px 235px 0 0',
                }}
              >
                <div style={{ borderRadius: '225px 225px 0 0', overflow: 'hidden' }}>
                  <Image 
                    src="/images/hero.webp"
                    alt="Dott.ssa Albina Crapella - Biologa Nutrizionista"
                    width={430} 
                    height={480}
                    priority 
                    className="img-fluid gsap-hero-img"
                    style={{ 
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </Col>

            {/* Testo Hero Section */}
            <Col lg={6}>
              <div className="d-flex flex-column text-center text-lg-start ps-lg-3">
                
                {/* Occhiello / Qualifica */}
                <span 
                  className="text-uppercase mb-2 gsap-hero-stagger" 
                  style={{ 
                    letterSpacing: '0.15em', 
                    fontSize: '0.85rem', 
                    fontWeight: 600,
                    color: '#525c4b' 
                  }}
                >
                  Biologa Nutrizionista
                </span>

                <h1 className="display-3 fw-bold mb-3 gsap-hero-stagger" style={{ lineHeight: 1.1 }}>
                  Dott.ssa <br/>Albina Crapella
                </h1>

                <p className="lead mb-4 gsap-hero-stagger" style={{ maxWidth: '480px', color: '#2c3e35' }}>
                  La nutrizione non è perfezione, ma ascolto: ti accompagno a trovare il tuo equilibrio, con rispetto, serenità e consapevolezza.
                </p>
                
                {/* Bottone CTA */}
                <div className="mb-5 gsap-hero-stagger">
                  <Button 
                    className="btn-custom rounded-pill px-4 py-3 fw-medium shadow-sm" 
                    href="https://wa.me/+393762278025"
                  >
                    Prenota una consulenza
                  </Button>
                </div>
                
                {/* Sezione Social raffinata */}
                <div 
                  className="pt-3 border-top gsap-hero-stagger" 
                  style={{ borderColor: 'rgba(27, 77, 62, 0.15)', maxWidth: '480px' }}
                >
                  <p 
                    className="text-uppercase mb-2" 
                    style={{ fontSize: '0.75rem', letterSpacing: '0.12em', fontWeight: 600, color: '#525c4b' }}
                  >
                    Seguimi anche su
                  </p>
                  <div className="d-flex justify-content-center justify-content-lg-start">
                    <SocialLinks />
                  </div>
                </div>

              </div>  
            </Col>

          </Row>
        </Container>
      </div>
			

			{/* Sezione Metodo */}
			<Metodo />


      {/* Sezione DiCosaTratto */}
      <section id='trattamenti'>
        <DiCosaTratto/>
      </section>

      {/* Sezione Contatti / Dove Ricevo */}
      <Contatti/>

      {/* Sezione Servizi */}
      <section id="servizi" className="py-5">
        <ServiziHome />
      </section>

			{/* Sezione FAQ Home */}
			<FAQHome />


      {/* Form */}
      <FormArea/>
    </main>
  );
}
