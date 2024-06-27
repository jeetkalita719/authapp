import AfterSignInComp from "@/components/AfterSignInComp";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <AfterSignInComp />
      </SignedIn>
    </main>
  );
}
