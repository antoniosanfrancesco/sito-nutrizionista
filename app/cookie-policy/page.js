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
              <p>I cookie sono piccoli file di testo che i siti visitati dall&apos;utente inviano al suo dispositivo, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita.</p>
            </section>

            <section className="mt-4">
              <h4 className="font-bodoni">Tipologie di Cookie utilizzati</h4>
              <p>Questo sito utilizza esclusivamente:</p>
              <ul>
                <li><strong>Cookie Tecnici:</strong> Indispensabili per il corretto funzionamento del sito e per garantire una navigazione sicura.</li>
                <li><strong>Analisi Statistica:</strong> Utilizziamo strumenti (come Vercel Analytics) che raccolgono dati in forma aggregata e anonima, senza tracciamento individuale dell&apos;utente.</li>
              </ul>
              <p><strong>Non</strong> vengono utilizzati cookie di profilazione per invio di pubblicità o tracciamento comportamentale.</p>
            </section>

            <section className="mt-4">
              <h4 className="font-bodoni">Gestione dei Cookie</h4>
              <p>L&apos;utente può scegliere di disabilitare i cookie agendo sulle impostazioni del proprio browser. La disabilitazione dei cookie tecnici potrebbe tuttavia compromettere alcune funzionalità del sito.</p>
            </section>

            <section className="mt-4">
              <h4 className="font-bodoni">Titolare del Trattamento</h4>
              <p>Per informazioni in merito ai cookie utilizzati, è possibile contattare la <strong>Dott.ssa Albina Crapella</strong> all&apos;indirizzo email: nutrizionistalbinacrapella@gmail.com.</p>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}