"use client";
import { useFormStatus } from "react-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export function Form() {
  return (
    <form className="flex flex-col md:flex-row gap-4 w-full">
      <Input
        type="text"
        className="flex-grow md:w-[80%]"
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

  return pending ? (
    <Button disabled className="md:w-[10%] shrink-0">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      please wait
    </Button>
  ) : (
    <Button type="submit" className="md:w-[10%] shrink-0">
      sign for free
    </Button>
  );
}
