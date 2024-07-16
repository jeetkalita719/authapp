import AfterSignInComp from "@/components/AfterSignInComp";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <SignedOut>
        <Link className="bg-red-400" href={"/login"}>
          Sign In
        </Link>
      </SignedOut>
      <SignedIn>
        <AfterSignInComp />
      </SignedIn>
    </main>
  );
}
