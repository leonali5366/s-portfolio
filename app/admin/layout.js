import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import React from "react";

export default function AdminLayout({ children }) {
  return (
    <main>
      <SignedIn>{children}</SignedIn>

      {/* If the user is not signed in, redirect to the sign-in page */}
      <SignedOut>
        <div className="bg-black/80 h-screen flex items-center justify-center">
          <SignIn routing="hash" />
        </div>
      </SignedOut>
    </main>
  );
}
