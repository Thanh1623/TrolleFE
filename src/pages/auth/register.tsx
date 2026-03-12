"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!agreeTerms) {
      alert("Please agree to the Terms of Service");
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
  };

  return (
    <div className="py-2">
      <div className="w-full max-w-[400px] bg-card border border-border rounded-lg shadow-md p-8 space-y-6">
        {/* Logo */}
        <div className="flex justify-center gap-2 items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-[#0C66E4] text-white font-bold">
            T
          </div>
        </div>

        <h2 className="text-center text-lg font-semibold">Create an account</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label>Email address</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="h-10"
              required
            />
          </div>

          <div className="space-y-1">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter a password"
              value={formData.password}
              onChange={handleChange}
              className="h-10"
              required
            />
            <p className="text-xs text-muted-foreground">
              At least 8 characters
            </p>
          </div>

          <div className="space-y-1">
            <Label>Confirm password</Label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="h-10"
              required
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2">
            <Checkbox
              id="terms"
              checked={agreeTerms}
              onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
            />

            <span className="text-sm font-normal cursor-pointer">
              I agree to the{" "}
              <Link to="#" className="text-[#0C66E4] hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="#" className="text-[#0C66E4] hover:underline">
                Privacy Policy
              </Link>
            </span>
          </div>

          <Button
            type="submit"
            disabled={loading || !agreeTerms}
            className="w-full h-10 bg-[#0C66E4] hover:bg-[#0055CC] text-white"
          >
            {loading ? "Creating account..." : "Sign up"}
          </Button>
        </form>

        {/* Social */}
        <div className="text-center text-sm text-muted-foreground">
          Or sign up with:
        </div>

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

        {/* Login link */}
        <div className="text-center text-sm space-x-2">
          <span className="text-muted-foreground">
            Already have an account?
          </span>

          <Link to="/login" className="text-[#0C66E4] hover:underline">
            Log in
          </Link>
        </div>

        {/* Footer */}
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
