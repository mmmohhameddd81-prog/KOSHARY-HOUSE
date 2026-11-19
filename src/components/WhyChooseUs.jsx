import { Soup, Sprout, CookingPot, MousePointerClick, HeartHandshake } from 'lucide-react';

const reasons = [
  { icon: Soup, title: 'Authentic Egyptian Taste', text: 'Recipes rooted in tradition and perfected with care.' },
  { icon: Sprout, title: 'Fresh Daily Ingredients', text: 'We prep fresh every day for flavour you can trust.' },
  { icon: CookingPot, title: 'Carefully Prepared Meals', text: 'Every plate is made to order, never mass-produced.' },
  { icon: MousePointerClick, title: 'Easy Online Ordering', text: 'A smooth, modern ordering flow in just a few taps.' },
  { icon: HeartHandshake, title: 'Customer Satisfaction', text: 'Your happiness is the reason we do this every day.' },
];

export default function WhyChooseUs() {
  return (
    <section className="why section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">WHY KOSHARY HOUSE</span>
          <h2>Made different, <em>made for you.</em></h2>
          <p>Five reasons our guests keep coming back for more.</p>
        </div>
        <div className="why__grid">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <article className="why-card" key={title}>
              <span className="why-card__number">0{index + 1}</span>
              <span className="why-card__icon"><Icon size={24} strokeWidth={1.7} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
