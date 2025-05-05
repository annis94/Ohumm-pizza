import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartProvider from '@/context/CartContext';
import { Toaster } from '@/components/ui/toaster';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "O'HUMM PIZZA | Délicieuses pizzas artisanales à Argenteuil",
  description: 'Découvrez nos pizzas artisanales, calzones et plus encore. Commandez en ligne pour livraison ou à emporter.',
  keywords: 'pizza, Argenteuil, livraison pizza, pizzeria, commande en ligne, pizza artisanale',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col font-body bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <CartProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}