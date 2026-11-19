import { Tag, ArrowUpRight, Sparkles } from 'lucide-react';
import { offers } from '../data/offers';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../config/restaurant';

export default function Offers({ onOpenCart }) {
  const { addItem } = useCart();
  const { showToast } = useToast();

  const handleOrder = (offer) => {
    offer.productIds.forEach((id) => {
      const product = getProductById(id);
      if (product) addItem(product);
    });
    showToast(`${offer.title} added to your cart`);
    onOpenCart();
  };

  return (
    <section className="offers section" id="offers">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-kicker"><Tag size={15} /> SPECIAL OFFERS</span>
            <h2>More flavour, <em>less spend.</em></h2>
          </div>
          <p>Grab a bundle of our favourites at a special price. Offers are samples for this demo and can be edited in one file.</p>
        </div>

        <div className="offers__grid">
          {offers.map((offer) => (
            <article className="offer-card" key={offer.id}>
              <div className="offer-card__image">
                <img src={offer.image} alt={offer.title} loading="lazy" />
                <span className="offer-card__tag"><Sparkles size={13} /> {offer.tag}</span>
              </div>
              <div className="offer-card__body">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <div className="offer-card__price">
                  <strong>{formatPrice(offer.price)}</strong>
                  <s>{formatPrice(offer.originalPrice)}</s>
                </div>
                <button type="button" className="btn btn--primary btn--small btn--block" onClick={() => handleOrder(offer)}>
                  Order This Offer <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
