import 'bootstrap/dist/css/bootstrap.min.css';
import { Playfair_Display, Lora } from 'next/font/google';
import './globals.css';
import TopNavBar from '../components/TopNavbar'; // Assicurati che il percorso sia corretto
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AOSinit from '@/components/AOSinit';


// 1. Configurazione dei font
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-titles', 
});

const lora = Lora({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
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
    <html lang="it" className={`${playfair.variable} ${lora.variable}`}>
      <body>

				<AOSinit />

				{/*Nav Bar*/}
        <TopNavBar />

				{/*contenuto della pagina specifica*/}
        <main>{children}</main>

				<Footer />
      </body>
    </html>
  );
}