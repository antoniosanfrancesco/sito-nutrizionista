'use client';
import { useRef } from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { FaLaptop, FaWeight, FaChartBar, FaAppleAlt, FaComments, FaHome, FaClock, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Servizi() {
  const containerRef = useRef(null);

  const serviziRapidi = [
    { icon: <FaLaptop />, title: "Consulenza Online" },
    { icon: <FaWeight />, title: "Valutazione Antropometrica" },
    { icon: <FaChartBar />, title: "BIVA - Akern" },
    { icon: <FaAppleAlt />, title: "Piano Nutrizionale" },
    { icon: <FaComments />, title: "Consulenze Alimentari" },
    { icon: <FaHome />, title: "Servizio Domiciliare" },
  ];

  const faqs = [
    {
      domanda: "Come devo prepararmi per la prima visita e per l'esame BIVA?",
      risposta: "Per garantire la massima precisione dell'analisi bioimpedenziometrica (BIVA), è consigliabile presentarsi a digiuno da cibi e bevande da almeno 3 ore, evitare attività fisica intensa nelle 12 ore precedenti e non applicare creme su mani e piedi."
    },
    {
      domanda: "Cosa devo portare al primo appuntamento?",
      risposta: "Porta con te eventuali analisi del sangue recenti (effettuate negli ultimi 6-12 mesi), referti medici o diagnosi di patologie accertate ed eventuale elenco di farmaci o integratori assunti abitualmente."
    },
    {
      domanda: "Dopo quanto tempo riceverò il mio piano nutrizionale?",
      risposta: "Il piano alimentare viene elaborato completamente su misura dopo la prima visita e inviato entro 3-5 giorni lavorativi tramite email o area dedicata, accompagnato da consigli pratici per la spesa e la gestione dei pasti."
    },
    {
      domanda: "Come funzionano i controlli successivi?",
      risposta: "I controlli si fissano generalmente ogni 4-6 settimane. Servono a monitorare i progressi attraverso una nuova valutazione antropometrica e BIVA, valutare le sensazioni avute e apportare eventuali modifiche al piano."
    }
  ];

  useGSAP(() => {
    // 1. Header principale della pagina
    gsap.from('.gsap-header-reveal', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // 2. Griglia rapida delle icone (entrano a cascata)
    gsap.from('.gsap-quick-card', {
      scale: 0.9,
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: '.gsap-quick-grid',
        start: 'top 85%',
      },
    });

    // 3. Animazione per ciascuna riga dei servizi (da sinistra/destra)
    const serviceRows = gsap.utils.toArray('.gsap-service-row');
    serviceRows.forEach((row) => {
      const img = row.querySelector('.gsap-srv-img');
      const text = row.querySelector('.gsap-srv-text');

      if (img && text) {
        gsap.from(img, {
          x: -40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
          },
        });

        gsap.from(text, {
          x: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
          },
        });
      }
    });

    // 4. Sezione FAQ e CTA finale
    gsap.from('.gsap-fade-section', {
      y: 35,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.gsap-fade-section',
        start: 'top 85%',
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ backgroundColor: 'var(--background)', paddingTop: '85px', overflowX: 'hidden' }}>
      
      {/* HEADER DELLA PAGINA */}
      <section className="py-5">
        <Container className="text-center py-3">
          <span 
            className='text-uppercase d-block mb-2 gsap-header-reveal' 
            style={{ letterSpacing: '0.18em', fontSize: '0.8rem', fontWeight: 600, color: '#525c4b' }}
          >
            I miei percorsi
          </span>
          <h1 
            className="display-4 fw-bold mb-3 gsap-header-reveal" 
            style={{ color: 'var(--foreground)' }}
          >
            Servizi Nutrizionali
          </h1>
          <p 
            className="text-muted mx-auto mb-5 gsap-header-reveal" 
            style={{ maxWidth: '700px', fontSize: '1.05rem', lineHeight: '1.6' }}
          >
            Percorsi personalizzati basati su evidenze scientifiche e tecnologie d&apos;avanguardia per il raggiungimento del tuo benessere ottimale.
          </p>
          
          {/* GRIGLIA RAPIDA */}
          <Row className="justify-content-center g-4 mt-2 gsap-quick-grid">
            {serviziRapidi.map((s, i) => (
              <Col 
                key={i} 
                xs={6} md={4} lg={2}
                className="gsap-quick-card"
              >
                <Card 
                  className="h-100 border-0 shadow-sm rounded-4 text-center p-3 d-flex flex-column align-items-center justify-content-center"
                  style={{ backgroundColor: '#fcfaf6', borderTop: '3px solid var(--foreground)' }}
                >
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center mb-3 shadow-sm"
                    style={{ 
                      width: '55px', 
                      height: '55px', 
                      backgroundColor: '#f4ede2', 
                      color: 'var(--foreground)',
                      fontSize: '1.5rem'
                    }}
                  >
                    {s.icon}
                  </div>
                  <h6 
                    className="fw-bold mb-0" 
                    style={{ color: 'var(--foreground)', fontSize: '0.85rem', lineHeight: '1.3' }}
                  >
                    {s.title}
                  </h6>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 1. CONSULENZA ONLINE & ALIMENTARE (Sfondo Avorio) */}
      <section className="py-5" style={{ backgroundColor: '#fcfaf6' }}>
        <Container className="py-3">
          <Row className="align-items-center g-5 gsap-service-row">
            <Col lg={6} className="gsap-srv-img">
              <Image 
                src="/images/anamnesi.webp" 
                alt="Consulenza Online e Alimentare" 
                className="img-fluid rounded-4 shadow-sm" 
                width={800} height={600}        
              />
            </Col>
            <Col lg={6} className="ps-lg-5 gsap-srv-text">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge rounded-pill px-3 py-2 fw-medium d-inline-flex align-items-center gap-2" style={{ backgroundColor: '#f4ede2', color: 'var(--foreground)', fontSize: '0.8rem' }}>
                  <FaClock /> Durata: 45-60 min
                </span>
                <span className="badge rounded-pill px-3 py-2 fw-medium d-inline-flex align-items-center gap-2" style={{ backgroundColor: '#f4ede2', color: 'var(--foreground)', fontSize: '0.8rem' }}>
                  <FaLaptop /> Videochiamata dedicata
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-3" style={{ color: 'var(--foreground)' }}>Consulenze Online e Alimentari</h2>
              <p className="text-muted mb-0" style={{ textAlign: 'justify', lineHeight: '1.7', fontSize: '1.02rem' }}>
                La tua salute non deve fermarsi davanti alla distanza o alla mancanza di tempo. Attraverso le <strong>consulenze online</strong>, abbattiamo le barriere 
                geografiche portando lo studio direttamente a casa tua tramite piattaforme video sicure. Non si tratta solo di ricevere uno schema, ma di iniziare un 
                percorso di <strong>educazione alimentare</strong> continuo, dove risolveremo dubbi quotidiani e costruiremo insieme una gestione pratica e serena 
                dei tuoi pasti.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. VALUTAZIONE ANTROPOMETRICA E BIVA (Sfondo Verde Salvia a contrasto) */}
      <section className="py-5" style={{ backgroundColor: '#85937a' }}>
        <Container className="py-3">
          <Row className="align-items-center g-5 gsap-service-row">
            <Col lg={6} className="order-2 order-lg-1 gsap-srv-text">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge rounded-pill px-3 py-2 fw-medium d-inline-flex align-items-center gap-2" style={{ backgroundColor: '#f6ede0', color: 'var(--foreground)', fontSize: '0.8rem' }}>
                  <FaCheckCircle /> Tecnologia Medicale Certificata
                </span>
                <span className="badge rounded-pill px-3 py-2 fw-medium d-inline-flex align-items-center gap-2" style={{ backgroundColor: 'rgba(246, 237, 224, 0.2)', color: '#ffffff', fontSize: '0.8rem' }}>
                  Esame non invasivo
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-3 text-white">Analisi Bioimpedenziometrica BIVA-Akern</h2>
              <p className="mb-4" style={{ textAlign: 'justify', lineHeight: '1.7', fontSize: '1.02rem', color: '#f6ede0' }}>
                Andiamo oltre il semplice numero sulla bilancia. Grazie alla <strong>valutazione antropometrica</strong> e all’analisi <strong>BIVA con tecnologia Akern</strong>,
                scattiamo una fotografia precisa della tua composizione corporea. Questo esame non invasivo ci permette di distinguere tra perdita di grasso e perdita di liquidi,
                monitorando la tua reale <strong>massa muscolare</strong> e il tuo stato di idratazione per garantirti un dimagrimento qualitativo e duraturo.
              </p>
              <div className="d-flex flex-column gap-2">
                <div className="py-2 px-3 rounded-3" style={{ backgroundColor: 'rgba(252, 250, 246, 0.92)', color: 'var(--foreground)', fontSize: '0.95rem' }}>
                  <strong>Stato Idratativo:</strong> Monitoraggio preciso di ritenzione idrica o disidratazione.
                </div>
                <div className="py-2 px-3 rounded-3" style={{ backgroundColor: 'rgba(252, 250, 246, 0.92)', color: 'var(--foreground)', fontSize: '0.95rem' }}>
                  <strong>Massa Cellulare:</strong> Indice della reale massa muscolare e dello stato nutrizionale.
                </div>
                <div className="py-2 px-3 rounded-3" style={{ backgroundColor: 'rgba(252, 250, 246, 0.92)', color: 'var(--foreground)', fontSize: '0.95rem' }}>
                  <strong>Massa Grassa:</strong> Valutazione mirata del dimagrimento qualitativo.
                </div>
              </div>
            </Col>
            <Col lg={6} className="order-1 order-lg-2 gsap-srv-img">
              <Image 
                src="/images/bia.webp" 
                alt="Akern BIVA" 
                width={800} height={600}
                className="img-fluid rounded-4 shadow" 
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. PIANO NUTRIZIONALE PERSONALIZZATO (Sfondo Crema) */}
      <section className="py-5" style={{ backgroundColor: 'var(--background)' }}>
        <Container className="py-3">
          <Row className="align-items-center g-5 gsap-service-row">
            <Col lg={6} className="gsap-srv-img">
              <Image 
                src="/images/piano_alimentare-1.webp" 
                width={800} height={600}  
                alt="Piano Nutrizionale Personalizzato" 
                className="img-fluid rounded-4 shadow-sm" 
              />
            </Col>
            <Col lg={6} className="ps-lg-5 gsap-srv-text">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge rounded-pill px-3 py-2 fw-medium d-inline-flex align-items-center gap-2" style={{ backgroundColor: '#fcfaf6', color: 'var(--foreground)', fontSize: '0.8rem' }}>
                  <FaClock /> Consegna in 3-5 giorni lavorativi
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-3" style={{ color: 'var(--foreground)' }}>Piano Nutrizionale Personalizzato</h2>
              <p className="text-muted mb-0" style={{ textAlign: 'justify', lineHeight: '1.7', fontSize: '1.02rem' }}>
                Dimentica il concetto di &apos;dieta&apos; come sacrificio o privazione. Il tuo <strong>piano nutrizionale</strong> sarà un abito sartoriale: cucito sui tuoi ritmi di vita, 
                sui tuoi gusti e sulle tue necessità fisio-patologiche. L’obiettivo non è resistere a una restrizione temporanea, ma riscoprire il piacere di 
                mangiare bene attraverso una <strong>strategia sostenibile</strong> che diventi, giorno dopo giorno, il tuo nuovo e spontaneo stile di vita.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 4. SERVIZIO DOMICILIARE (Sfondo Avorio) */}
      <section className="py-5" style={{ backgroundColor: '#fcfaf6' }}>
        <Container className="py-3">
          <Row className="align-items-center g-5 gsap-service-row">
            <Col lg={6} className="order-2 order-lg-1 gsap-srv-text">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge rounded-pill px-3 py-2 fw-medium d-inline-flex align-items-center gap-2" style={{ backgroundColor: '#f4ede2', color: 'var(--foreground)', fontSize: '0.8rem' }}>
                  <FaHome /> Strumentazione portatile inclusa
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-3" style={{ color: 'var(--foreground)' }}>Servizio Domiciliare</h2>
              <p className="text-muted mb-0" style={{ textAlign: 'justify', lineHeight: '1.7', fontSize: '1.02rem' }}>
                Se il tempo o gli spostamenti sono un ostacolo, porto lo studio direttamente da te. La consulenza a domicilio è la soluzione ideale per chi cerca 
                la massima <strong>comodità e riservatezza</strong>, senza rinunciare alla qualità di un percorso professionale. Analizzerò le tue abitudini nel tuo ambiente quotidiano,
                trasformando la tua casa nel primo alleato del tuo benessere.
              </p>
            </Col>
            <Col lg={6} className="order-1 order-lg-2 gsap-srv-img">
              <Image 
                src="/images/domicilio.webp" 
                alt="Servizio Domiciliare" 
                width={800} height={600}
                className="img-fluid rounded-4 shadow-sm" 
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* 5. SEZIONE FAQ */}
      <section className="py-5 gsap-fade-section" style={{ backgroundColor: 'var(--background)' }}>
        <Container className="py-3" style={{ maxWidth: '850px' }}>
          <div className="text-center mb-5">
            <span className="text-uppercase d-block mb-2" style={{ letterSpacing: '0.18em', fontSize: '0.8rem', fontWeight: 600, color: '#525c4b' }}>
              Informazioni utili
            </span>
            <h2 className="display-6 fw-bold" style={{ color: 'var(--foreground)' }}>Domande Frequenti</h2>
          </div>

          <Accordion flush className="custom-faq-accordion shadow-sm rounded-4 overflow-hidden">
            {faqs.map((faq, idx) => (
              <Accordion.Item eventKey={String(idx)} key={idx} style={{ backgroundColor: '#fcfaf6', borderColor: 'rgba(27, 77, 62, 0.1)' }}>
                <Accordion.Header>
                  <span className="fw-semibold" style={{ color: 'var(--foreground)', fontSize: '1.05rem' }}>
                    {faq.domanda}
                  </span>
                </Accordion.Header>
                <Accordion.Body className="text-muted" style={{ lineHeight: '1.7', backgroundColor: '#fcfaf6' }}>
                  {faq.risposta}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* SEZIONE CTA FINALE */}
      <section className="py-5 text-center gsap-fade-section" style={{ backgroundColor: '#f4ede2', borderTop: '1px solid rgba(27, 77, 62, 0.08)' }}>
        <Container style={{ maxWidth: '700px' }}>
          <h2 className="display-6 fw-bold mb-3" style={{ color: 'var(--foreground)' }}>Pronta a iniziare il tuo percorso?</h2>
          <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
            Contattami per fissare il primo appuntamento o per avere maggiori informazioni sui servizi più adatti alle tue esigenze.
          </p>
          <Link href="https://wa.me/+393762278025" passHref legacyBehavior>
            <Button className="btn-custom rounded-pill px-5 py-3 fw-medium shadow-sm">
              Prenota una consulenza
            </Button>
          </Link>
        </Container>
      </section>

    </div>
  );
}
