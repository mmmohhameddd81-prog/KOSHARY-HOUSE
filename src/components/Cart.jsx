import { useEffect } from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatPrice, restaurantConfig } from '../config/restaurant';
import CartItem from './CartItem';

export default function Cart({ open, onClose, onOpenCheckout }) {
  const { items, itemCount, subtotal, deliveryFee, total, updateQuantity, removeItem, clearCart } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="drawer-layer" role="presentation">
      <button className="drawer-backdrop" aria-label="Close cart" onClick={onClose} />
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping cart">
        <header className="cart-drawer__header">
          <div>
            <span className="section-kicker">YOUR BASKET</span>
            <h2>Shopping Cart <span>({itemCount})</span></h2>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close cart"><X size={22} /></button>
        </header>

        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <div className="empty-state">
              <span className="empty-state__icon"><ShoppingBag size={32} /></span>
              <h3>Your cart is empty</h3>
              <p>Good food is just a few clicks away. Explore our menu and add something delicious.</p>
              <button type="button" className="btn btn--primary btn--small" onClick={() => { onClose(); document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Browse the menu <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="cart-drawer__body">
              <div className="cart-drawer__toolbar">
                <span>{items.length} {items.length === 1 ? 'item' : 'items'} in your basket</span>
                <button type="button" className="text-button" onClick={() => { clearCart(); showToast('Cart cleared', 'info'); }}>
                  <Trash2 size={14} /> Clear cart
                </button>
              </div>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={(i) => updateQuantity(i.id, i.quantity + 1)}
                  onDecrease={(i) => updateQuantity(i.id, i.quantity - 1)}
                  onRemove={(i) => { removeItem(i.id); showToast(`${i.name} removed`, 'info'); }}
                />
              ))}
            </div>

            <footer className="cart-drawer__footer">
              <div className="totals">
                <div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
                <div><span>Delivery fee</span><strong>{formatPrice(deliveryFee)}</strong></div>
                <div className="totals__grand"><span>Total</span><strong>{formatPrice(total)}</strong></div>
              </div>
              <button type="button" className="btn btn--primary btn--block" onClick={onOpenCheckout}>
                Proceed to Checkout <ArrowRight size={18} />
              </button>
              <p className="cart-drawer__note"><ShieldCheck size={14} /> Secure WhatsApp checkout · <Truck size={14} /> {restaurantConfig.currency} {restaurantConfig.deliveryFee} delivery</p>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
