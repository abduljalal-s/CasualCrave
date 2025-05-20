'use client';
import { SignUp } from '@clerk/nextjs';

export default function SignupPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <SignUp routing="hash" afterSignUpUrl="/explore" />
    </main>
  );
}
