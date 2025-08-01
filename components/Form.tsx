"use client";
import { useFormStatus } from "react-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export function Form() {
  return (
    <form className="flex justify-between gap-4 flex-col md:flex-row">
      <Input
        type="text"
        name="message"
        maxLength={80}
        minLength={2}
        placeholder="your message..."
        required
      />
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4" />
          please wait
        </Button>
      ) : (
        <Button type="submit">sign for free</Button>
      )}
    </>
  );
}
