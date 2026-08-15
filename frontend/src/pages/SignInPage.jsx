import { SignIn } from "@clerk/clerk-react";
import logo from "../assets/logo.svg";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-stone-50 px-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Steinoak" className="h-10 w-10" />
        <span className="text-2xl font-semibold tracking-tight text-stone-900">Steinoak</span>
      </div>
      <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" fallbackRedirectUrl="/dashboard" />
    </div>
  );
}
