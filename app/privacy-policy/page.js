'use client';
import { Container, Row, Col } from 'react-bootstrap';

export default function PrivacyPolicy() {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <Container className="pb-5">
        <Row>
          <Col lg={8} className="mx-auto">
            <h1 className="font-bodoni mb-4" style={{ color: '#1b4d3e' }}>Privacy Policy</h1>
            <p className="text-muted">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
            
            <section className="mt-5">
              <h4 className="font-bodoni">1. Titolare del Trattamento</h4>
              <p>Il titolare del trattamento dei dati è la <strong>Dott.ssa Albina Crapella</strong>, con studio professionale in [Tuo Indirizzo, Città], P.IVA [Tua P.IVA]. Email di contatto: [Tua Email].</p>
            </section>

            <section className="mt-4">
              <h4 className="font-bodoni">2. Tipologia di Dati Raccolti</h4>
              <p>Attraverso questo sito vengono raccolti dati forniti volontariamente dall&utente (nome, email, numero di telefono tramite form o link WhatsApp) e dati di navigazione tecnici (indirizzi IP, log di sistema).</p>
            </section>

            <section className="mt-4">
              <h4 className="font-bodoni">3. Finalità del Trattamento</h4>
              <p>I dati sono trattati esclusivamente per le seguenti finalità:</p>
              <ul>
                <li>Rispondere a richieste di informazioni o prenotazioni.</li>
                <li>Fornire i servizi di consulenza nutrizionale richiesti.</li>
                <li>Adempimenti agli obblighi di legge e fiscali.</li>
              </ul>
            </section>

            <section className="mt-4">
              <h4 className="font-bodoni">4. Base Giuridica</h4>
              <p>Il trattamento si basa sul consenso dell&interessato e sull&esecuzione di misure precontrattuali o contrattuali richieste dall&utente stesso.</p>
            </section>

            <section className="mt-4">
              <h4 className="font-bodoni">5. Diritti dell&Interessato</h4>
              <p>Ai sensi del GDPR, hai il diritto di accedere ai tuoi dati, chiederne la rettifica, la cancellazione o la limitazione del trattamento scrivendo all&indirizzo email sopra indicato.</p>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}