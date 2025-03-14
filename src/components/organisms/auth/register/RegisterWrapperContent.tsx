import FormAuthRegister from "@/components/molecules/form/auth/FormAuthRegister";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function RegisterWrapperContent() {
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
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={"/images/logo_notext.png"}
              alt="Vintagee"
              width={20}
              height={20}
            />
            <h1 className="font-semibold tracking-tight text-primary">
              Vintagee
            </h1>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="max-w-md text-lg">Selamat Datang</p>
            <footer className="text-sm">
              Temukan gaya unikmu! Jual, beli, dan barter pakaian vintage dengan
              mudah, aman, dan stylish.
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center gap-y-4 sm:w-[350px]">
          <FormAuthRegister />
        </div>
      </div>
    </div>
  );
}
