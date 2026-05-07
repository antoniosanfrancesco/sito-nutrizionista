import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaMapMarkedAlt, FaDirections } from 'react-icons/fa';
import "../app/globals.css";

export default function Contatti() {
  const indirizzo = "Viale I Maggio II Traversa 9, Lamezia Terme 88046";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Dott.ssa Albina Crapella " + indirizzo)}`;
  const farmacia = "Corso Giovanni Nicotera, 174, 88046 Lamezia Terme CZ";
  const googleMapsUrlFarmacia = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Farmacia Di Cello Angelo " + farmacia)}`;

  const greenColor = "#1b4d3e"; 

  return (
    <section className='py-5' id="dove-ricevo" style={{ backgroundColor: '#fdfbf7', overflowX: 'hidden' }}>
      <Container>
        <h2 
          className='text-center mb-5 display-6' 
          style={{ fontFamily: 'var(--font-titles)', color: greenColor }}
          data-aos="fade-down"
        >
          DOVE RICEVO
        </h2>

        {/* PRIMO BLOCCO: STUDIO (Testo a Sinistra, Mappa a Destra) */}
        <Row className='align-items-center g-5 mb-5'>
          <Col lg={5} className='order-2 order-lg-1' data-aos="fade-right">
            <div className='d-flex align-items-start mb-3'>
              <FaMapMarkedAlt style={{ color: '#85937a' }} className='me-3 mt-1' size={20}/>
              <div>
                <h4 className='mb-2 fw-bold' style={{ color: '#85937a' }}>Studio Privato</h4>
                <p className='text-muted small mb-4'>{indirizzo}</p>
                <Button
                  href={googleMapsUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border-0 d-inline-flex align-items-center gap-2 py-2 px-4 shadow-sm'
                  style={{ backgroundColor: '#85937a', borderRadius: '50px', fontSize: '0.9rem' }}
                >
                  <FaDirections size={18}/>
                  Indicazioni Stradali
                </Button>
              </div>
            </div>
          </Col>

          <Col lg={7} className='order-1 order-lg-2' data-aos="fade-left">
            <div className='ratio ratio-21x9 shadow-sm rounded-4 overflow-hidden' style={{ minHeight: '250px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.862416443047!2d16.31810881248211!3d38.97280947158996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133fe5b009baac1d%3A0x60806a351f3fd607!2sDott.ssa%20Albina%20Crapella-%20Biologa%20Nutrizionista!5e0!3m2!1sit!2sit!4v1777036498466!5m2!1sit!2sit"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* SECONDO BLOCCO: FARMACIA (Mappa a Sinistra, Testo a Destra) */}
        <Row className='align-items-center g-5'>
          <Col lg={7} className='order-1' data-aos="fade-right">
            <div className='ratio ratio-21x9 shadow-sm rounded-4 overflow-hidden' style={{ minHeight: '250px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.0115802902974!2d16.316700876915192!3d38.969403571708646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133fe56b1a7af9ed%3A0x16ae358050ca4739!2sFarmacia%20Di%20Cello%20Angelo!5e0!3m2!1sit!2sit!4v1777894200830!5m2!1sit!2sit"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>

          <Col lg={5} className='order-2 ps-lg-5' data-aos="fade-left">
            <div className='d-flex align-items-start mb-3'>
              <FaMapMarkedAlt style={{ color: '#6a8d73' }} className='me-3 mt-1' size={20}/>
              <div>
                <h4 className='mb-2 fw-bold' style={{ color: '#85937a' }}>Farmacia Di Cello</h4>
                <p className='text-muted small mb-4'>{farmacia}</p>
                <Button
                  href={googleMapsUrlFarmacia}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border-0 d-inline-flex align-items-center gap-2 py-2 px-4 shadow-sm'
                  style={{ backgroundColor: '#85937a', borderRadius: '50px', fontSize: '0.9rem' }}
                >
                  <FaDirections size={18}/>
                  Indicazioni Stradali
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}