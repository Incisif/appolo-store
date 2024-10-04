"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

// Schéma de validation Zod pour la connexion
const signinSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  rememberMe: z.boolean(),
});

// Type de données du formulaire basé sur Zod
type SigninFormData = z.infer<typeof signinSchema>;

const SigninForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
    mode: "onChange",
  });

  // Soumission du formulaire
  const onSubmit = async (data: SigninFormData) => {
    const signinPromise = fetch('/api/auth/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe, // Pass the remember me value
      }),
    }).then(async (res) => {
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message || "Signin failed");
      }
      setTimeout(() => {
        router.push("/");
      }, 2000);
      return result;
    });
  
    toast.promise(signinPromise, {
      pending: "Signing in...",
      success: "Signin successful 👌",
      error: {
        render({ data }: { data: { message?: string } }) {
          return `Error: ${data?.message ?? "An error occurred"}`;
        },
      },
    });
  };

  return (
    <div className="bg-zinc-200 p-8 rounded-md mx-auto border-zinc-400 border-1 w-96">
      <h1 className="text-2xl font-semibold text-zinc-700 mb-4">Sign In</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        data-testid="signin-form"
      >
        {/* Champ Email */}
        <div>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full h-14 border-zinc-300 bg-white rounded-none"
            {...register("email")}
            aria-label="email"
            data-testid="email-input"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1" data-testid="email-error">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Champ Password */}
        <div>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full h-14 border-zinc-300 bg-white rounded-none"
            {...register("password")}
            aria-label="password"
            data-testid="password-input"
          />
          {errors.password && (
            <p
              className="text-red-500 text-sm mt-1"
              data-testid="password-error"
            >
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Radio Remember Me */}
        <div className="flex items-center">
          <Label htmlFor="rememberMe" className="text-sm">
            Remember Me
          </Label>
          <input
            id="rememberMe"
            type="checkbox"
            className="ml-2 w-4 h-4"
            {...register("rememberMe")}
            data-testid="rememberMe-checkbox"
          />
        </div>

        {/* Bouton Submit */}
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white h-12 rounded-none"
          data-testid="submit-button"
        >
          Sign In
        </Button>
      </form>
      <div className=" mt-6 border-b-2 border-zinc-400"></div>

      <p className="mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-blue-600 underline ml-2">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SigninForm;
