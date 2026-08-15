import { SignUp } from "@clerk/clerk-react";
import logo from "../assets/logo.svg";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-stone-50 px-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Steinoak" className="h-10 w-10" />
        <span className="text-2xl font-semibold tracking-tight text-stone-900">Steinoak</span>
      </div>
      <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" fallbackRedirectUrl="/dashboard" />
    </div>
  );
}
