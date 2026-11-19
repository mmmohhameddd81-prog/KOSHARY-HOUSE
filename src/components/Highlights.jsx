import { Leaf, BookOpenText, Zap, HeartHandshake } from 'lucide-react';

const highlights = [
  { icon: Leaf, title: 'Fresh Ingredients', text: 'Chosen daily for flavour and quality.' },
  { icon: BookOpenText, title: 'Authentic Recipes', text: 'Traditional Egyptian dishes, done right.' },
  { icon: Zap, title: 'Fast Ordering', text: 'A few taps and your order is on its way.' },
  { icon: HeartHandshake, title: 'Delicious Everyday', text: 'Comfort food made with genuine care.' },
];

export default function Highlights() {
  return (
    <section className="highlights section" id="highlights">
      <div className="container">
        <div className="highlights__grid">
          {highlights.map(({ icon: Icon, title, text }) => (
            <article className="highlight" key={title}>
              <span className="highlight__icon"><Icon size={24} strokeWidth={1.7} /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
