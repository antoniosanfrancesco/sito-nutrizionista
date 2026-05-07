'use client';

import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

export default function TopNavBar() {
	return (
		<Navbar variant='light' expand="lg" className="shadow-sm sticky-top" style={{backgroundColor: '#f6ede0'}}>
			<Container fluid>
				<Navbar.Brand as={Link} href='/' className='brand-responsive fw-bold navbar-brand-a ps-3'>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-auto'/>

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className='ms-auto pr-3 pt-3 text-end' style={{fontFamily: 'Montserrat'}}>
						<Nav.Link as={Link} href="/">Home</Nav.Link>
						<Nav.Link as={Link} href="/chi-sono">Chi Sono</Nav.Link>
						<Nav.Link as={Link} href="/servizi">Servizi</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}