"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Définition du schéma Zod pour la validation de l'email
const signupSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
});

// Type inferé à partir du schéma Zod
type SignupFormData = z.infer<typeof signupSchema>;

const SignupDiscountBanner = () => {
  const router = useRouter();

  // Initialisation du formulaire avec React Hook Form et Zod
  const { register, handleSubmit, getValues } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  // Fonction de soumission du formulaire
  const onSubmit = (data: SignupFormData) => {
    // Vérification si on est côté client avant d'utiliser localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("signupEmail", data.email);
    }

    // Redirection vers la page d'inscription
    router.push("/signup");
  };

  // Fonction pour gérer le clic sur le bouton
  const handleClick = () => {
    const { email } = getValues();
    const isValidEmail = signupSchema.safeParse({ email }).success;

    if (isValidEmail) {
      onSubmit({ email });
    } else {
      // Afficher une popup en bas à droite si l'email est invalide
      toast.error("Veuillez entrer une adresse email valide.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <section
      data-testid="signup-discount-banner"
      className="flex flex-col sm:flex-row items-center justify-between bg-zinc-700 p-6 rounded-lg mt-11"
    >
      {/* Section Texte */}
      <div
        data-testid="signup-discount-banner-text"
        className="flex flex-col w-1/2 ml-[20%]"
      >
        <h2 className="text-4xl font-bold text-white mb-2">
          10% Off Your First Purchase!
        </h2>
        <p className="text-white mb-4">
          Sign up for our newsletter and enjoy exclusive savings.
        </p>
        {/* Formulaire d'inscription */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center w-full h-12 sm:w-auto"
        >
          <div className="flex flex-col mb-4 sm:mb-0 sm:mr-4 items-center ">
            <Input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email")}
              data-testid="email-input"
              className=" border-blue-600 rounded-none h-12 w-96 placeholder:text-white focus:outline-none "
            />
          </div>
          <Button
            type="button"
            onClick={handleClick}
            className="w-full h-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-none "
            data-testid="signup-discount-banner-button"
          >
            Signup
          </Button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SignupDiscountBanner;
