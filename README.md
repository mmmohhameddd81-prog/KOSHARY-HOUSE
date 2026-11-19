# KOSHARY HOUSE 🍲

A premium, fully functional Egyptian restaurant website with an interactive menu, persistent shopping cart, validated checkout and a complete WhatsApp ordering workflow.

Built with React 19 + Vite, plain JavaScript ES6+, CSS3, Lucide React icons and `localStorage`.

---

## Features

- **Premium responsive UI** — warm cream/brown/gold design system with custom typography and lightweight animations.
- **Sticky navbar** with smooth-scroll navigation, scroll-spy active states, mobile hamburger menu and a live cart counter.
- **Hero, highlights, about, why-choose-us, offers, reviews and contact** sections.
- **35 Egyptian dishes** across 9 categories, with locally bundled food photography (no broken image links).
- **Menu filtering** by category, live search by product name, responsive product grid and an empty-search state.
- **Shopping cart** with quantity controls, remove/clear actions, automatic subtotal/delivery/total calculations and `localStorage` persistence.
- **Checkout** with required-field validation and Egyptian phone-number normalization/validation.
- **WhatsApp ordering** — builds a fully formatted Arabic order message, URL-encodes it and opens `https://wa.me/201554672640?text=...`. The customer presses Send manually; the cart is **not** cleared before the handoff.
- **Toast notifications**, accessible form labels, semantic HTML, SEO meta tags, lazy-loaded images and reduced-motion support.

---

## Getting started

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

Production build and preview:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

---

## Configuration (before delivering to a real restaurant)

Everything that needs changing lives in **`src/config/restaurant.js`**:

| Value | Current placeholder |
| --- | --- |
| `whatsappNumber` | `201554672640` (temporary personal number) |
| `email` | `mohamedadelzaki20@fmail.com` |
| `developerName` / `developerWhatsapp` | `Mohamed Adel Zaki` / `201554672640` |
| `deliveryFee` | `25` EGP |
| `location` / `openingHours` | Editable placeholders — no fake address |
| `socials` | Placeholder labels — add real links when available |

No WhatsApp number is hardcoded in components — all buttons use the config helpers `getWhatsappLink()` and `buildWhatsappUrl()`.

Other easy-to-edit data:

- `src/data/products.js` — products, prices (plain EGP numbers), categories and images.
- `src/data/offers.js` — promotional bundles and discounted prices.
- `src/data/testimonials.js` — **sample demonstration reviews** (replace with real feedback).
- `src/assets/images/` — all food photography, bundled locally.

---

## Project structure

```
src/
  components/    Navbar, Hero, Highlights, Categories, Menu, ProductCard,
                 SearchBar, Cart, CartItem, Checkout, Offers, About,
                 WhyChooseUs, Testimonials, Contact, Footer, Toast
  context/       CartContext.jsx, ToastContext.jsx
  data/          products.js, offers.js, testimonials.js
  config/        restaurant.js        ← single source of truth
  hooks/         useLocalStorage.js
  utils/         order.js             ← phone validation + Arabic message builder
  assets/images/ Local food photography
  styles/        global.css, components.css
  App.jsx, main.jsx
```

---

## Important notes

- Orders are **handed off to WhatsApp**; nothing is submitted to a server and no payment is processed.
- The customer must press **Send** inside WhatsApp. A clear notice is shown in checkout.
- The cart is intentionally preserved after the handoff so customers can return if WhatsApp fails to open.
- Demo reviews and offer prices are illustrative samples.
