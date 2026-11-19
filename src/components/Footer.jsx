import { ChefHat, MessageCircle, Mail, ArrowUpRight, Globe, Camera } from 'lucide-react';
import { restaurantConfig, getWhatsappLink } from '../config/restaurant';

const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Offers', href: '#offers' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand brand--footer" href="#home" aria-label={`${restaurantConfig.name} home`}>
              <span className="brand__mark"><ChefHat size={22} strokeWidth={1.8} /></span>
              <span className="brand__text">
                <strong>{restaurantConfig.name.split(' ')[0]}</strong>
                <em>{restaurantConfig.name.split(' ').slice(1).join(' ')}</em>
              </span>
            </a>
            <p>{restaurantConfig.tagline}</p>
            <a href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--small">
              <MessageCircle size={17} /> Order via WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            {quickLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </div>

          <div className="footer__col">
            <h4>Follow Us</h4>
            <span className="footer__muted">Facebook</span>
            <span className="footer__muted">Instagram</span>
            <div className="footer__social-icons">
              <a href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a>
              <span aria-label="Facebook placeholder"><Globe size={17} /></span>
              <span aria-label="Instagram placeholder"><Camera size={17} /></span>
            </div>
          </div>

          <div className="footer__col footer__developer">
            <h4>Designed & Developed by</h4>
            <strong className="footer__dev-name">{restaurantConfig.developerName}</strong>
            <a href={getWhatsappLink(restaurantConfig.developerWhatsapp)} target="_blank" rel="noopener noreferrer" className="footer__dev-button">
              <MessageCircle size={16} /> Contact Developer <ArrowUpRight size={14} />
            </a>
            <a href={`mailto:${restaurantConfig.email}`} className="footer__email"><Mail size={15} /> {restaurantConfig.email}</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} {restaurantConfig.name}. All rights reserved.</p>
          <p>Crafted with care for lovers of Egyptian food.</p>
        </div>
      </div>
    </footer>
  );
}
