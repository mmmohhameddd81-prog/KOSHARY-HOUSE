export default function Categories({ categories, products, activeCategory, onSelect }) {
  const countFor = (id) => products.filter((product) => product.category === id).length;

  return (
    <div className="categories" role="group" aria-label="Filter menu by category">
      <button
        type="button"
        className={`category-chip ${activeCategory === 'all' ? 'category-chip--active' : ''}`}
        onClick={() => onSelect('all')}
      >
        <span className="category-chip__all">✦</span>
        <span className="category-chip__name">All Items</span>
        <span className="category-chip__count">{products.length}</span>
      </button>
      {categories.map((category) => (
        <button
          type="button"
          key={category.id}
          className={`category-chip ${activeCategory === category.id ? 'category-chip--active' : ''}`}
          onClick={() => onSelect(category.id)}
          aria-pressed={activeCategory === category.id}
        >
          <img src={category.image} alt="" loading="lazy" />
          <span className="category-chip__name">{category.name}</span>
          <span className="category-chip__count">{countFor(category.id)}</span>
        </button>
      ))}
    </div>
  );
}
