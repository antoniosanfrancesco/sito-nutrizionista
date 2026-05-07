'use client';
import { Container, Row, Col } from 'react-bootstrap';

export default function CookiePolicy() {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <Container className="pb-5">
        <Row>
          <Col lg={8} className="mx-auto">
            <h1 className="font-bodoni mb-4" style={{ color: '#1b4d3e' }}>Cookie Policy</h1>
            <p className="text-muted">In vigore dal: {new Date().toLocaleDateString('it-IT')}</p>

            <section className="mt-5">
              <h4 className="font-bodoni">Cosa sono i Cookie</h4>
              <p>I cookie sono piccoli file di testo che i siti visitati dall&utente inviano al suo terminale, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita.</p>
            </section>

            <section className="mt-4">
              <h4 className="font-bodoni">Tipologie di Cookie utilizzati</h4>
              <p>Questo sito utilizza esclusivamente:</p>
              <ul>
                <li><strong>Cookie Tecnici:</strong> Necessari per il corretto funzionamento del sito e per la navigazione.</li>
                <li><strong>Cookie Statistici (se presenti):</strong> In forma anonimizzata per comprendere come gli utenti interagiscono con il sito.</li>
              </ul>
              <p>Non vengono utilizzati cookie di profilazione o di terze parti per finalità pubblicitarie.</p>
            </section>

            <section className="mt-4">
              <h4 className="font-bodoni">Come gestire i Cookie</h4>
              <p>L&utente può gestire le preferenze relative ai cookie direttamente all&interno del proprio browser, impedendo ad esempio che terze parti possano installarne. È possibile eliminare i cookie installati in passato.</p>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}