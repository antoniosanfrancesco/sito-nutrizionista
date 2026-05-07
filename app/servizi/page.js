'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLaptop, FaWeight, FaChartBar, FaAppleAlt, FaComments } from 'react-icons/fa';
import Image from 'next/image';

export default function Servizi() {
  const greenColor = "#1b4d3e";

  const serviziRapidi = [
    { icon: <FaLaptop />, title: "Consulenza Online" },
    { icon: <FaWeight />, title: "Valutazione Antropometrica" },
    { icon: <FaChartBar />, title: "BIVA - Akern" },
    { icon: <FaAppleAlt />, title: "Piano Nutrizionale" },
    { icon: <FaComments />, title: "Consulenze Alimentari" },
  ];

  return (
    <div className="bg-white" style={{ paddingTop: '100px', overflowX: 'hidden' }}>
      
      {/* HEADER DELLA PAGINA */}
      <section className="py-5">
        <Container className="text-center">
          <h1 
            className="font-bodoni mb-4" 
            style={{ color: greenColor, fontSize: '3rem' }}
            data-aos="fade-down"
          >
            Servizi Nutrizionali
          </h1>
          <p 
            className="text-muted mx-auto" 
            style={{ maxWidth: '700px' }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Percorsi personalizzati basati su evidenze scientifiche e tecnologie d&apos;avanguardia per il raggiungimento del tuo benessere ottimale.
          </p>
          
          {/* GRIGLIA RAPIDA (Icone con effetto a pioggia) */}
          <Row className="justify-content-center mt-5 g-4">
            {serviziRapidi.map((s, i) => (
              <Col 
                key={i} 
                xs={6} md={4} lg={2}
                data-aos="zoom-in"
                data-aos-delay={300 + (i * 100)} // Inizia dopo il sottotitolo e prosegue in sequenza
              >
                <div className="text-center h-100 p-2 transition-transform">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center mb-3 shadow-sm"
                    style={{ 
                      width: '70px', 
                      height: '70px', 
                      backgroundColor: '#ffffff', 
                      margin: '0 auto',
                      border: `1px solid rgba(27, 77, 62, 0.1)` 
                    }}
                  >
                    <div style={{ color: greenColor, fontSize: '1.8rem' }}>
                      {s.icon}
                    </div>
                  </div>
                  <h6 
                    className="fw-bold mt-2" 
                    style={{ color: greenColor, fontSize: '0.9rem', lineHeight: '1.2', letterSpacing: '0.5px' }}
                  >
                    {s.title}
                  </h6>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Container className="py-5">
        
        {/* 1. CONSULENZA ONLINE & ALIMENTARE */}
        <Row className="align-items-center mb-5 g-5">
          <Col lg={6} data-aos="fade-right">
            <Image 
              src="/images/anamnesi.jpg" 
              alt="Consulenza Online e Alimentare" 
              className="img-fluid rounded-4 shadow-sm" 
              width={800} height={600}        
            />
          </Col>
          <Col lg={6} className="ps-lg-5" data-aos="fade-left">
            <h2 className="font-bodoni mb-3" style={{ color: greenColor }}>Consulenze Online e Alimentari</h2>
            <p style={{ textAlign: 'justify', lineHeight: '1.7' }}>
              La tua salute non deve fermarsi davanti alla distanza o alla mancanza di tempo. Attraverso le <strong>consulenze online</strong>, abbattiamo le barriere 
              geografiche portando lo studio direttamente a casa tua tramite piattaforme video sicure. Non si tratta solo di ricevere uno schema, ma di iniziare un 
              percorso di <strong>educazione alimentare</strong> continuo, dove risolveremo dubbi quotidiani e costruiremo insieme una gestione pratica e serena 
              dei tuoi pasti.
            </p>
          </Col>
        </Row>

        {/* 2. VALUTAZIONE ANTROPOMETRICA E BIVA (Invertita) */}
        <Row className="align-items-center mb-5 g-5 p-2 p-md-5">
          <Col lg={6} className="order-2 order-lg-1" data-aos="fade-right">
            <h2 className="font-bodoni mb-3" style={{ color: greenColor }}>Analisi Bioimpedenziometrica BIVA-Akern</h2>
            <p style={{ textAlign: 'justify', lineHeight: '1.7' }}>
              Andiamo oltre il semplice numero sulla bilancia. Grazie alla <strong>valutazione antropometrica</strong> e all’analisi <strong>BIVA con tecnologia Akern</strong>,
               scattiamo una fotografia precisa della tua composizione corporea. Questo esame non invasivo ci permette di distinguere tra perdita di grasso e perdita di liquidi,
                monitorando la tua reale <strong>massa muscolare</strong> e il tuo stato di idratazione per garantirti un dimagrimento qualitativo e duraturo.
            </p>
            <ul className="list-unstyled mt-3">
              <li className="mb-2" data-aos="fade-up" data-aos-delay="400">✅ <strong>Stato Idratativo:</strong> Ritenzione idrica o disidratazione.</li>
              <li className="mb-2" data-aos="fade-up" data-aos-delay="500">✅ <strong>Massa Cellulare:</strong> Indice della reale massa muscolare e nutrizione.</li>
              <li className="mb-2" data-aos="fade-up" data-aos-delay="600">✅ <strong>Massa Grassa:</strong> Monitoraggio del reale dimagrimento qualitativo.</li>
            </ul>
          </Col>
          <Col lg={6} className="order-1 order-lg-2" data-aos="fade-left">
            <Image 
              src="/images/bia.jpg" 
              alt="Akern BIVA" 
              width={800} height={600}
              className="img-fluid rounded-4 shadow-sm" 
            />
          </Col>
        </Row>

        {/* 3. PIANO NUTRIZIONALE PERSONALIZZATO */}
        <Row className="align-items-center g-5">
          <Col lg={6} data-aos="fade-right">
            <Image 
              src="/images/piano_alimentare-1.jpg" 
              width={800} height={600}  
              alt="Piano Nutrizionale Personalizzato" 
              className="img-fluid rounded-4 shadow-sm" 
            />
          </Col>
          <Col lg={6} className="ps-lg-5" data-aos="fade-left">
            <h2 className="font-bodoni mb-3" style={{ color: greenColor }}>Piano Nutrizionale Personalizzato</h2>
            <p style={{ textAlign: 'justify', lineHeight: '1.7' }}>
              Dimentica il concetto di &apos;dieta&apos; come sacrificio o privazione. Il tuo <strong>piano nutrizionale</strong> sarà un abito sartoriale: cucito sui tuoi ritmi di vita, 
              sui tuoi gusti e sulle tue necessità fisio-patologiche. L’obiettivo non è resistere a una restrizione temporanea, ma riscoprire il piacere di 
              mangiare bene attraverso una <strong>strategia sostenibile</strong> che diventi, giorno dopo giorno, il tuo nuovo e spontaneo stile di vita.
            </p>
          </Col>
        </Row>

				
				
				{/*Servizio Domiciliare*/}

				<Row className="align-items-center mb-5 g-5 p-2 p-md-5">
          <Col lg={6} className="order-2 order-lg-1" data-aos="fade-right">
            <h2 className="font-bodoni mb-3" style={{ color: greenColor }}>Servizio Domiciliare</h2>
            <p style={{ textAlign: 'justify', lineHeight: '1.7' }}>
              Se il tempo o gli spostamenti sono un ostacolo, porto lo studio direttamente da te. La consulenza a domicilio è la soluzione ideale per chi cerca 
							la massima <strong>comodità e riservatezza</strong>, senza rinunciare alla qualità di un percorso professionale. Analizzerò le tue abitudini nel tuo ambiente quotidiano,
							 trasformando la tua casa nel primo alleato del tuo benessere.
            </p>
          </Col>
          <Col lg={6} className="order-1 order-lg-2" data-aos="fade-left">
            <Image 
              src="/images/bia.jpg" 
              alt="Akern BIVA" 
              width={800} height={600}
              className="img-fluid rounded-4 shadow-sm" 
            />
          </Col>
        </Row>

      </Container>
    </div>
  );
}