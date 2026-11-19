/**
 * Product catalogue for KOSHARY HOUSE.
 * Prices are plain numbers in EGP so they are easy to edit.
 * Images are bundled locally (see src/assets/images) — no external image requests.
 */
import koshari from '../assets/images/koshari.jpg';
import koshariSpecial from '../assets/images/koshari-special.jpg';
import ful from '../assets/images/ful-medames.jpg';
import falafel from '../assets/images/falafel.jpg';
import falafelExtra from '../assets/images/falafel-extra.jpg';
import feteer from '../assets/images/feteer.jpg';
import sandwich from '../assets/images/sandwich.jpg';
import hawawshi from '../assets/images/hawawshi.jpg';
import kofta from '../assets/images/kofta.jpg';
import chicken from '../assets/images/grilled-chicken.jpg';
import mixedGrill from '../assets/images/mixed-grill.jpg';
import molokhia from '../assets/images/molokhia.jpg';
import macaroni from '../assets/images/macaroni.jpg';
import mahshi from '../assets/images/mahshi.jpg';
import mahshiCabbage from '../assets/images/mahshi-cabbage.jpg';
import kunafa from '../assets/images/kunafa.jpg';
import basbousa from '../assets/images/basbousa.jpg';
import ricePudding from '../assets/images/rice-pudding.jpg';
import mango from '../assets/images/mango-juice.jpg';
import juices from '../assets/images/juices.jpg';
import hibiscus from '../assets/images/hibiscus.jpg';
import lemonade from '../assets/images/lemonade.jpg';
import water from '../assets/images/water.jpg';
import eggs from '../assets/images/eggs-pastrami.jpg';
import feast from '../assets/images/feast.jpg';

export const categories = [
  { id: 'koshari', name: 'Koshari', image: koshari },
  { id: 'breakfast', name: 'Egyptian Breakfast', image: ful },
  { id: 'sandwiches', name: 'Sandwiches', image: sandwich },
  { id: 'hawawshi', name: 'Hawawshi', image: hawawshi },
  { id: 'grills', name: 'Grills', image: kofta },
  { id: 'meals', name: 'Traditional Meals', image: molokhia },
  { id: 'mahshi', name: 'Mahshi', image: mahshi },
  { id: 'desserts', name: 'Desserts', image: kunafa },
  { id: 'drinks', name: 'Drinks', image: mango },
];

export const products = [
  // ── Koshari ──────────────────────────────────────────────────────────
  {
    id: 'k1', name: 'Classic Koshari', category: 'koshari', price: 55,
    image: koshari, badge: 'Best Seller',
    description: 'Rice, lentils and chickpeas layered with spicy tomato sauce and crispy onions.',
  },
  {
    id: 'k2', name: 'Special Koshari', category: 'koshari', price: 75,
    image: koshariSpecial, badge: 'Popular',
    description: 'Our signature koshari with extra chickpeas, double sauce and a side of pickles.',
  },
  {
    id: 'k3', name: 'Extra Large Koshari', category: 'koshari', price: 95,
    image: koshari,
    description: 'A generous portion of classic koshari made for sharing or a hearty appetite.',
  },
  {
    id: 'k4', name: 'Koshari with Extra Crispy Onions', category: 'koshari', price: 65,
    image: koshariSpecial,
    description: 'Golden koshari finished with a generous handful of hand-fried crispy onions.',
  },

  // ── Egyptian Breakfast ───────────────────────────────────────────────
  {
    id: 'b1', name: 'Ful Medames', category: 'breakfast', price: 45,
    image: ful, badge: 'Best Seller',
    description: 'Slow-cooked fava beans with olive oil, lemon, cumin and warm baladi bread.',
  },
  {
    id: 'b2', name: 'Egyptian Falafel (Ta’amiya)', category: 'breakfast', price: 40,
    image: falafel, badge: 'Popular',
    description: 'Crispy herb-flecked falafel served with tahini, pickles and fresh vegetables.',
  },
  {
    id: 'b3', name: 'Eggs with Pastrami', category: 'breakfast', price: 60,
    image: eggs,
    description: 'Fluffy eggs paired with savoury pastrami and toasted bread — a comforting start.',
  },
  {
    id: 'b4', name: 'Feteer Meshaltet', category: 'breakfast', price: 85,
    image: feteer, badge: 'Popular',
    description: 'Layers of flaky Egyptian pastry served with honey and soft cheese.',
  },

  // ── Sandwiches ───────────────────────────────────────────────────────
  {
    id: 's1', name: 'Ful Sandwich', category: 'sandwiches', price: 35,
    image: sandwich,
    description: 'Mashed fava beans, lemon and herbs tucked into warm baladi bread.',
  },
  {
    id: 's2', name: 'Falafel Sandwich', category: 'sandwiches', price: 35,
    image: falafelExtra, badge: 'Best Seller',
    description: 'Crispy falafel with tahini, tomato and crunchy vegetables in a soft roll.',
  },
  {
    id: 's3', name: 'Potato Sandwich', category: 'sandwiches', price: 30,
    image: sandwich,
    description: 'Spiced golden potato pieces with pickles and a drizzle of tahini.',
  },
  {
    id: 's4', name: 'Sausage Sandwich', category: 'sandwiches', price: 45,
    image: sandwich,
    description: 'Grilled Egyptian sausages with onions and peppers in warm bread.',
  },

  // ── Hawawshi ─────────────────────────────────────────────────────────
  {
    id: 'h1', name: 'Classic Hawawshi', category: 'hawawshi', price: 65,
    image: hawawshi, badge: 'Best Seller',
    description: 'Spiced minced beef baked inside golden flatbread with onions and herbs.',
  },
  {
    id: 'h2', name: 'Spicy Hawawshi', category: 'hawawshi', price: 70,
    image: hawawshi,
    description: 'Our classic hawawshi with a fiery pepper and chilli kick.',
  },
  {
    id: 'h3', name: 'Cheese Hawawshi', category: 'hawawshi', price: 75,
    image: hawawshi, badge: 'Popular',
    description: 'Juicy spiced beef and melted cheese folded into crisp baked bread.',
  },

  // ── Grills ───────────────────────────────────────────────────────────
  {
    id: 'g1', name: 'Grilled Kofta', category: 'grills', price: 110,
    image: kofta, badge: 'Best Seller',
    description: 'Charcoal-grilled minced meat skewers with herbs, rice and grilled vegetables.',
  },
  {
    id: 'g2', name: 'Grilled Chicken', category: 'grills', price: 105,
    image: chicken,
    description: 'Tender marinated chicken grilled over charcoal with a smoky finish.',
  },
  {
    id: 'g3', name: 'Mixed Grill', category: 'grills', price: 180,
    image: mixedGrill, badge: 'Popular',
    description: 'A feast of kofta, chicken, sausages and grilled vegetables on one platter.',
  },
  {
    id: 'g4', name: 'Chicken Shish Tawook', category: 'grills', price: 120,
    image: chicken,
    description: 'Skewered chicken marinated in garlic and spices, grilled to perfection.',
  },

  // ── Traditional Meals ────────────────────────────────────────────────
  {
    id: 't1', name: 'Molokhia with Rice', category: 'meals', price: 85,
    image: molokhia, badge: 'Best Seller',
    description: 'Silky jute-leaf stew with garlic and coriander, served over fluffy rice.',
  },
  {
    id: 't2', name: 'Egyptian Macaroni Bechamel', category: 'meals', price: 90,
    image: macaroni, badge: 'Popular',
    description: 'Baked pasta in creamy béchamel with a golden, bubbling cheese top.',
  },
  {
    id: 't3', name: 'Fatta', category: 'meals', price: 100,
    image: feast,
    description: 'A traditional layered dish of rice, bread, meat and rich garlic sauce.',
  },
  {
    id: 't4', name: 'Egyptian Rice with Chicken', category: 'meals', price: 110,
    image: mixedGrill,
    description: 'Fragrant spiced rice served with tender, slow-cooked Egyptian chicken.',
  },

  // ── Mahshi ───────────────────────────────────────────────────────────
  {
    id: 'm1', name: 'Stuffed Grape Leaves', category: 'mahshi', price: 80,
    image: mahshi, badge: 'Popular',
    description: 'Tender vine leaves rolled around herbed rice and simmered in tomato sauce.',
  },
  {
    id: 'm2', name: 'Stuffed Cabbage', category: 'mahshi', price: 75,
    image: mahshiCabbage,
    description: 'Cabbage parcels filled with seasoned rice and slow-cooked until tender.',
  },
  {
    id: 'm3', name: 'Mixed Mahshi', category: 'mahshi', price: 95,
    image: mahshi, badge: 'Best Seller',
    description: 'A comforting mix of stuffed vine leaves, cabbage and seasonal vegetables.',
  },

  // ── Desserts ─────────────────────────────────────────────────────────
  {
    id: 'd1', name: 'Rice Pudding', category: 'desserts', price: 30,
    image: ricePudding,
    description: 'Creamy Egyptian-style rice pudding, chilled and lightly sweetened.',
  },
  {
    id: 'd2', name: 'Om Ali', category: 'desserts', price: 40,
    image: ricePudding,
    description: 'Warm pastry baked with milk, nuts and raisins — a true Egyptian classic.',
  },
  {
    id: 'd3', name: 'Basbousa', category: 'desserts', price: 35,
    image: basbousa,
    description: 'Sweet semolina cake soaked in syrup and topped with nuts.',
  },
  {
    id: 'd4', name: 'Konafa', category: 'desserts', price: 45,
    image: kunafa, badge: 'Best Seller',
    description: 'Crispy shredded pastry with melted cheese, syrup and crushed pistachios.',
  },

  // ── Drinks ───────────────────────────────────────────────────────────
  {
    id: 'dr1', name: 'Mango Juice', category: 'drinks', price: 30,
    image: mango, badge: 'Popular',
    description: 'Fresh, sun-ripened mango blended into a smooth chilled juice.',
  },
  {
    id: 'dr2', name: 'Guava Juice', category: 'drinks', price: 30,
    image: juices,
    description: 'Sweet and refreshing guava juice, served ice cold.',
  },
  {
    id: 'dr3', name: 'Fresh Lemonade', category: 'drinks', price: 25,
    image: lemonade,
    description: 'Zesty lemon with ice and mint — the perfect meal companion.',
  },
  {
    id: 'dr4', name: 'Hibiscus Drink (Karkade)', category: 'drinks', price: 25,
    image: hibiscus,
    description: 'A ruby-red hibiscus infusion, served chilled and lightly sweetened.',
  },
  {
    id: 'dr5', name: 'Water', category: 'drinks', price: 10,
    image: water,
    description: 'A chilled bottle of still water.',
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
