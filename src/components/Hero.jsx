import { ArrowDown, ArrowRight, BadgeCheck, Clock3, Sparkles, Star } from 'lucide-react';
import koshariImage from '../assets/images/koshari.jpg';
import { restaurantConfig } from '../config/restaurant';

export default function Hero({ onOpenCheckout }) {
  const scrollToMenu = () => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home">
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow-pill animate-in">
            <BadgeCheck size={15} /> Authentic Egyptian Cuisine
          </span>
          <h1 className="hero__title animate-in animate-in--d1">
            A Taste of Egypt <br />
            in <span className="hero__accent">Every Bite.</span>
          </h1>
          <p className="hero__text animate-in animate-in--d2">
            Discover the authentic flavors of Egyptian cuisine, freshly prepared with
            passion and served with love.
          </p>
          <div className="hero__buttons animate-in animate-in--d3">
            <button type="button" className="btn btn--primary" onClick={scrollToMenu}>
              Explore Our Menu <ArrowRight size={18} />
            </button>
            <button type="button" className="btn btn--outline" onClick={onOpenCheckout}>
              Order Now
            </button>
          </div>
          <div className="hero__proof animate-in animate-in--d4">
            <div className="hero__avatars" aria-hidden="true">
              <span>A</span><span>M</span><span>S</span><span>N</span>
            </div>
            <div>
              <div className="hero__stars"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
              <small>Loved by Egyptian food lovers</small>
            </div>
          </div>
        </div>

        <div className="hero__visual animate-in animate-in--d2">
          <div className="hero__frame">
            <img src={koshariImage} alt="A steaming bowl of authentic Egyptian koshari topped with crispy onions" fetchPriority="high" />
            <div className="hero__frame-shine" aria-hidden="true" />
          </div>
          <div className="hero__floating hero__floating--top">
            <Sparkles size={17} />
            <div><strong>Fresh Daily</strong><span>Made to order</span></div>
          </div>
          <div className="hero__floating hero__floating--bottom">
            <Clock3 size={17} />
            <div><strong>Fast Delivery</strong><span>Hot to your door</span></div>
          </div>
          <span className="hero__stamp" aria-hidden="true">★ EST. 2024 ★</span>
        </div>
      </div>

      <div className="container hero__bottom">
        <span className="hero__tagline">{restaurantConfig.tagline}</span>
        <button className="hero__scroll" type="button" onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Scroll to highlights">
          <ArrowDown size={18} />
        </button>
      </div>
    </section>
  );
}
