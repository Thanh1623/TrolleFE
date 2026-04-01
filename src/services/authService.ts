import { LoginResponse } from "@/interfaces/auth";
import { axiosService } from "./axios";
// CREATE user
const authService = {
  register: async (email: string, password: string) => {
    const response = await axiosService.post("/auth/register", {
      email,
      password,
    });
    return response;
  },
  login: async (email: string, password: string) => {
    const response = await axiosService.post("/auth/login", {
      email,
      password,
    });
    return response;
  },

  sendOTP: async (email: string) => {
    const response = await axiosService.post("/auth/send-email", { email });
    return response;
  },

  verifyOTP: async (email: string, otp: string) => {
    const response = await axiosService.post<LoginResponse>(
      "/auth/verify-otp",
      {
        email,
        otp,
      },
    );
    return response;
  },
};

export default authService;
