import { Leaf, ChefHat, Heart } from 'lucide-react';
import chefImage from '../assets/images/chef.jpg';
import restaurantImage from '../assets/images/restaurant.jpg';
import koshariImage from '../assets/images/koshari.jpg';

const points = [
  { icon: Leaf, text: 'Quality ingredients' },
  { icon: ChefHat, text: 'Traditional recipes' },
  { icon: Heart, text: 'Made with love' },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__inner">
        <div className="about__visual">
          <div className="about__image about__image--main">
            <img src={chefImage} alt="Chef preparing a fresh Egyptian dish in the kitchen" loading="lazy" />
          </div>
          <div className="about__image about__image--small">
            <img src={restaurantImage} alt="Warm, welcoming restaurant interior" loading="lazy" />
          </div>
          <div className="about__image about__image--badge">
            <img src={koshariImage} alt="A bowl of koshari" loading="lazy" />
          </div>
          <span className="about__experience"><strong>100%</strong><small>Egyptian<br />flavour</small></span>
        </div>

        <div className="about__content">
          <span className="section-kicker">OUR STORY</span>
          <h2>More Than Food, <em>It’s an Egyptian Tradition.</em></h2>
          <p className="about__lead">
            At KOSHARY HOUSE, we celebrate the rich flavors of Egyptian cuisine. From our famous
            koshari to traditional homemade meals, every dish is prepared with care, fresh
            ingredients, and authentic recipes.
          </p>
          <p className="about__body">
            Our story began with a simple idea: bring the comfort and soul of Egyptian street food
            to a modern, convenient experience. We cook the way our families taught us — slowly,
            generously, and with attention to every detail on the plate.
          </p>
          <div className="about__points">
            {points.map(({ icon: Icon, text }) => (
              <span key={text}><Icon size={17} /> {text}</span>
            ))}
          </div>
          <a className="btn btn--outline" href="#menu">See What We Cook</a>
        </div>
      </div>
    </section>
  );
}
