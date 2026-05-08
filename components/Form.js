'use client';
import { Container, Row, Col, Button, Form, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function FormArea() {
  const [testo, setTesto] = useState("");
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [mail, setMail] = useState("");
  
  // 1. Stato per il caricamento
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (testo.length < 10) {
      alert("Il messaggio è troppo breve, descrivi meglio la tua richiesta.");
      return;
    }

    // 2. Attiva il caricamento
    setIsSubmitting(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      message: testo,
      user_nome: nome,
      user_tel: numero,
      user_email: mail,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        alert('Email inviata con successo!');
        setTesto("");
        setNome("");
        setMail("");
        setNumero("");
      })
      .catch((err) => {
        console.error('Errore:', err);
        alert("Si è verificato un errore durante l'invio.");
      })
      .finally(() => {
        // 3. Disattiva il caricamento in ogni caso (successo o errore)
        setIsSubmitting(false);
      });
  };

  return (
    <Container className="py-5" style={{ overflow: 'hidden' }}>
      {/* 4. Aggiungiamo lo stile CSS per l'effetto hover direttamente qui */}
      <style jsx>{`
        .btn-custom {
          transition: all 0.3s ease !important;
        }
        .btn-custom:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15) !important;
          filter: brightness(1.1);
        }
        .btn-custom:active {
          transform: translateY(-1px);
        }
      `}</style>

      <Row className="justify-content-center">
        <Col 
          md={8} lg={8} 
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <div className="bg-white p-4 p-md-5 rounded-5 shadow-sm">
            <h2 className="font-bodoni mb-4 text-center" style={{ color: '#1b4d3e' }}>
              Hai qualche dubbio?
            </h2>
            <p className="text-center text-muted mb-4">
              Scrivimi un messaggio, ti risponderò il prima possibile.
            </p>

            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3' data-aos="fade-up" data-aos-delay="200">
                <Form.Label>Nome e Cognome</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Mario Rossi'
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className='mb-3' data-aos="fade-up" data-aos-delay="300">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='nome@esempio.it'
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </Form.Group>
              
              <Form.Group className='mb-3' data-aos="fade-up" data-aos-delay="400">
                <Form.Label>Numero di telefono</Form.Label>
                <Form.Control
                  type='tel'
                  placeholder='Il tuo numero'
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-4" data-aos="fade-up" data-aos-delay="500">
                <Form.Label>Il tuo messaggio</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  placeholder="Scrivi qui il tuo messaggio..."
                  className="border-0 bg-light p-3"
                  style={{ borderRadius: '15px' }}
                  value={testo}
                  onChange={(e) => setTesto(e.target.value)}
                />
              </Form.Group>

              <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                <Button 
                  type="submit" 
                  className="border-0 py-3 px-5 shadow-sm btn-custom"
                  disabled={isSubmitting} // 5. Disabilita il tasto durante l'invio
                  style={{ 
                    backgroundColor: '#85937a', 
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    minWidth: '200px' // Per evitare che il tasto cambi dimensione col caricamento
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Invio in corso...
                    </>
                  ) : (
                    "Invia il messaggio"
                  )}
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}