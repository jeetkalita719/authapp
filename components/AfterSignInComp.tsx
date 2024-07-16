import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import fetchUserOrders, { fetchUser } from "@/app/actions/serverActions";
import { redirect } from "next/navigation";

export default async function AfterSignInComp() {
  const userinDB = await fetchUser();
  if (userinDB?.data) {
    const userOrders = await fetchUserOrders();
    return (
      <section className="max-w-5xl mx-auto flex flex-col p-4">
        <div className="w-full flex justify-between items-center p-2">
          <Button asChild>
            <Link href={"/new-order"}>New Order</Link>
          </Button>
          <UserButton />
        </div>
        <div className="w-full flex flex-col gap-2 py-10">
          <h2 className="font-bold text-3xl">Your Pending Orders</h2>
          <div className="w-full flex flex-col gap-2">
            {userOrders.map((userOrder, index) => (
              <>
                <div key={index} className="w-full bg-slate-50 hover:bg-slate-100 rounded-md p-3 flex gap-4 justify-between">
                  <div>
                  <b>OrderId:</b> {userOrder.orderId}
                  </div>
                  <div>
                  <b>Items Ordered:</b> {`${userOrder.order.stamp.required && "Stamp,"} ${userOrder.order.visitingCard.required && "Visiting Card,"} ${userOrder.order.namePlate.required && "Name Plate,"}`.slice(0,-1)}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    );
  }
  redirect("/onboarding");
}
