'use client';
import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <SignIn routing="hash" afterSignInUrl="/explore" />
    </main>
  );
}
