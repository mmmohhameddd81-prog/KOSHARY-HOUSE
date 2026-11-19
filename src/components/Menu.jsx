import { useMemo, useState } from 'react';
import { SearchX, UtensilsCrossed } from 'lucide-react';
import { categories, products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import Categories from './Categories';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const { addItem, updateQuantity, getItemQuantity } = useCart();
  const { showToast } = useToast();

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = !query || product.name.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const handleAdd = (product) => {
    addItem(product);
    showToast(`${product.name} added to your cart`);
  };

  const handleDecrease = (product) => {
    const current = getItemQuantity(product.id);
    if (current > 1) updateQuantity(product.id, current - 1);
    else updateQuantity(product.id, 1);
  };

  return (
    <section className="menu section" id="menu">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker"><UtensilsCrossed size={15} /> OUR MENU</span>
          <h2>Something delicious for <em>every craving.</em></h2>
          <p>Explore our full menu of Egyptian favourites — prepared fresh, priced fairly, and ready when you are.</p>
        </div>

        <div className="menu__toolbar">
          <SearchBar value={search} onChange={setSearch} />
          <span className="menu__result-count">{filtered.length} {filtered.length === 1 ? 'dish' : 'dishes'}</span>
        </div>

        <Categories
          categories={categories}
          products={products}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        {filtered.length > 0 ? (
          <div className="product-grid">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={getItemQuantity(product.id)}
                onAdd={handleAdd}
                onDecrease={handleDecrease}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state menu__empty">
            <span className="empty-state__icon"><SearchX size={30} /></span>
            <h3>No dishes found</h3>
            <p>We couldn’t find anything matching “{search}”. Try another search or browse all categories.</p>
            <button type="button" className="btn btn--outline btn--small" onClick={() => { setSearch(''); setActiveCategory('all'); }}>
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
