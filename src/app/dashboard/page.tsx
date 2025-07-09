// "use client";
// import DashboardClient from "../../views/Dashboard/DsahboardClient";


// export default function DashboardPage() {
//     return (
//         <main>
//         <DashboardClient />
//         </main>
//     );
//     } 

import { fetchRatings } from "../../services/ratingsService";
import RatingCard from "../../components/RatingCard/RatingCard";

export default async function DashboardPage() {
    const ratings = await fetchRatings();

    return (
        <main>
            <h1 style={{color:'blue'}}>CRISIL Actual Dashboard</h1>
            <section style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                {ratings.map((rating:any) => (
                    <RatingCard key={rating.id} {...rating} />
                ))}
            </section>
            <h3>SSR Render--</h3>
        </main>
    );
}