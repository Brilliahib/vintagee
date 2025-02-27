import FormAuthLogin from "@/components/molecules/form/auth/FormAuthLogin";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LoginWrapperContent() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 hidden md:right-8 md:top-8",
        )}
      >
        Sign In
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-auth-pattern bg-cover bg-no-repeat grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        <div className="relative z-20 flex items-center gap-x-3 text-lg font-medium">
          Vintagee
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="max-w-md text-lg">Vintagee</p>
            <footer className="text-sm">
              Temukan gaya unikmu! Jual, beli, dan barter pakaian vintage dengan
              mudah, aman, dan stylish.
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center gap-y-4 sm:w-[350px]">
          <FormAuthLogin />
        </div>
      </div>
    </div>
  );
}
