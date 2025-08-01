import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function GuestbookPage() {
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-2xl font-semibold lg:text-3xl pt-5">Guestbook</h1>
      <p className="leading-7 text-muted-foreground mt-2">
        Please sign my guestbook...
      </p>
      <Card className="mt-10">
        <CardHeader className="flex flex-col w-full">
          <Label className="mb-1">Message</Label>
          <GuestBookForm />
        </CardHeader>
      </Card>
    </section>
  );
}

function GuestBookForm() {
  const user = false;

  if (user) {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {/* Input takes ~80% on desktop, full width on mobile */}
      <Input
        type="text"
        placeholder="Your message..."
        className="flex-grow md:w-[80%]"
      />

      {/* Button ~10% width on desktop */}
      <Button className="md:w-[10%] shrink-0">Sign</Button>
    </div>
  );
}
