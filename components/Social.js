'use-client';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function SocialLinks({ colorClass = "text-dark", size = 24 }) {
  const socials = [
    { id: 1, icon: <FaInstagram />, link: "https://www.instagram.com/nutrizionista_albinacrapella_/", color: "hover-insta" },
    { id: 2, icon: <FaWhatsapp />, link: "https://wa.me/+393762278025", color: "hover-wa" },
		{ id: 3, icon: <FaFacebook />, link: "https://www.facebook.com/61561351389963/about/", color: "hover-fa" }
  ];

  return (
    <div className="d-flex gap-3 justify-content-start ml-2 mb-5" data-aos="fade-up">
      {socials.map((social) => (
        <a 
          key={social.id} 
          href={social.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${colorClass} ${social.color} transition-all`}
          style={{ fontSize: size }}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
