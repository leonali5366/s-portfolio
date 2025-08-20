/* eslint-disable @next/next/no-img-element */
import localFont from "next/font/local";
import "./globals.css";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import RecaptchaLoader from "@/components/RecaptchaLoader";
import PixelTracker from "@/components/PixelTracker";

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
    "shuvo design",
    "pro coder 20",
    "wordpress expert",
    "wordpress developer",
    "webflow expert",
    "webflow developer",
    "next js expert",
    "next js developer",
    "react js expert",
    "react js developer",
    "web designer",
    "web developer",
    "web design",
    "web development",
    "responsive design",
    "responsive web design",
    "responsive web development",
    "modern web design",
    "modern web development",
    "user-friendly websites",
    "professional web design",
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
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-Z24Q925T3N"
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z24Q925T3N');
          `,
            }}
          />
          {/* Facebook Pixel Script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}'); 
              fbq('track', 'PageView');
            `,
            }}
          />
          {/* NoScript fallback */}
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
              alt="Facebook Pixel"
            />
          </noscript>
        </head>
        <body
          className={`${JosefinSans.variable} ${MarcellusMono.variable} font-sans antialiased`}
        >
          <EdgeStoreProvider>
            <Toaster richColors />
            <RecaptchaLoader />
            <PixelTracker />
            {children}
          </EdgeStoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
