import { useEffect, useState } from 'react';
import { Menu as MenuIcon, X, ShoppingBag, ArrowUpRight, ChefHat } from 'lucide-react';
import { restaurantConfig } from '../config/restaurant';
import { useCart } from '../context/CartContext';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Offers', href: '#offers' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenCart, onOpenCheckout }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (href) => {
    setActive(href);
    setMobileOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a className="brand" href="#home" onClick={() => handleNav('#home')} aria-label={`${restaurantConfig.name} home`}>
          <span className="brand__mark"><ChefHat size={22} strokeWidth={1.8} /></span>
          <span className="brand__text">
            <strong>{restaurantConfig.name.split(' ')[0]}</strong>
            <em>{restaurantConfig.name.split(' ').slice(1).join(' ')}</em>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNav(link.href)}
              className={`nav-link ${active === link.href ? 'nav-link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="cart-trigger"
            onClick={onOpenCart}
            aria-label={`Open shopping cart, ${itemCount} items`}
          >
            <ShoppingBag size={20} strokeWidth={1.9} />
            <span className="cart-trigger__count">{itemCount}</span>
          </button>
          <button type="button" className="btn btn--primary btn--small navbar__order" onClick={onOpenCheckout}>
            Order Now <ArrowUpRight size={16} />
          </button>
          <button
            type="button"
            className="hamburger"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${mobileOpen ? 'mobile-nav--open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              style={{ '--i': index }}
              onClick={() => handleNav(link.href)}
              className={active === link.href ? 'mobile-nav__active' : ''}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="btn btn--primary mobile-nav__order"
          onClick={() => { setMobileOpen(false); onOpenCheckout(); }}
        >
          Order Now <ArrowUpRight size={17} />
        </button>
      </div>
      {mobileOpen && <button className="mobile-nav__backdrop" aria-label="Close menu" onClick={() => setMobileOpen(false)} />}
    </header>
  );
}
