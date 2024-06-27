import { fetchUser, registerUser } from "@/app/actions/serverActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Onboarding() {
  const user = (await currentUser())!;
  const userinDB = await fetchUser();

  if (userinDB?.data) {
    redirect('/')
  }
    return (
    <div className="w-screen h-screen">
      <form
        action={registerUser}
        className="max-w-5xl mx-auto py-20 flex flex-col gap-3"
      >
        <div className="grid grid-cols-2 gap-4">
          <Input type="text" name="name" placeholder="Full Name" value={user.fullName!} disabled />
          <Input type="text" name="username" placeholder="Username" value={user.username!} disabled />
          <Input
            type="text"
            name="designation"
            placeholder="Enter your designation"
          />
          <Input
            type="text"
            name="department"
            placeholder="Enter your department"
          />
        </div>
        <Button type="submit" className="w-40 mx-auto">
          Register
        </Button>
      </form>
    </div>
  );
}
