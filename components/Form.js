'use client';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function FormArea () {
  const [testo, setTesto] = useState("");
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

		if (testo.length < 10) {
  		alert("Il messaggio è troppo breve, descrivi meglio la tua richiesta.");
  		return;
}

    const templateParams = {
     message: testo,
     user_nome: nome,
     user_tel: numero,
     user_email: mail,
   };

  emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
       alert('Email inviata con successo!');
       // Pulisce tutti i campi del form dopo l'invio
       setTesto(""); 
       setNome("");
       setMail("");
       setNumero("");
    })
    .catch((err) => {
       console.error('Errore:', err);
    });
  };

  return (
    <Container className="py-5" style={{ overflow: 'hidden' }}>
      <Row className="justify-content-center">
        <Col 
          md={8} lg={8} 
          data-aos="zoom-in" // Effetto accogliente che espande il form
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
                  className="border-0 py-3 px-5 shadow-sm btn-submit"
                  style={{ 
                    backgroundColor: '#85937a', 
                    borderRadius: '50px',
                    fontWeight: 'bold'
                  }}
                >
                  Invia il messaggio
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}