'use client'; 

import { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ChiSono () {
  const containerRef = useRef(null);
  const greenColor = "#1b4d3e";

  useGSAP(() => {
    // 1. Animazione del testo da sinistra
    gsap.from('.gsap-about-text', {
      x: -40,
      opacity: 0,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });

    // 2. Animazione della foto e del box decorativo da destra
    gsap.from('.gsap-about-img', {
      x: 40,
      opacity: 0,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });
  }, { scope: containerRef });

  return (
    <section id='chi-sono' ref={containerRef} className='py-5 bg-white' style={{ overflowX: 'hidden' }}>
      <Container className="py-4">
        <Row className='align-items-center g-5'>
        
          {/* Colonna testo */}
          <Col lg={6} className="gsap-about-text"> 
            <span 
              className='text-uppercase d-block mb-2' 
              style={{ letterSpacing: '0.18em', fontSize: '0.8rem', fontWeight: 600, color: '#525c4b' }}
            >
              Il profilo professionale
            </span>
            
            <h2 className='mb-4 fw-bold' style={{ fontSize: '2.8rem', color: greenColor, fontFamily: 'var(--font-elegant, serif)' }}>
              Benvenuti,
            </h2>
            
            <div style={{ 
              textAlign: 'justify', 
              lineHeight: '1.8', 
              color: '#4a4a4a',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.02rem',
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

          {/* Colonna Immagine con box decorativo d'ispirazione editoriale */}
          <Col lg={6} className="text-center text-lg-end gsap-about-img">
            <div className="position-relative d-inline-block p-3">
              {/* Cornice di sfondo decorativa in stile editoriale */}
              <div 
                className="position-absolute rounded-5 d-none d-md-block" 
                style={{ 
                  top: '0px', 
                  left: '0px', 
                  right: '20px', 
                  bottom: '20px', 
                  backgroundColor: '#f6ede0', 
                  zIndex: 0,
                  opacity: 0.7
                }}
              ></div>
              
              <Image 
                src="/images/hero.webp" 
                alt="Dott.ssa Albina Crapella - Biologa Nutrizionista"
                width={480} 
                height={520}
                className="rounded-5 shadow-lg img-fluid position-relative"
                style={{ objectFit: 'cover', zIndex: 1, maxWidth: '100%', height: 'auto' }}
                priority
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );  
}
