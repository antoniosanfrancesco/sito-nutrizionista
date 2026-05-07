'use client'; 

import { Container, Row, Col, Image } from 'react-bootstrap';

export default function ChiSono () {
  return (
    <section id='chi-sono' className='py-5 bg-white' style={{ backgroundColor: 'transparent', overflowX: 'hidden' }}>
      <Container>
        <Row className='align-items-center'>
        
          {/* Colonna testo: entra da Sinistra */}
          <Col lg={6} className='mx-auto mb-4' data-aos="fade-right" data-aos-duration="1200"> 
            <h2 className='mb-4' style={{ fontSize: '2.8rem', color: '#1b4d3e', fontFamily: 'var(--font-titles)' }}>
              Benvenuti,
            </h2>
            
              <div style={{ 
                textAlign: 'justify', 
                lineHeight: '1.8', 
                color: '#444',
                hyphens: 'auto' 
                }}>
              <p className='mb-4'>
                Mi chiamo <strong>Albina Crapella</strong>, sono una Biologa Nutrizionista, laureata in Scienze della Nutrizione Umana e Specializzanda in Nutrizione Clinica presso l&apos;Università &quot;Magna Graecia&quot; di Catanzaro. 
                Dopo il percorso magistrale, ho sostenuto l’Esame di Stato e sono iscritta all’Ordine dei Biologi della Calabria (Cal_A2726).
              </p>

              <p className='mb-4'>
                Nella mia formazione mi sono specializzata nella <strong>nutrizione umana e pediatrica</strong>, seguendo con passione le fasi dallo svezzamento alla pubertà, con particolare attenzione alla gestione del sovrappeso e dell&apos;obesità nelle fasce pre-adolescenziali. 
                Sono costantemente alla ricerca di nuovi cibi e ricette adattabili alle esigenze di tutti, con un interesse specifico per le diete vegetariane e vegane.
              </p>

              <p className='mb-4'>
                Esercito come libera professionista offrendo consulenze personalizzate basate su composizione corporea ed educazione alimentare. 
                Il mio approccio mette al centro <strong>gentilezza, comprensione e fiducia</strong>: empatia ed ascolto sono per me elementi essenziali.
              </p>

              <p className='mb-0'>
                Non considero il piano nutrizionale come una privazione, ma come una piacevole riscoperta della sana nutrizione. 
                Il rispetto e l’amore per se stessi sono valori inestimabili che guidano verso un’alimentazione consapevole.
              </p>
            </div>
          </Col>

          {/* Colonna Immagine: entra da Destra */}
          <Col lg={6} className="text-lg-end" data-aos="fade-left" data-aos-duration="1200">
            <Image 
              src="/images/hero.jpeg" 
              alt="Dott.ssa Albina Crapella"
              width={450} 
              height={450}
              className="rounded-5 shadow-lg img-fluid"
              style={{ objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );  
}