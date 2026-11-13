'use client';
import { useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const trattamenti = [
  {
    titolo: "Dimagrimento",
    descrizione: ["Sovrappeso e Obesità", "Ricomposizione Corporea", "Dieta Chetogenica", "Dieta Low Carb", "Alimentazione Vegana"]
  },
  {
    titolo: "Patologie",
    descrizione: ["Ipercolesterolemia", "Ipertrigliceridemia", "Diabete tipo 1 e 2", "Insulino-resistenza", "Ipertensione", "Disturbi Gastrointestinali", "IBS", "Allergie e Intolleranze Alimentari", "Malattie Oncologiche"]
  }, 
  {
    titolo: "Malattie Autoimmuni",
    descrizione: ["Celiachia", "Ipotiroidismo, Tiroidite di Hashimoto", "Ipertiroidismo", "Patologie Autoimmuni"]
  }, 
  {
    titolo: "Nutrizione Pediatrica",
    descrizione: ["Svezzamento e Alimentazione del Bambino", "Alimentazione per Ragazzi e Adolescenti", "Educazione Alimentare in Età Evolutiva", "Percorsi Nutrizionali per Famiglie", "Selettività Alimentare", "Consulenza per Genitori"]
  }, 
  {
    titolo: "Nutrizione al Femminile",
    descrizione: ["Squilibri Ormonali", "Gravidanze e Allattamento", "Menopausa", "PCOS"]
  }
];

export default function Trattamenti() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Intestazione rallentata ed elegante solo per questa pagina
    gsap.from('.gsap-trattamenti-header', {
      y: 40,
      opacity: 0,
      duration: 1.4, // Più lenta e morbida
      stagger: 0.22, // Distacco maggiore tra span, h2 e p
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.gsap-trattamenti-header',
        start: 'top 85%',
      },
    });

    // 2. Animazione a cascata standard per le card
    gsap.from('.gsap-trattamento-card', {
      y: 40,
      scale: 0.95,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.gsap-trattamenti-grid',
        start: 'top 82%',
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className='py-5' style={{ backgroundColor: '#85937a' }}>
      <Container className='py-3'>
        
        {/* Intestazione Sezione */}
        <div 
          className='text-center mx-auto mb-5 gsap-trattamenti-header' 
          style={{ maxWidth: '650px' }}
        >
          <span 
            className='text-uppercase d-block mb-2' 
            style={{ 
              letterSpacing: '0.18em', 
              fontSize: '0.8rem', 
              fontWeight: 600, 
              color: '#f6ede0' 
            }}
          >
            Aree di intervento
          </span>
          <h2 className='display-5 fw-bold text-white mb-3'>
            Di cosa mi occupo
          </h2>
          <p className='mb-0' style={{ color: '#f6ede0', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Percorsi nutrizionali su misura, studiati per accompagnarti con equilibrio e consapevolezza in ogni fase della vita.
          </p>
        </div>

        {/* Griglia Card */}
        <Row className='g-4 justify-content-center gsap-trattamenti-grid'>
          {trattamenti.map((item, index) => (
            <Col 
              key={index} 
              lg={4} md={6} sm={12}
              className="gsap-trattamento-card"
            >
              <Card 
                className='h-100 border-0 shadow-sm hover-shadow rounded-4 overflow-hidden'
                style={{ 
                  backgroundColor: '#fcfaf6',
                  borderTop: '4px solid var(--foreground)' 
                }}
              >
                <Card.Body className='p-4 p-lg-4 d-flex flex-column'>
                  
                  {/* Numero editoriale + Titolo */}
                  <div className='mb-4 pb-3 border-bottom' style={{ borderColor: 'rgba(27, 77, 62, 0.12)' }}>
                    <span 
                      className='d-block mb-1' 
                      style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: 600, 
                        letterSpacing: '0.1em', 
                        color: '#85937a' 
                      }}
                    >
                      0{index + 1}
                    </span>
                    <Card.Title 
                      as="h3" 
                      className='h4 fw-bold mb-0' 
                      style={{ color: 'var(--foreground)' }}
                    >
                      {item.titolo}
                    </Card.Title>
                  </div>

                  {/* Voci trasformate in tag/pillole pulite */}
                  <div className='d-flex flex-column gap-2'>
                    {item.descrizione.map((elemento, i) => (
                      <div 
                        key={i} 
                        className='py-2 px-3 rounded-3 d-flex align-items-center'
                        style={{ 
                          backgroundColor: '#f4ede2', 
                          color: '#1b4d3e',
                          fontSize: '0.92rem',
                          fontWeight: 500
                        }}
                      >
                        <span 
                          className='me-2 rounded-circle flex-shrink-0' 
                          style={{ 
                            width: '6px', 
                            height: '6px', 
                            backgroundColor: '#85937a' 
                          }}
                        />
                        <span>{elemento}</span>
                      </div>
                    ))}
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}
