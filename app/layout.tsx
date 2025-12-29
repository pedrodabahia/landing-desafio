import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desafio Karkará - 30 Dias",
  description: "Desafio Karkará 30 Dias é um programa de emagrecimento e fortalecimento físico para homens em Posto da Mata - Ba. Treinos focados, disciplina e resultados reais em apenas 30 dias",
  openGraph: {
    title: 'Desafio 30 Dias – Transforme seu corpo',
    description: 'Vagas limitadas para o desafio de 30 dias que vai transformar seu corpo e sua disciplina.',
    url: 'https://desafiokarkara.vercel.app',
    siteName: 'Desafio 30 Dias',
    images: [
      {
        url: 'https://desafiokarkara.vercel.app/Images/banner.png',
        width: 1200,
        height: 630,
        alt: 'Desafio 30 Dias',
      },
    ],
    locale: 'pt_BR',
    type: 'website',

  },
  icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
