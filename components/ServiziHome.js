'use client'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link'; 

const listaServizi = [
  {
    titolo: "Prima Visita", 
    descrizione: "Analisi approfondita delle abitudini alimentari, valutazione antropometrica, bioimpedenziometrica e definizione degli obiettivi.",
    prezzo: "80 euro",
  }, 
  {
    titolo: "Piano Nutrizionale Personalizzato",
    descrizione: "Elaborazione di un piano alimentare basato su una valutazione completa dei tuoi bisogni e delle tue preferenze.",
    prezzo: "50 euro",
  }, 
  {
    titolo: "Consulenza Online",
    descrizione: "Supporto nutrizionale ovunque tu sia, con videochiamata dedicata e materiali digitali.",
    prezzo: "60 euro",
  }
];

export default function ServiziHome() {
  return (
    <Container className='py-5' style={{ overflow: 'hidden' }}>
      <div 
        className='text-center mb-5'
        data-aos="fade-up"
      >
        <h2 className='fw-bold display-7' style={{ color: '#1b4d3e' }}>I MIEI SERVIZI</h2>
      </div>

      <Row className='g-4'>
        {listaServizi.map((servizio, index) => (
          <Col 
            key={index} 
            md={4}
            data-aos="zoom-in-up" // Un leggero zoom mentre sale, molto bello per i prezzi
            data-aos-delay={index * 150} // 150ms di ritardo tra una card e l'altra
          >
            <Card className='h-100 border-0 shadow-sm hover-shadow transition rounded-5'>
              <Card.Body className='p-4 d-flex flex-column'>
                <div className="mb-3 fw-bold fs-4" style={{ color: '#1b4d3e' }}>
                  {servizio.titolo}
                </div>
                <Card.Text className='text-muted flex-grow-1'>
                  {servizio.descrizione}
                </Card.Text>
                
                
                <hr />
                <div className='d-flex justify-content-between align-items-center mt-auto'>
                  <Link href="/servizi" passHref>
                    <Button variant="outline-dark" size="sm" className="rounded-pill px-4">
                      Dettagli
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card> 
          </Col>
        ))}
      </Row>
    </Container>
  );
}