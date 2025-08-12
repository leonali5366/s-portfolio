"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function RecaptchaLoader() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
      {error && (
        <script
          dangerouslySetInnerHTML={{
            __html: `console.error('reCAPTCHA script failed to load')`,
          }}
        />
      )}
    </>
  );
}