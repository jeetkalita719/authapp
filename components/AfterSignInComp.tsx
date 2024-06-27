import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { registerOrFetchUser } from "@/app/actions/serverActions";

export default async function AfterSignInComp() {
  await registerOrFetchUser();
  return (
    <section className="max-w-5xl mx-auto flex justify-between items-center p-4">
      <UserButton />
      <Button asChild>
        <Link href={"/new-order"}>New Order</Link>
      </Button>
    </section>
  );
}
