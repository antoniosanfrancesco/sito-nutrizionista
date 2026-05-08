'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import ServiziHome from '../components/ServiziHome';
import DiCosaTratto from '../components/DiCosaTratto';
import SocialLinks from '../components/Social';
import Contatti from '../components/Posizione';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormArea from '@/components/Form';


export default function Home() {

  return (
    <main>

      {/* Hero Section */}
      <div className="page-fade-in bg-light py-5" data-aos="fade-up">
        <Container>
          <Row className="align-items-center" style={{ minHeight: '60vh' }}>
            <Col lg={6}>
              <h1 className="display-3 fw-bold">Dott.ssa <br/>Albina Crapella</h1>
              <p className="lead mb-4">La nutrizione non è perfezione, ma ascolto: ti accompagno a trovare il tuo equilibrio, con rispetto, serenità e consapevolezza</p>
              
							<div className='text-center text-lg-start'>
								<Button className="btn-custom mb-5 " href="https://wa.me/+393762278025" >Prenota ora</Button>
							</div>
							
							<p className='display-5 fw-bold'>Social</p>
							
							{/* Link per i social*/}
							<SocialLinks/>
							

            </Col>
            <Col lg={6} className="text-lg-end">
							<Image 
								src="/images/hero.jpeg"
								alt="Foto della Dottoressa"
								width={450} 
								height={450}
								priority 
								className="rounded-4 shadow-lg img-fluid rounded-5"
								style={{ objectFit: 'cover' }}
							/>
						</Col>
          </Row>
        </Container>
      </div>

			{/*Sezione DiCosaTratto*/}
			<section id='trattamenti'>
				<DiCosaTratto/>
			</section>

			<Contatti/>

      {/* Sezione Servizi */}
      <section id="servizi" className="py-5">
        <ServiziHome />
      </section>

			{/* Fom */}
			<FormArea/>
    </main>

  );
}