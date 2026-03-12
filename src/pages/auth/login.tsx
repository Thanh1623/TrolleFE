import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ROUTES } from "@/routes/route-constants";
import { HelpCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email) {
      setError("Enter your email");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login success (demo)");
    }, 1500);
  }

  return (
    <div>
      {/* Atlassian background shapes */}
      <div className="w-full min-w-[400px] bg-card border border-border rounded-lg shadow-md p-8 space-y-6 z-10">
        {/* Logo */}

        <div className="flex justify-center gap-2 items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-[#0C66E4] text-white font-bold">
            T
          </div>

          <h1 className="text-xl font-semibold"></h1>
        </div>

        <h2 className="text-center text-lg font-semibold">
          Log in to continue
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label>Email address</Label>

            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-10"
            />

            {error && <p className="text-xs text-red-500">{error}</p>}
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="remember" />

            <Label
              htmlFor="remember"
              className="flex items-center gap-1 text-sm font-normal"
            >
              Remember me
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
            </Label>
          </div>

          <Button
            disabled={loading}
            className="w-full h-10 bg-[#0C66E4] hover:bg-[#0055CC] text-white"
          >
            {loading ? "Continuing..." : "Continue"}
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          Or continue with:
        </div>

        {/* Social buttons */}

        <div className="grid gap-2">
          <Button
            variant="outline"
            className="w-full h-10 font-normal flex gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5"
            />
            Continue with Google
          </Button>

          <Button
            variant="outline"
            className="w-full h-10 font-normal flex gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/448239/microsoft.svg"
              className="w-5"
            />
            Continue with Microsoft
          </Button>

          <Button
            variant="outline"
            className="w-full h-10 font-normal flex gap-2"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/960px-Apple_Computer_Logo_rainbow.svg.png"
              className="w-5"
            />
            Continue with Apple
          </Button>

          <Button
            variant="outline"
            className="w-full h-10 font-normal flex gap-2"
          >
            <img
              src="https://companieslogo.com/img/orig/WORK-d00db09e.png?t=1720244494"
              className="w-5"
            />
            Continue with Slack
          </Button>
        </div>

        <div className="text-center text-sm space-x-2">
          <Link to="#" className="text-[#0C66E4] hover:underline">
            Can't log in?
          </Link>

          <span className="text-muted-foreground">•</span>

          <Link to={ROUTES.REGISTER} className="text-[#0C66E4] hover:underline">
            Create an account
          </Link>
        </div>

        <div className="text-center pt-4 border-t border-border space-y-2">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground">
            ATLASSIAN
          </p>

          <p className="text-xs text-muted-foreground">
            One account for Trello, Jira, Confluence and more
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
