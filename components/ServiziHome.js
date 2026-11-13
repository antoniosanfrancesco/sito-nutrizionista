'use client'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link'; 

const listaServizi = [
  {
    titolo: "Prima Visita", 
    descrizione: "Analisi approfondita delle abitudini alimentari, valutazione antropometrica, bioimpedenziometrica e definizione degli obiettivi.",
    prezzo: "80€",
  }, 
  {
    titolo: "Piano Nutrizionale Personalizzato",
    descrizione: "Elaborazione di un piano alimentare basato su una valutazione completa dei tuoi bisogni e delle tue preferenze.",
    prezzo: "50€",
  }, 
  {
    titolo: "Consulenza Online",
    descrizione: "Supporto nutrizionale ovunque tu sia, con videochiamata dedicata e materiali digitali.",
    prezzo: "60€",
  }
];

export default function ServiziHome() {
  return (
    <section className='py-5' style={{ backgroundColor: 'var(--background)' }}>
      <Container className='py-3' style={{ overflow: 'hidden' }}>
        
        {/* Intestazione Sezione */}
        <div 
          className='text-center mx-auto mb-5'
          style={{ maxWidth: '650px' }}
          data-aos="fade-up"
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
            Percorsi e Consulenze
          </span>
          <h2 className='display-5 fw-bold mb-3' style={{ color: 'var(--foreground)' }}>
            I Miei Servizi
          </h2>
          <p className='text-muted mb-0' style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
            Soluzioni mirate e professionali per aiutarti a raggiungere il tuo benessere psicofisico a 360 gradi.
          </p>
        </div>

        {/* Griglia Servizi */}
        <Row className='g-4 justify-content-center'>
          {listaServizi.map((servizio, index) => (
            <Col 
              key={index} 
              lg={4} md={6} sm={12}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <Card 
                className='h-100 border-0 shadow-sm hover-shadow rounded-4 overflow-hidden d-flex flex-column'
                style={{ 
                  backgroundColor: '#fcfaf6',
                  borderTop: '4px solid var(--foreground)' 
                }}
              >
                <Card.Body className='p-4 p-lg-4 d-flex flex-column'>
                  
                  {/* Titolo del servizio */}
                  <Card.Title 
                    as="h3" 
                    className='h4 fw-bold mb-3' 
                    style={{ color: 'var(--foreground)' }}
                  >
                    {servizio.titolo}
                  </Card.Title>

                  {/* Descrizione */}
                  <Card.Text 
                    className='text-muted mb-4 flex-grow-1' 
                    style={{ fontSize: '0.95rem', lineHeight: 1.6 }}
                  >
                    {servizio.descrizione}
                  </Card.Text>
                  
                  <hr className='text-muted opacity-25 my-3' />

                  {/* Prezzo e Bottone Dettagli */}
                  <div className='d-flex justify-content-between align-items-center mt-auto pt-2'>
                    <div>
                      <span className='d-block text-uppercase text-muted' style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                        A partire da
                      </span>
                      <span className='fw-bold fs-4' style={{ color: 'var(--foreground)' }}>
                        {servizio.prezzo}
                      </span>
                    </div>

                    <Link href="/servizi" passHref legacyBehavior>
                      <Button 
                        variant="outline-dark" 
                        size="sm" 
                        className="rounded-pill px-4 py-2 fw-medium"
                        style={{ borderColor: 'var(--foreground)', color: 'var(--foreground)' }}
                      >
                        Scopri di più
                      </Button>
                    </Link>
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
