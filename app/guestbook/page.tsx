/* eslint-disable @next/next/no-img-element */
import { Form } from "@/components/Form";
import {
  GuestBookFormLoading,
  LoadingMessages,
} from "@/components/LoadingState";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { prisma } from "@/lib/prisma";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Suspense } from "react";

async function getGuestbookEntry() {
  const data = await prisma.guestBookEntry.findMany({
    select: {
      User: {
        select: {
          firstname: true,
          profileimage: true,
        },
      },
      message: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 30,
  });
  return data;
}

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
          <Suspense fallback={GuestBookFormLoading()}>
            {" "}
            <GuestBookForm />
          </Suspense>

          <ul className="pt-7 gap-y-5 flex flex-col">
            <Suspense fallback={LoadingMessages()}>
              <GuestbookEntries />
            </Suspense>
          </ul>
        </CardHeader>
      </Card>
    </section>
  );
}

async function GuestbookEntries() {
  const data = await getGuestbookEntry();

  if (data.length === 0) {
    return null;
  }
  return data.map((item) => (
    <li key={item.id}>
      <div className="flex items-center">
        <img
          src={item.User?.profileimage as string}
          alt="user profile image"
          className="w-10 h-10 rounded-lg"
        />
        <p className="text-muted-foreground pl-3 break-words">
          {item.User?.firstname}:
          <span className="text-foreground pl-3">{item.message}</span>
        </p>
      </div>
    </li>
  ));
}

async function GuestBookForm() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (user) {
    return <Form />;
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
      <RegisterLink>
        <Button className="md:w-[10%] shrink-0">Sign</Button>
      </RegisterLink>
    </div>
  );
}
