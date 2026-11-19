import koshari from '../assets/images/koshari.jpg';
import ful from '../assets/images/ful-medames.jpg';
import mixedGrill from '../assets/images/mixed-grill.jpg';
import feast from '../assets/images/feast.jpg';

/**
 * Sample promotions. Each offer adds a bundle of real product IDs to the cart.
 * Prices are plain numbers in EGP for easy editing.
 */
export const offers = [
  {
    id: 'o1',
    title: 'Koshari Combo',
    description: 'Our signature koshari paired with a chilled fresh lemonade.',
    image: koshari,
    tag: '-15%',
    originalPrice: 80,
    price: 69,
    productIds: ['k1', 'dr3'],
  },
  {
    id: 'o2',
    title: 'Family Meal',
    description: 'Special koshari, a full mixed grill and konafa to finish — made for sharing.',
    image: feast,
    tag: 'Family',
    originalPrice: 300,
    price: 249,
    productIds: ['k2', 'g3', 'd4'],
  },
  {
    id: 'o3',
    title: 'Egyptian Breakfast Combo',
    description: 'Ful medames, crispy ta’amiya and a refreshing mango juice to start the day.',
    image: ful,
    tag: 'Morning',
    originalPrice: 115,
    price: 99,
    productIds: ['b1', 'b2', 'dr1'],
  },
  {
    id: 'o4',
    title: 'Mixed Grill Offer',
    description: 'A sizzling mixed grill platter with a refreshing hibiscus drink.',
    image: mixedGrill,
    tag: '-12%',
    originalPrice: 205,
    price: 179,
    productIds: ['g3', 'dr4'],
  },
];
