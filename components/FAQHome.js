'use client';
import { useRef } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const faqsHome = [
  {
    domanda: "Serve una prescrizione medica per iniziare il percorso?",
    risposta: "Non è obbligatoria alcuna prescrizione medica per accedere alla consulenza nutrizionale. Tuttavia, se possiedi analisi del sangue recenti o referti medici specifici, è sempre utile portarli al primo appuntamento."
  },
  {
    domanda: "Il piano alimentare è rigido o prevede restrizioni severe?",
    risposta: "Assolutamente no. L'approccio si basa sull'educazione alimentare e sulla sostenibilità: il piano è un abito sartoriale cucito sui tuoi gusti, sui tuoi ritmi e sulle tue abitudini, senza sacrifici inutili o privazioni estreme."
  },
  {
    domanda: "Come si svolgono le consulenze online?",
    risposta: "Le consulenze online avvengono tramite una videochiamata dedicata in tutta comodità. Hanno la stessa efficacia e accuratezza di quelle in studio, con l'invio digitale dei materiali, delle guide e del piano nutrizionale personalizzato."
  },
  {
    domanda: "Gestisci anche intolleranze, allergie o patologie diagnosticate?",
    risposta: "Sì, mi occupo specificamente di nutrizione clinica e patologie accertate (come insulino-resistenza, tiroidite, colon irritabile, celiachia, allergie e intolleranze), strutturando regimi alimentari mirati e sicuri per la salute."
  }
];

export default function FAQHome() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Intestazione rallentata ed elegante (coerente con il Metodo)
    gsap.from('.gsap-faq-header', {
      y: 40,
      opacity: 0,
      duration: 1.4,
      stagger: 0.22,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.gsap-faq-header',
        start: 'top 85%',
      },
    });

    // 2. Animazione a comparsa dell'accordion
    gsap.from('.gsap-faq-accordion', {
      y: 35,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.gsap-faq-accordion',
        start: 'top 85%',
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className='py-5' style={{ backgroundColor: 'var(--background)' }}>
      <Container className='py-4' style={{ maxWidth: '850px' }}>
        
        {/* Intestazione Sezione */}
        <div className='text-center mb-5 gsap-faq-header'>
          <span 
            className='text-uppercase d-block mb-2' 
            style={{ letterSpacing: '0.18em', fontSize: '0.8rem', fontWeight: 600, color: '#525c4b' }}
          >
            Dubbi e risposte
          </span>
          <h2 className='display-6 fw-bold mb-3' style={{ fontFamily: 'var(--font-elegant, serif)', color: '#1b4d3e' }}>
            Domande Frequenti
          </h2>
          <p className='text-muted mb-0' style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
            Tutto quello che c&apos;è da sapere prima di iniziare il tuo percorso verso il benessere.
          </p>
        </div>

        {/* Accordion FAQ */}
        <Accordion flush className="custom-faq-accordion shadow-sm rounded-4 overflow-hidden gsap-faq-accordion">
          {faqsHome.map((faq, idx) => (
            <Accordion.Item eventKey={String(idx)} key={idx} style={{ backgroundColor: '#fcfaf6', borderColor: 'rgba(27, 77, 62, 0.1)' }}>
              <Accordion.Header>
                <span className="fw-semibold" style={{ color: '#1b4d3e', fontSize: '1.05rem' }}>
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
  );
}
