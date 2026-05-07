'use client'; // Corretto il refuso 'use-client' in 'use client'
import { Container, Row, Col, Card } from 'react-bootstrap';

const trattamenti = [
  {
    titolo: "Dimagrimento",
    descrizione: ["Sovrappeso e Obesità", "Ricomposizione Corporea", "Dieta Chetogenica", "Dieta Low Carb", "Alimentazione Vegana"]
  },
  {
    titolo: "Patologie",
    descrizione: ["Ipercolesterolemia", "Ipertrigliceridemia", "Diabete tipo 1 e 2", "Insulino-resistenza", "Ipertensione", "Disturbi Gastrointestinali", "IBS", "Allergie e Intolleranze Alimentari", "Malattie Oncologiche"]
  }, 
  {
    titolo: "Malattie Autoimmuni",
    descrizione: ["Celiachia", "Ipotiroidismo, Tirodite di Hashimoto", "Ipertiroidismo", "Patologie Autoimmuni"]
  }, 
  {
    titolo: "Nutrizione Pediatrica",
    descrizione: ["Svezzamento e Alimentazione del Bambino", "Alimentazione per Ragazzi e Adolescenti", "Educazione Alimentare in Età Evolutiva", "Percorsi Nutrizionali per Famiglie", "Selettività Alimentare", "Consulenza per Genitori"]
  }, 
  {
    titolo: "Nutrizione al Femminile",
    descrizione: ["Squilibri Ormonali", "Gravidanze e Allattamento", "Menopausa", "PCOS"]
  }
];

export default function Trattamenti() {
  return (
    <section className='py-5' style={{backgroundColor: '#85937a'}}>
      <Container>
        <div 
          className='text-center mb-5' 
          data-aos="fade-down" // Il titolo scende dall'alto
        >
          <h2 className='fw-bold text-white display-7'>DI COSA MI OCCUPO</h2>
        </div>

        <Row className='g-4'>
          {trattamenti.map((item, index) => (
            <Col 
              key={index} 
              lg={4} md={6} sm={12}
              data-aos="fade-up" // Le card salgono dal basso
              data-aos-delay={index * 100} // Effetto cascata: ogni card ritarda di 100ms rispetto alla precedente
            >
              <Card className='h-100 border-0 shadow-sm hover-shadow rounded-5'>
                <Card.Body className='p-4'>
                  <Card.Title className='fw-bold text-dark mb-4 fs-5 border-bottom pb-2'>
                    {item.titolo}
                  </Card.Title>

                  <ul className='list-unstyled mb-0 ps-0'>
                    {item.descrizione.map((elemento, i) => (
                      <li key={i} className='d-flex align-items-start mb-3 text-secondary'>
                        <span className='text-dark me-2' style={{fontSize: '1.2rem', lineHeight: '1'}}>•</span>
                        <span className="card-text" style={{fontSize: '0.95rem', fontWeight:'400'}}>{elemento}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}