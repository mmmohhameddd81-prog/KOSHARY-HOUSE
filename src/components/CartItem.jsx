import { Minus, Plus, Trash2 } from 'lucide-react';
import { formatPrice } from '../config/restaurant';

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} loading="lazy" />
      <div className="cart-item__details">
        <h4>{item.name}</h4>
        <span className="cart-item__unit">{formatPrice(item.price)} / each</span>
        <div className="cart-item__row">
          <div className="qty-control">
            <button type="button" onClick={() => onDecrease(item)} aria-label={`Decrease ${item.name}`}><Minus size={14} /></button>
            <span>{item.quantity}</span>
            <button type="button" onClick={() => onIncrease(item)} aria-label={`Increase ${item.name}`}><Plus size={14} /></button>
          </div>
          <strong className="cart-item__subtotal">{formatPrice(item.price * item.quantity)}</strong>
        </div>
      </div>
      <button type="button" className="cart-item__remove" onClick={() => onRemove(item)} aria-label={`Remove ${item.name} from cart`}>
        <Trash2 size={16} />
      </button>
    </article>
  );
}
