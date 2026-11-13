'use client';
import { useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stepMetodo = [
  {
    numero: "01",
    titolo: "Ascolto e Anamnesi",
    descrizione: "Un colloquio iniziale approfondito per comprendere la tua storia, le tue abitudini, i tuoi ritmi quotidiani e i tuoi obiettivi reali."
  },
  {
    numero: "02",
    titolo: "Valutazione BIVA",
    descrizione: "Analisi strumentale non invasiva con tecnologia Akern per fotografare con precisione la tua composizione corporea e idratazione."
  },
  {
    numero: "03",
    titolo: "Piano Sartoriale",
    descrizione: "Elaborazione di una strategia nutrizionale cucita su misura, flessibile e pensata per integrarsi naturalmente nel tuo stile di vita."
  },
  {
    numero: "04",
    titolo: "Monitoraggio Costante",
    descrizione: "Controlli periodici per valutare i progressi, superare eventuali ostacoli e consolidare i risultati a lungo termine senza restrizioni."
  }
];

export default function Metodo() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Intestazione rallentata ed elegante
    gsap.from('.gsap-metodo-header', {
      y: 40,
      opacity: 0,
      duration: 1.4,
      stagger: 0.22,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.gsap-metodo-header',
        start: 'top 85%',
      },
    });

    // 2. Animazione a cascata per i 4 passi
    gsap.from('.gsap-metodo-card', {
      y: 40,
      scale: 0.95,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.gsap-metodo-grid',
        start: 'top 82%',
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className='py-5' style={{ backgroundColor: '#fcfaf6' }}>
      <Container className='py-4'>
        
        {/* Intestazione Sezione */}
        <div 
          className='text-center mx-auto mb-5 gsap-metodo-header' 
          style={{ maxWidth: '650px' }}
        >
          <span 
            className='text-uppercase d-block mb-2' 
            style={{ 
              letterSpacing: '0.18em', 
              fontSize: '0.8rem', 
              fontWeight: 600, 
              color: '#525c4b' 
            }}
          >
            Come lavoriamo insieme
          </span>
          <h2 className='display-5 fw-bold mb-3' style={{ fontFamily: 'var(--font-elegant, serif)', color: '#1b4d3e' }}>
            Il Mio Metodo
          </h2>
          <p className='text-muted mb-0' style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
            Un percorso chiaro, umano e strutturato passo dopo passo per accompagnarti verso il tuo benessere definitivo.
          </p>
        </div>

        {/* Griglia Step */}
        <Row className='g-4 justify-content-center gsap-metodo-grid'>
          {stepMetodo.map((step, index) => (
            <Col key={index} lg={3} md={6} sm={12} className="gsap-metodo-card">
              <Card 
                className='h-100 border-0 shadow-sm rounded-4 p-4 d-flex flex-column'
                style={{ 
                  backgroundColor: '#ffffff',
                  borderTop: '4px solid #1b4d3e' 
                }}
              >
                <div className='d-flex align-items-center justify-content-between mb-3'>
                  <span 
                    className='fw-bold px-3 py-1 rounded-pill'
                    style={{ 
                      backgroundColor: '#f4ede2', 
                      color: '#1b4d3e', 
                      fontSize: '0.85rem',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Step {step.numero}
                  </span>
                </div>
                
                <h3 className='h5 fw-bold mb-3' style={{ color: '#1b4d3e' }}>
                  {step.titolo}
                </h3>
                
                <p className='text-muted mb-0' style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                  {step.descrizione}
                </p>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}
