import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function newOrder() {
  return (
    <main className="w-screen h-screen">
      <section className="max-w-5xl mx-auto p-10">
        <h1 className="font-bold text-4xl">Place a new order here</h1>
        <form className="py-10 flex gap-4 flex-wrap items-center">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" className="w-96" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="designation">Designation</Label>
            <Input
              type="text"
              id="designation"
              name="designation"
              className="w-96"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="department">Department</Label>
            <Input
              type="text"
              id="department"
              name="department"
              className="w-96"
            />
          </div>
        </form>
        <form className="py-10 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Label htmlFor="namePlate">Name Plate</Label>
            <Input type="checkbox" id="namePlate" name="namePlate" className="h-4 w-4" />
            <Textarea placeholder="Enter remarks here"/>
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="visitingCard">Visiting Card</Label>
            <Input type="checkbox" id="visitingCard" name="visitingCard" className="h-4 w-4" />
            <Textarea placeholder="Enter remarks here"/>
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="stamp">Stamp</Label>
            <Input type="checkbox" id="stamp" name="stamp" className="h-4 w-4" />
            <Textarea placeholder="Enter remarks here"/>
          </div>
          <Button>Submit</Button>
        </form>
      </section>
    </main>
  );
}
