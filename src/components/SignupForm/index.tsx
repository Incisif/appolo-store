"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Label } from "@/components/ui/label";
import Link from "next/link";

// Schéma de validation Zod
const signupSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  rememberMe: z.boolean(),
});

// Type de données du formulaire basé sur Zod
type SignupFormData = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  // Préremplir l'email à partir du localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem("signupEmail");
    if (savedEmail) {
      setValue("email", savedEmail);
    }
  }, [setValue]);

  // Soumission du formulaire
  const onSubmit = async (data: SignupFormData) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: `${data.firstName} ${data.lastName}`,
            email: data.email,
            password: data.password,
          }),
        }
      );

      const result = await res.json();

      if (res.ok) {
        toast.success("Signup successful!");
        localStorage.setItem("signupEmail", data.email);
      } else if (result.error?.message) {
        // Afficher le message d'erreur spécifique
        toast.error(result.error.message);
      } else {
        toast.error(result.message || "An error occurred during signup.");
      }
    } catch {
      toast.error("An error occurred during signup.");
    }
  };

  return (
    <div className="bg-zinc-200 p-8 rounded-md mx-auto border-zinc-400 border-1 w-96">
      <h1 className="text-2xl font-semibold  text-zinc-700 mb-4">
        Sign Up To Get Started
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        data-testid="signup-form"
      >
        {/* Champ Email */}
        <div>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            className="w-w-full h-14 border-zinc-300 bg-white rounded-none"
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

        {/* Champ FirstName */}
        <div>
          <Input
            id="firstName"
            type="text"
            placeholder="First Name"
            className="w-full h-14 border-zinc-300 bg-white rounded-none"
            {...register("firstName")}
            aria-label="firstName"
            data-testid="firstName-input"
          />
          {errors.firstName && (
            <p
              className="text-red-500 text-sm mt-1"
              data-testid="firstName-error"
            >
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Champ LastName */}
        <div>
          <Input
            id="lastName"
            type="text"
            placeholder="Last Name"
            className="w-full h-14 border-zinc-300 bg-white rounded-none"
            {...register("lastName")}
            aria-label="lastName"
            data-testid="lastName-input"
          />
          {errors.lastName && (
            <p
              className="text-red-500 text-sm mt-1"
              data-testid="lastName-error"
            >
              {errors.lastName.message}
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
          Join Us
        </Button>
      </form>
      <div className=" mt-6 border-b-2 border-zinc-400"></div>

      <p className=" mt-6">
        Already have an account?{" "}
        <Link href="/signin" className="text-blue-600 underline ml-2">
          Sign in
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default SignupForm;
