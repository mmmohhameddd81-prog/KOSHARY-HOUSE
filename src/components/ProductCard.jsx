import { Minus, Plus, Check } from 'lucide-react';
import { formatPrice } from '../config/restaurant';

export default function ProductCard({ product, quantity, onAdd, onDecrease }) {
  const inCart = quantity > 0;

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && (
          <span className={`product-badge ${product.badge === 'Best Seller' ? 'product-badge--gold' : ''}`}>
            {product.badge === 'Best Seller' ? '★ ' : ''}{product.badge}
          </span>
        )}
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card__footer">
          <span className="price">{formatPrice(product.price)}</span>
          {inCart ? (
            <div className="qty-control qty-control--card" aria-label={`Quantity for ${product.name}`}>
              <button type="button" onClick={() => onDecrease(product)} aria-label={`Decrease ${product.name}`}><Minus size={15} /></button>
              <span>{quantity}</span>
              <button type="button" onClick={() => onAdd(product)} aria-label={`Increase ${product.name}`}><Plus size={15} /></button>
            </div>
          ) : (
            <button type="button" className="add-btn" onClick={() => onAdd(product)} aria-label={`Add ${product.name} to cart`}>
              <Plus size={17} /> Add
            </button>
          )}
        </div>
      </div>
      {inCart && <span className="product-card__check" aria-hidden="true"><Check size={13} /> In cart</span>}
    </article>
  );
}
