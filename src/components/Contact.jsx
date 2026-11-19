import { MapPin, Clock3, MessageCircle, Mail, Globe, Camera, Info } from 'lucide-react';
import { restaurantConfig, getWhatsappLink } from '../config/restaurant';

const whatsappUrl = getWhatsappLink();

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">GET IN TOUCH</span>
          <h2>We’re here to <em>serve you.</em></h2>
          <p>Questions, special requests, or ready to order? Reach out any time.</p>
        </div>

        <div className="contact__grid">
          <div className="contact__cards">
            <article className="contact-card">
              <span className="contact-card__icon"><MapPin size={22} /></span>
              <div><h3>Location</h3><p>{restaurantConfig.location}</p></div>
            </article>
            <article className="contact-card">
              <span className="contact-card__icon"><Clock3 size={22} /></span>
              <div><h3>Opening Hours</h3><p>{restaurantConfig.openingHours}</p></div>
            </article>
            <article className="contact-card">
              <span className="contact-card__icon"><Mail size={22} /></span>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${restaurantConfig.email}`} className="contact-card__link">{restaurantConfig.email}</a>
              </div>
            </article>
          </div>

          <div className="contact__cta">
            <span className="contact__cta-icon"><MessageCircle size={30} /></span>
            <h3>Order or ask us anything on WhatsApp</h3>
            <p>Fast replies, easy ordering, and your food on its way. Just tap the button below.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--block">
              <MessageCircle size={19} /> Chat With Us on WhatsApp
            </a>
            <div className="contact__socials">
              {restaurantConfig.socials.map((social) => (
                <span key={social.label} title={social.placeholder}>
                  {social.label === 'Facebook' ? <Globe size={17} /> : <Camera size={17} />}
                  {social.label}
                </span>
              ))}
            </div>
            <p className="contact__placeholder-note"><Info size={13} /> Social links are placeholders — add real accounts before launch.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
