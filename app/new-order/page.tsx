import { fetchUser, placeNewOrder } from "@/app/actions/serverActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Client, currentUser } from "@clerk/nextjs/server";

import EnglishtoHinTranslate from "@/components/englishtohindiTranslate";

export default async function newOrder() {
  const user = (await currentUser())!;
  const userinDB = await fetchUser();

  return (
    <main className="w-screen h-screen">
      <section className="max-w-5xl mx-auto p-10">
        <h1 className="font-bold text-4xl">Place a new order here</h1>
        <form className="py-10 flex gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="w-full"
              disabled
              value={user.fullName as string}
            />
            <EnglishtoHinTranslate Username={user.fullName as string} />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <Label htmlFor="designation">Designation</Label>
            <Input
              type="text"
              id="designation"
              name="designation"
              className="w-full"
              disabled
              value={userinDB?.data.designation}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <Label htmlFor="department">Department</Label>
            <Input
              type="text"
              id="department"
              name="department"
              className="w-full"
              disabled
              value={userinDB?.data.department}
            />
          </div>
        </form>
        <form
          className="py-10 flex flex-col gap-16 items-center"
          action={placeNewOrder}
        >
          <div className="w-full flex gap-8">
            <div className="flex justify-between w-[150px] py-4">
              <Label htmlFor="namePlate">Name Plate</Label>
              <Input
                type="checkbox"
                id="namePlate"
                name="namePlate"
                className="h-4 w-4"
              />
            </div>
            <Textarea
              placeholder="Enter remarks here"
              className="flex-1"
              name="namePlateRemarks"
            />
          </div>
          <div className="w-full flex gap-8">
            <div className="flex justify-between w-[150px] py-4">
              <Label htmlFor="visitingCard">Visiting Card</Label>
              <Input
                type="checkbox"
                id="visitingCard"
                name="visitingCard"
                className="h-4 w-4"
              />
            </div>
            <Textarea
              placeholder="Enter remarks here"
              className="flex-1"
              name="visitingCardRemarks"
            />
          </div>
          <div className="w-full flex gap-8">
            <div className="flex justify-between w-[150px] py-4">
              <Label htmlFor="stamp">Stamp</Label>
              <Input
                type="checkbox"
                id="stamp"
                name="stamp"
                className="h-4 w-4"
              />
            </div>
            <Textarea
              placeholder="Enter remarks here"
              className="flex-1"
              name="stampRemarks"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </main>
  );
}
