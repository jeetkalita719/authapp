import AfterSignInComp from "@/components/AfterSignInComp";
import { Button, buttonVariants } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <SignedOut>
        <main className="h-screen w-screen flex flex-col gap-12 items-center p-20 bg-gradient-to-r from-slate-300 to-stone-50">
          <Image src={"/logo.png"} height={128} width={128} alt="logo-image"/>
          <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-4xl text-center">Indian Oil Corporation</h1>
          <h2 className="font-medium text-2xl text-center">Employee Login</h2>
          </div>
          <Button asChild size={"lg"}>
            <Link href={"/login"}>Sign In</Link>
          </Button>
        </main>
      </SignedOut>
      <SignedIn>
        <AfterSignInComp />
      </SignedIn>
    </main>
  );
}
