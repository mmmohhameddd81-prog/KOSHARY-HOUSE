import { Star, Quote, Info } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="testimonials section" id="reviews">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker"><Star size={14} /> CUSTOMER REVIEWS</span>
          <h2>What people are <em>saying about us.</em></h2>
          <p>Kind words from lovers of good Egyptian food.</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((review) => (
            <article className="review-card" key={review.id}>
              <Quote size={22} className="review-card__quote" />
              <div className="review-card__stars" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={15} fill={i < review.rating ? 'currentColor' : 'none'} />
                ))}
              </div>
              <p>“{review.text}”</p>
              <div className="review-card__author">
                <span className={`avatar avatar--${review.color}`}>{review.initials}</span>
                <div><strong>{review.name}</strong><small>Verified taster</small></div>
              </div>
            </article>
          ))}
        </div>

        <p className="testimonials__disclaimer"><Info size={14} /> These are sample demonstration reviews, not verified real customer feedback.</p>
      </div>
    </section>
  );
}
