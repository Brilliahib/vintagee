"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { LoginType, loginSchema } from "@/validators/auth/login-validator";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function FormAuthLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  });
  const router = useRouter();

  const onSubmit = async (body: LoginType) => {
    setIsLoading(true);
    const res = await signIn("credentials", { ...body, redirect: false });
    setIsLoading(false);

    if (!res || res.error) {
      toast.error("Login Failed", {
        description:
          res?.error === "CredentialsSignin"
            ? "Email or password is wrong."
            : "An error occurred, please try again.",
      });
      return;
    }

    toast.success("Login Berhasil", {
      description:
        "Selamat datang kembali! Anda akan diarahkan menuju halaman dashboard",
    });

    router.push("/dashboard");
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card className="w-full border-0 shadow-transparent">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Login
          </CardTitle>
          <CardDescription>
            Welcome! Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        id="email"
                        placeholder="m@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Loading..." : "Login"}{" "}
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-6 space-y-4 text-center">
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-primary underline underline-offset-4"
              >
                Sign up
              </Link>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
