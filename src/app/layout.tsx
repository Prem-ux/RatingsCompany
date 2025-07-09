import '../styles/globals.css';
import Navigation from '../components/Navigation/Navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>CRISIL Ratings Dashboard</title>
      </head>
      <body>
        <Navigation />
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
