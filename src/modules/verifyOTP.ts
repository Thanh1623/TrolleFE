import authService from "@/services/authService";
import { useMutation } from "@tanstack/react-query";

export const useSendOtp = () => {
  return useMutation({
    mutationFn: async (body: { email: string }) => {
      const response = await authService.sendOTP(body.email);
      return response;
    },
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: async (body: { email: string; otp: string }) => {
      const response = await authService.verifyOTP(body.email, body.otp);
      console.log({ response });

      return response;
    },
  });
};
