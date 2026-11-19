import { restaurantConfig, formatPrice } from '../config/restaurant';

/**
 * Validate and normalise an Egyptian phone number.
 * Accepts: 01XXXXXXXXX, +20XXXXXXXXXX, 20XXXXXXXXXX, 0020XXXXXXXXXX
 * Returns the international digits (e.g. 201XXXXXXXXX) or null.
 */
export function validateEgyptianPhone(input) {
  const raw = String(input || '').trim();
  if (!raw) return null;

  let digits = raw.replace(/\D/g, '');
  if (digits.startsWith('0020')) digits = digits.slice(2);
  else if (digits.startsWith('00')) digits = digits.slice(2);

  // Local mobile format: 01[0,1,2,5]xxxxxxxx
  if (/^01[0125]\d{8}$/.test(digits)) return `20${digits.slice(1)}`;
  // Already international: 20[0-9]{9}
  if (/^20\d{9}$/.test(digits)) return digits;

  return null;
}

/** Build the professionally formatted Arabic WhatsApp order message. */
export function buildWhatsappMessage({ customer, items, subtotal, deliveryFee, total }) {
  const lines = items
    .map((item, index) =>
      `${index + 1}. ${item.name}\n` +
      `   الكمية: ${item.quantity}\n` +
      `   سعر الوحدة: ${formatPrice(item.price)}\n` +
      `   الإجمالي: ${formatPrice(item.price * item.quantity)}`
    )
    .join('\n\n');

  return [
    `🐪 ${restaurantConfig.name} 🐪`,
    `اسم المطعم: ${restaurantConfig.name}`,
    'طعم مصر الأصيل ❤️',
    '',
    '📦 طلب جديد 🆕',
    '',
    '👤 بيانات العميل:',
    `• الاسم: ${customer.fullName.trim()}`,
    `• رقم الهاتف: ${customer.phone.trim()}`,
    `• عنوان التوصيل: ${customer.address.trim()}`,
    `• المنطقة: ${customer.area.trim()}`,
    '',
    '🍽️ تفاصيل الطلب:',
    lines,
    '',
    '🧾 ملخص الحساب:',
    `• إجمالي المنتجات: ${formatPrice(subtotal)}`,
    `• تكلفة التوصيل: ${formatPrice(deliveryFee)}`,
    `• الإجمالي النهائي: ${formatPrice(total)}`,
    '',
    '📝 ملاحظات إضافية:',
    customer.notes?.trim() ? customer.notes.trim() : 'لا توجد ملاحظات',
    '',
    'شكراً لاختياركم KOSHARY HOUSE 🌿',
  ].join('\n');
}

/** Build the final wa.me URL with an encoded Arabic message. */
export function buildWhatsappUrl(message) {
  return `https://wa.me/${restaurantConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
