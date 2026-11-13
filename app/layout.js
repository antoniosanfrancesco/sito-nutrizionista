import 'bootstrap/dist/css/bootstrap.min.css';
import { Fraunces,  Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import TopNavBar from '../components/TopNavbar'; // Assicurati che il percorso sia corretto
import Footer from '@/components/Footer';


// 1. Configurazione dei font
const fraunces = Fraunces({ 
  subsets: ['latin'],
  weight: ['500','600', '700'],
  variable: '--font-fraunces',
	display: 'swap' 
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jakarta',
});

// 2. I tuoi Metadata (lasciali come sono)
export const metadata = {
  title: 'Dott.ssa Albina Crapella | Biologa Nutrizionista',
  description: 'Consulenze nutrizionali personalizzate per ritrovare il tuo equilibrio e benessere',
	icons: {
    icon: '/icona-nutrizionista.png',
  },
};

// 3. Il Layout aggiornato
export default function RootLayout({ children }) {


  return (
    // Aggiungiamo le variabili dei font qui nella classe di <html>
    <html lang="it" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body>

				{/*Nav Bar*/}
        <TopNavBar />

				{/*contenuto della pagina specifica*/}
        <main>{children}</main>

				<Footer />
      </body>
    </html>
  );
}