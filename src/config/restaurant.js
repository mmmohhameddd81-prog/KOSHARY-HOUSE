/**
 * Central configuration for KOSHARY HOUSE.
 * This is the single source of truth for contact details, pricing and branding.
 * Replace the values here when handing the project over to a real restaurant.
 */
export const restaurantConfig = {
  name: 'KOSHARY HOUSE',
  tagline: 'Authentic Egyptian Taste, Made With Love.',
  whatsappNumber: '201554672640',
  email: 'mohamedadelzaki20@fmail.com',
  developerName: 'Mohamed Adel Zaki',
  developerWhatsapp: '201554672640',
  currency: 'EGP',
  deliveryFee: 25,
  // Editable placeholders — no real address or social accounts are invented.
  location: 'Delivery available across Greater Cairo — exact branch address to be confirmed.',
  openingHours: 'Every day · 10:00 AM – 11:00 PM (placeholder — confirm with restaurant)',
  socials: [
    { label: 'Facebook', placeholder: 'Page link to be added' },
    { label: 'Instagram', placeholder: 'Handle to be added' },
  ],
};

/** Format a number as an Egyptian-pound price string. */
export const formatPrice = (amount) =>
  `${new Intl.NumberFormat('en-US').format(Number(amount) || 0)} ${restaurantConfig.currency}`;

/** Build the WhatsApp deep link from an international-format number. */
export const getWhatsappLink = (number = restaurantConfig.whatsappNumber, message = '') =>
  `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
