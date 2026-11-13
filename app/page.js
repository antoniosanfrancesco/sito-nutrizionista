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
			<div className="page-fade-in py-5" data-aos="fade-up">
				<Container>
					<Row className="align-items-center g-5" style={{ minHeight: '75vh' }}>

						{/* Immagine Hero Section con effetto cornice/passepartout */}
						<Col lg={6} className="d-flex justify-content-center">
							<div 
								style={{
									padding: '10px',
									border: '2px solid var(--foreground)',
									borderRadius: '235px 235px 0 0',
								}}
							>
								<Image 
									src="/images/hero.webp"
									alt="Dott.ssa Albina Crapella - Biologa Nutrizionista"
									width={430} 
									height={480}
									priority 
									className="img-fluid"
									style={{ 
										objectFit: 'cover',
										borderRadius: '225px 225px 0 0',
										display: 'block'
									}}
								/>
							</div>
						</Col>

						{/* Testo Hero Section */}
						<Col lg={6}>
							<div className="d-flex flex-column text-center text-lg-start ps-lg-3">
								
								{/* Occhiello / Qualifica */}
								<span 
									className="text-uppercase mb-2" 
									style={{ 
										letterSpacing: '0.15em', 
										fontSize: '0.85rem', 
										fontWeight: 600,
										color: '#525c4b' 
									}}
								>
									Biologa Nutrizionista
								</span>

								<h1 className="display-3 fw-bold mb-3" style={{ lineHeight: 1.1 }}>
									Dott.ssa <br/>Albina Crapella
								</h1>

								<p className="lead mb-4" style={{ maxWidth: '480px', color: '#2c3e35' }}>
									La nutrizione non è perfezione, ma ascolto: ti accompagno a trovare il tuo equilibrio, con rispetto, serenità e consapevolezza.
								</p>
								
								{/* Bottone CTA */}
								<div className="mb-5">
									<Button 
										className="btn-custom rounded-pill px-4 py-3 fw-medium shadow-sm" 
										href="https://wa.me/+393762278025"
									>
										Prenota una consulenza
									</Button>
								</div>
								
								{/* Sezione Social raffinata */}
								<div className="pt-3 border-top" style={{ borderColor: 'rgba(27, 77, 62, 0.15) !important', maxWidth: '480px' }}>
									<p 
										className="text-uppercase mb-2" 
										style={{ fontSize: '0.75rem', letterSpacing: '0.12em', fontWeight: 600, color: '#525c4b' }}
									>
										Seguimi anche su
									</p>
									<div className="d-flex justify-content-center justify-content-lg-start">
										<SocialLinks />
									</div>
								</div>

							</div>	
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