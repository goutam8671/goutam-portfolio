"use client";

import "./globals.css";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ReactLenis applies the physics-based glide to the whole site */}
        <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
          {/* Apply the fix: cast children to 'any' to bypass strict conflicting ReactNode types */}
          {(children as any)}
        </ReactLenis>
      </body>
    </html>
  );
}