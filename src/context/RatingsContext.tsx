"use client";
import React, { useState, useEffect, createContext, useContext } from 'react';
import { fetchRatings } from '../services/ratingsService';

type RattingsContextType = { 
  ratings: any[];
  loading: boolean;
  error: string | null;
}

const RatingsContext = createContext<RattingsContextType | undefined>(undefined);

export function RatingsProvider({ children }: {children: React.ReactNode }) {
  const [ratings, setRatings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
   
    fetchRatings()
    .then(data => {
      setRatings(data as any[]);
      setLoading(false);
    })
    .catch(err => {
      setError("Failed to load ratings");
      setLoading(false);
    });
  }, []);

  return (
    <RatingsContext.Provider value={{ ratings, loading, error }}>
      {children}
    </RatingsContext.Provider>
  );
}

export function useRatings() {
  const context = useContext(RatingsContext);
  if (context === undefined) {
    throw new Error("useRatings must be used within a RatingsProvider");
  }
  return context;
}
