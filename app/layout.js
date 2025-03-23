import localFont from "next/font/local";
import "./globals.css";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Toaster } from "sonner";

// Local fonts
const JosefinSans = localFont({
  src: "./fonts/JosefinSans-VariableFont_wght.ttf",
  variable: "--font-josefin-sans",
  weight: "100 900",
});
const MarcellusMono = localFont({
  src: "./fonts/Marcellus-Regular.ttf",
  variable: "--font-Marcellus-mono",
  weight: "100 900",
});

// SEO Metadata
export const metadata = {
  title: "Web Designer & Developer | Creative Solutions for Modern Websites",
  description:
    "Professional web designer and developer specializing in modern, responsive, and user-friendly websites. Let's build your dream website together!",
  keywords: [
    "web designer",
    "web developer",
    "responsive websites",
    "modern web design",
    "UI/UX design",
    "frontend development",
    "portfolio",
  ],
  authors: [{ name: "Shuvo", url: "https://shuvodesign.com" }],
  openGraph: {
    title: "Web Designer & Developer | Creative Solutions for Modern Websites",
    description:
      "Professional web designer and developer specializing in modern, responsive, and user-friendly websites. Let's build your dream website together!",
    url: "https://shuvodesign.com",
    siteName: "shuvodesign",
    images: [
      {
        url: "/images/profile.png", // Replace with your OpenGraph image
        width: 1200,
        height: 630,
        alt: "Web Designer & Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shuvo",
  url: "https://shuvodesign.com",
  image: "/images/profile.png", // Replace with your image
  jobTitle: "Web Designer & Developer",
  description:
    "Professional web designer and developer specializing in modern, responsive, and user-friendly websites.",
  sameAs: [
    "https://linkedin.com/in/yourprofile",
    "https://github.com/yourprofile",
    "https://twitter.com/yourprofile",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${JosefinSans.variable} ${MarcellusMono.variable} font-sans antialiased`}
      >
        <EdgeStoreProvider>
          <Toaster richColors />
          {children}
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
