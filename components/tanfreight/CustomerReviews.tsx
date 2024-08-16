import { reviews } from '@/constants';
import React from 'react';
import ReviewCard from './ReviewCard';

const CustomerReviews = () => {
  return (
    <section className="max-container bg-gray-100 p-8">
      <h1 className="text-center text-4xl font-bold">
        What our <span className="text-purple-2"> Customers</span> are saying!
      </h1>
      {/* <p className="info-text m-auto mt-4 max-w-lg text-center">
        Our customers speak highly of our services, showcasing their
        satisfaction and trust in our reliable and customer-centric approach.
      </p> */}
      <div className="mt-24 flex  items-center justify-evenly gap-14  max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard
            rating={review.rating}
            feedback={review.feedback}
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
