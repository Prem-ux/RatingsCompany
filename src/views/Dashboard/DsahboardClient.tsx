"use client"
import { RatingsProvider } from "../../context/RatingsContext";
import Dashboard from "./Dashboard";

export default function DashboardClient() {
    return (
        <RatingsProvider>
            <Dashboard />
        </RatingsProvider>
    );
}
