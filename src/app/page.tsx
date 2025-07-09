
import React from 'react'; // Added React import for JSX support

import RatingCard from '../components/RatingCard/RatingCard';

export default function HomePage() {
  return (
    <main>
      <h1>CRISIL Ratings ddDashboard</h1>
      <RatingCard company="ABC Corp" rating="AAA" sector="Finance" lastUpdated="2025-07-01" />
    </main>
  );
}
