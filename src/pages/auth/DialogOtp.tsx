import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useAuth } from "@/hooks/useAuth";
import { useVerifyOtp } from "@/modules/verifyOTP";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DialogOtp({
  step,
  setStep,
  email = "",
}: {
  step: "email" | "otp";
  setStep: React.Dispatch<React.SetStateAction<"email" | "otp">>;
  email?: string;
}) {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { mutateAsync: verifyOtpMutation } = useVerifyOtp();
  const { login } = useAuth();

  async function handleOtpChange(value: string) {
    if (value.length === 6) {
      try {
        const response = await verifyOtpMutation({
          email: email,
          otp: value,
        });
        if (response.data.accessToken && response.data.refreshToken) {
          setStep("email");
          navigate("/");
          await login();
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
        setError("Invalid OTP. Please try again.");
      }
    }
  }
  return (
    <Dialog
      open={step === "otp"}
      onOpenChange={(open) => {
        if (!open) {
          setStep("email");
        }
      }}
    >
      <DialogContent className="flex flex-col items-center gap-4">
        <DialogTitle></DialogTitle>
        <Field className="w-fit">
          <div className="text-center">OTP</div>
          <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
            onChange={handleOtpChange}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </Field>
        {error && <div className="text-red-500">{error}</div>}
      </DialogContent>
    </Dialog>
  );
}
