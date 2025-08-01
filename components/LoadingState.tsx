import { Skeleton } from "./ui/skeleton";

export function LoadingMessages() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="space-y-2 flex flexcol">
          <Skeleton className="h-4 w-[250]" />
          <Skeleton className="h-4 w-[200]" />
        </div>
      </div>
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="space-y-2 flex flexcol">
          <Skeleton className="h-4 w-[250]" />
          <Skeleton className="h-4 w-[200]" />
        </div>
      </div>
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="space-y-2 flex flexcol">
          <Skeleton className="h-4 w-[250]" />
          <Skeleton className="h-4 w-[200]" />
        </div>
      </div>
    </div>
  );
}

export function GuestBookFormLoading() {
  return (
    <div className="w-full ">
      <Skeleton className="h-10 rounded-lg w-full" />
    </div>
  );
}
