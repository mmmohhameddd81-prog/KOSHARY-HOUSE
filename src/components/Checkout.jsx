import { useEffect, useMemo, useState } from 'react';
import { X, ArrowLeft, LockKeyhole, MessageCircle, CheckCircle2, ClipboardList, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatPrice, restaurantConfig } from '../config/restaurant';
import { buildWhatsappMessage, buildWhatsappUrl, validateEgyptianPhone } from '../utils/order';

const initialForm = { fullName: '', phone: '', address: '', area: '', notes: '' };

export default function Checkout({ open, onClose }) {
  const { items, itemCount, subtotal, deliveryFee, total } = useCart();
  const { showToast } = useToast();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [handoffDone, setHandoffDone] = useState(false);

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

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setHandoffDone(false);
  };

  const normalizedPhone = useMemo(() => validateEgyptianPhone(form.phone), [form.phone]);

  const messagePreview = useMemo(() => {
    if (items.length === 0) return '';
    return buildWhatsappMessage({
      customer: { ...form, phone: normalizedPhone || form.phone },
      items, subtotal, deliveryFee, total,
    });
  }, [form, normalizedPhone, items, subtotal, deliveryFee, total]);

  if (!open) return null;

  const validate = () => {
    const next = {};
    if (form.fullName.trim().length < 2) next.fullName = 'Please enter your full name.';
    if (!validateEgyptianPhone(form.phone)) next.phone = 'Enter a valid Egyptian mobile number, e.g. 01XXXXXXXXX.';
    if (form.address.trim().length < 5) next.address = 'Please enter your full delivery address.';
    if (form.area.trim().length < 2) next.area = 'Please enter your area / district.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const sendToWhatsapp = () => {
    const message = buildWhatsappMessage({
      customer: { ...form, phone: normalizedPhone },
      items, subtotal, deliveryFee, total,
    });
    const url = buildWhatsappUrl(message);

    setHandoffDone(true);
    try {
      const popup = window.open(url, '_blank', 'noopener,noreferrer');
      if (!popup) window.location.assign(url);
      showToast('WhatsApp opened with your order — press Send there to finish.', 'success');
    } catch {
      try { window.location.assign(url); } catch { /* navigation blocked */ }
      showToast('Please allow pop-ups and try again.', 'error');
    }
    // Intentionally do NOT clear the cart until the customer sends in WhatsApp.
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handoffDone) return;
    if (items.length === 0) {
      showToast('Your cart is empty — add items before checking out.', 'error');
      return;
    }
    if (!validate()) {
      showToast('Please check the highlighted fields.', 'error');
      return;
    }
    sendToWhatsapp();
  };

  return (
    <div className="drawer-layer drawer-layer--checkout" role="presentation">
      <button className="drawer-backdrop" aria-label="Close checkout" onClick={onClose} />
      <div className="checkout-modal" role="dialog" aria-modal="true" aria-label="Checkout">
        <header className="checkout-modal__header">
          <button type="button" className="icon-button" onClick={onClose} aria-label="Back to cart"><ArrowLeft size={21} /></button>
          <div>
            <span className="section-kicker">ALMOST THERE</span>
            <h2>Checkout</h2>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close checkout"><X size={21} /></button>
        </header>

        {items.length === 0 ? (
          <div className="checkout-modal__empty">
            <div className="empty-state">
              <span className="empty-state__icon"><ClipboardList size={30} /></span>
              <h3>Nothing to check out yet</h3>
              <p>Add your favourite dishes to the cart, then come back to place your order.</p>
              <button type="button" className="btn btn--primary btn--small" onClick={() => { onClose(); document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Browse the menu
              </button>
            </div>
          </div>
        ) : (
          <div className="checkout-modal__grid">
            <form className="checkout-form" onSubmit={handleSubmit} noValidate>
              <div className="checkout-form__intro">
                <h3>Delivery details</h3>
                <p>We’ll use these details to prepare your WhatsApp order message.</p>
              </div>

              <div className="field">
                <label htmlFor="fullName">Full Name <span>*</span></label>
                <input id="fullName" type="text" autoComplete="name" placeholder="e.g. Ahmed Mohamed"
                  value={form.fullName} onChange={(e) => updateField('fullName', e.target.value)}
                  aria-invalid={!!errors.fullName} />
                {errors.fullName && <small className="field__error">{errors.fullName}</small>}
              </div>

              <div className="field">
                <label htmlFor="phone">Phone Number <span>*</span></label>
                <input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="01XXXXXXXXX"
                  value={form.phone} onChange={(e) => updateField('phone', e.target.value)}
                  aria-invalid={!!errors.phone} />
                {errors.phone ? <small className="field__error">{errors.phone}</small> : (
                  normalizedPhone && <small className="field__hint">✓ Will be sent as +{normalizedPhone}</small>
                )}
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="address">Delivery Address <span>*</span></label>
                  <input id="address" type="text" autoComplete="street-address" placeholder="Street, building, floor"
                    value={form.address} onChange={(e) => updateField('address', e.target.value)}
                    aria-invalid={!!errors.address} />
                  {errors.address && <small className="field__error">{errors.address}</small>}
                </div>
                <div className="field">
                  <label htmlFor="area">Area / District <span>*</span></label>
                  <input id="area" type="text" placeholder="e.g. Nasr City"
                    value={form.area} onChange={(e) => updateField('area', e.target.value)}
                    aria-invalid={!!errors.area} />
                  {errors.area && <small className="field__error">{errors.area}</small>}
                </div>
              </div>

              <div className="field">
                <label htmlFor="notes">Additional Notes <span className="field__optional">(optional)</span></label>
                <textarea id="notes" rows="3" placeholder="Any allergies, preferences or delivery instructions..."
                  value={form.notes} onChange={(e) => updateField('notes', e.target.value)} />
              </div>

              <div className="checkout-notice">
                <MessageCircle size={19} />
                <p><strong>WhatsApp will open with your order ready to send.</strong> After confirming, you’ll be taken to WhatsApp with the full Arabic order message. Please press <strong>Send</strong> there to complete your order. Your cart stays intact until you do.</p>
              </div>

              {messagePreview && (
                <details className="message-preview">
                  <summary>Preview the WhatsApp message (Arabic)</summary>
                  <pre dir="rtl">{messagePreview}</pre>
                </details>
              )}

              <button type="submit" className="btn btn--primary btn--block checkout-form__submit" disabled={handoffDone}>
                <MessageCircle size={18} />
                {handoffDone ? 'Order Ready in WhatsApp' : 'Confirm Order & Open WhatsApp'}
              </button>
              {handoffDone && (
                <p className="checkout-form__handoff"><CheckCircle2 size={16} /> Message prepared. Didn’t send it? <button type="button" onClick={sendToWhatsapp}>Reopen WhatsApp</button></p>
              )}
              <p className="checkout-form__secure"><LockKeyhole size={13} /> No payment is taken here — you confirm directly with the restaurant.</p>
            </form>

            <aside className="order-summary">
              <h3>Order Summary</h3>
              <div className="order-summary__items">
                {items.map((item) => (
                  <div className="summary-item" key={item.id}>
                    <img src={item.image} alt="" loading="lazy" />
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.quantity} × {formatPrice(item.price)}</span>
                    </div>
                    <b>{formatPrice(item.price * item.quantity)}</b>
                  </div>
                ))}
              </div>
              <div className="totals totals--summary">
                <div><span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span><strong>{formatPrice(subtotal)}</strong></div>
                <div><span>Delivery fee</span><strong>{formatPrice(deliveryFee)}</strong></div>
                <div className="totals__grand"><span>Amount due</span><strong>{formatPrice(total)}</strong></div>
              </div>
              <p className="order-summary__footer"><MapPin size={14} /> Orders are handed off to {restaurantConfig.name} via WhatsApp.</p>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
