import authService from "@/services/authService";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (body: { email: string; password: string }) => {
      const response = await authService.register(body.email, body.password);
      return response;
    },
  });
};
