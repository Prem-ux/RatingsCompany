"use client";
import React from 'react';
import { useRatings } from '../../context/RatingsContext';
import RatingCard from '../../components/RatingCard/RatingCard';

export default function Dashboard() {
 const { ratings, loading, error } = useRatings();

 if (loading) {
   return <div>Loading...</div>;
 }
 if (error) {
   return <div>Error: {error}</div>;
 }  

 return (
    <main>
        <h1 style={{color:'blue'}}>CRISIL Actual Dashboard - Web renderer</h1>
        <section style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                {/* Understnad map part here */}
                    {ratings.map((rating:any) => (
                        <RatingCard key={rating.id} {...rating} />
                    ))}         
        </section>
    </main>
 );
}