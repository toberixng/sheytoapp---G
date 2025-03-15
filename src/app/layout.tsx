// src/app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export const metadata = {
  title: 'Sheytoapp',
  description: 'AI-powered productivity app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}