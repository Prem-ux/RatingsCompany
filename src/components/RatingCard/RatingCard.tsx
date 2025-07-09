import React from 'react';

type RatingCardProps = {
 company: string;
 rating: string;
 sector: string;
 lastUpdated: string;
};

export default function RatingCard({ company, rating, sector, lastUpdated }: RatingCardProps) {
  return (
    <article className='rating-card' tabIndex={0} aria-label={`Rating`}>
        <h2>{company}</h2>
        <p><strong>Sector:</strong>{sector}</p>
        {/* understand aria here */}
        <p><strong>Rating:</strong><span aria-live='polite'>{rating}</span></p>
        <small>Last Update: {lastUpdated}</small>
    </article>
  );
}